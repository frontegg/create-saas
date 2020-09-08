import * as React from 'react';
import {Button as B} from 'reactstrap';
import './Button.scss';

type Props = {
    outline?: boolean,
    color?: string,
    bgColor?: string,
    textColor?: string,
    boxShadow?: string,
    onHoverStyle?: React.CSSProperties,
} & React.HTMLAttributes<HTMLElement>;

const Base:React.FC<Props > = ({onHoverStyle = {}, style = {}, boxShadow = undefined, textColor = undefined, bgColor = undefined, color = "", outline, children, className, ...next}) => {
    const [hover, setHover] = React.useState(false);
    if (bgColor || textColor || boxShadow) {
        style = {
            ...style,
            color: textColor,
            backgroundColor: bgColor,
            boxShadow: boxShadow,
        }
    }
    return <B {...next} onMouseEnter={() => setHover(!hover)}  onMouseLeave={() => setHover(!hover)} className={className} style={ hover ? { ...style, ...onHoverStyle} : style} outline={outline} color={color}>
        {children}
    </B>
}

type ButtonProps = Pick<Props, Exclude<keyof Props, "outline">>;
export const Button:React.FC<ButtonProps> = (props) => {
    return  <Base {...props}>
                {props.children}
            </Base>
}
export const OutlineButton: React.FC<Props> = (props) => {
    return  <Base {...props} outline className={` ${props.className}`}>
                {props.children}
            </Base>
}
export const FlatButton: React.FC<Props> = (props) => {
    return  <Base {...props} style={{...props.style, backgroundColor: "inherit"}} outline className={`border-0 ${props.className}`}>
                {props.children}
            </Base>
}

export const RaisedButton: React.FC<Props> = (props) => {
    return  <Base {...props} className={`shadow border-0 ${props.className}`}>
                {props.children}
            </Base>
}

export const CircleButton: React.FC<Props> = (props) => {
    return  <Button {...props} className={`d-inline-flex align-items-center justify-content-center rounded-circle ${props.className}`}>
                {props.children}
            </Button>
}
export default Button;