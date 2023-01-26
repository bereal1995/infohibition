import { themeVar } from '@/utils/theme';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button = forwardRef(
  (props: Props, forwardRef: Ref<HTMLButtonElement>) => {
    const { fullWidth = false, children, ...rest } = props;

    return (
      <StyledButton
        ref={forwardRef}
        className={`flex items-center justify-center ${
          fullWidth ? 'w-full' : ''
        }`}
        {...rest}
      >
        <span>{children}</span>
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

const StyledButton = styled.button`
  padding: 16px;
  background: ${themeVar.primary};
  border-radius: 5px;
  transition: opacity 0.2s linear;
  span {
    color: ${themeVar.on_background};
  }
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
