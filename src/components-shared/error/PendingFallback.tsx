import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import Spinner from '@/components-shared/system/Spinner';

function PendingFallback() {
  return (
    <Block>
      <Spinner />
    </Block>
  );
}

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

const Block = styled.div`
  svg {
    animation: ${spinner} 1s linear infinite;
  }
`;

export default PendingFallback;
