import React from 'react';
import { Button as ReactstrapButton, ButtonProps as ReactstrapButtonProps } from 'reactstrap';
import classNames from 'classnames';

interface ButtonProps extends ReactstrapButtonProps {
  onHoverStyle?: React.CSSProperties;
  onActiveStyle?: React.CSSProperties;
  onFocusStyle?: React.CSSProperties;
  hoverClassName?: string;
  activeClassName?: string;
  focusClassName?: string;
}

type OutlineButtonProps = Omit<ButtonProps, 'outline'>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    style,
    className,
    children,
    active,
    onFocus,
    onHoverStyle,
    onActiveStyle,
    onFocusStyle,
    hoverClassName = '',
    focusClassName = '',
    activeClassName = '',
    ...rest
  } = props;
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const klassNames = classNames(className, {
    [focusClassName]: focus,
    [activeClassName]: active,
    [hoverClassName]: hover,
  });

  return (
    <ReactstrapButton
      {...rest}
      onFocus={(e: React.FocusEvent<HTMLButtonElement>) => {
        onFocus?.(e);
        setFocus(!focus);
      }}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      className={klassNames}
      style={{
        ...style,
        ...(hover && onHoverStyle),
        ...(active && onActiveStyle),
        ...(focus && onFocusStyle),
      }}>
      {children}
    </ReactstrapButton>
  );
};

const OutlineButton: React.FC<OutlineButtonProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Button {...rest} outline className={className}>
      {children}
    </Button>
  );
};

const FlatButton: React.FC<ButtonProps> = (props) => {
  const { style, children, className, ...rest } = props;
  return (
    <Button
      {...rest}
      style={{ ...style, backgroundColor: 'inherit' }}
      outline
      className={classNames('border-0', className)}>
      {children}
    </Button>
  );
};

const RaisedButton: React.FC<ButtonProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Button {...rest} className={classNames('shadow', 'border-0', className)}>
      {children}
    </Button>
  );
};

const CircleButton: React.FC<ButtonProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Button
      {...rest}
      className={classNames(
        'd-inline-flex',
        'align-items-center',
        'justify-content-center',
        'rounded-circle',
        className,
      )}>
      {children}
    </Button>
  );
};

export { Button, OutlineButton, FlatButton, RaisedButton, CircleButton };
