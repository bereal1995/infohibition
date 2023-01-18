import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button = forwardRef(
  (props: Props, forwardRef: Ref<HTMLButtonElement>) => {
    const { fullWidth = false, children, ...rest } = props;

    return (
      <button
        ref={forwardRef}
        className={`flex items-center justify-center ${
          fullWidth ? 'w-full' : ''
        }`}
        {...rest}
      >
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
