import * as React from 'react';
import './Typography.scss';
import Widget from '../../../Widget';
import { Col, Row } from 'reactstrap';

const Typography: React.FC = () => {
    const colors = {
        black: "#000",
        gray: {
        },
        red: {
        },
        orange: {
        },
        yellow: {
        },
        green: {
        },
        teal: {
        },
        blue: {
        },
        indigo: {
        },
        purple: {
        },
        pink: {
        },
    }
    const fontSize = {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
    }
    const fontWeight = {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      }
    const letterSpacing = {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      }
    return <div className="Typography">
        <Widget>
            <Col>
                {Object.entries(colors).map(([color, value]: [string, any] ) => {
                    return Object.entries(fontSize).map(([size, value]: [string, any]) => {
                                    if(color !== "black")
                                    {
                                        let arr = [];
                                        for (let i = 1; i < 10; i++) {
                                            arr.push(
                                                <Row>
                                                    <Col sm={2} className="text-sm"><code>.text-{color}-{i}00 .text-{size}</code></Col>
                                                    <Col sm={10}>
                                                        <div className={`text-${color}-${i}00 text-${size}`}>
                                                            Default full text
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                        }
                                        return arr;
                                    }
                                    else {
                                        return <Row>
                                                    <Col sm={2} className="text-sm"><code>.text-{color} .text-{size}</code></Col>
                                                    <Col sm={10}>
                                                        <div className={`text-${color} text-${size}`}>
                                                            Default full text
                                                    </div>
                                                    </Col>
                                                </Row>
                                    }
                            })}
                        )}
            </Col>
        </Widget>
    </div>
}

export default Typography;