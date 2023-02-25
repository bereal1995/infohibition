import React, { Component, FunctionComponent, ReactElement } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import RejectedFallback from '@/components-shared/error/RejectedFallback';
import PendingFallback from '@/components-shared/error/PendingFallback';
import AsyncBoundary from '@/components-shared/error/AsyncBoundary';
import ExpectedError from '@/lib/error';
import { captureExpected, captureUnhandledRejection } from '@/lib/sentry';

interface Props {
  pendingFallback?: React.ReactNode;
  rejectedFallback?: (
    props: any
  ) => ReactElement<
    unknown,
    string | FunctionComponent<{}> | typeof Component
  > | null;
  children: React.ReactNode;
}

const defaultRejectedFallback = RejectedFallback;
const defaultPendingFallback = <PendingFallback />;

function AsyncBoundaryWithQuery({
  pendingFallback = defaultPendingFallback,
  rejectedFallback = defaultRejectedFallback,
  children,
  ...props
}: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <AsyncBoundary
          onReset={reset}
          pendingFallback={pendingFallback}
          rejectedFallback={({ resetErrorBoundary, error }) => {
            const isExpectedError = error instanceof ExpectedError;

            if (isExpectedError) {
              captureExpected(error);
            } else {
              captureUnhandledRejection(error);
            }
            return rejectedFallback({
              resetErrorBoundary,
              isRetry: isExpectedError,
            });
          }}
          {...props}
        >
          {children}
        </AsyncBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default AsyncBoundaryWithQuery;
