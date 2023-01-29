import styled from '@emotion/styled';

import SpinnerIcon from '@/img/spinner_icon.svg';
import { themeVar } from '@/utils/theme';
import { keyframes } from '@emotion/react';

interface Props {
  className?: string;
}

function Spinner({ className }: Props) {
  return (
    <Container className={className}>
      <SpinnerIcon />
    </Container>
  );
}

const spinner_frames = keyframes`
  0% {
     transform: rotate(0deg);
   }
   100% {
     transform: rotate(360deg);
   }
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  color: ${themeVar.primary};
  svg {
    animation: ${spinner_frames} 1s linear infinite;
  }
`;

export default Spinner;
