import React from 'react';

import './FormSteps.scss';

type Props = {
  label?: string;
  text_label?: string;
  onClick?: (event: React.MouseEvent<any>, currentNumber: number) => void;
} & React.HTMLAttributes<HTMLElement>;

const Base: React.FC<Props> = ({ children }) => {
  return (
    <div className='content_step mb-5'>
      <div>
        <div className='row'>
          <div className='col-md-12 mx-0'>{children}</div>
        </div>
      </div>
    </div>
  );
};

type StepProps = {
  steps?: {
    active?: boolean;
    visited?: boolean;
    label: string;
    number?: number;
    disabled?: boolean;
  }[];
};

export const CircleStep: React.FC<Props & StepProps> = (props) => {
  return (
    <Base {...props}>
      <div className='d-flex w-100' id='msform'>
        {props.steps &&
          props.steps.map((step, index) => {
            return (
              <div
                style={step.disabled ? { cursor: 'not-allowed' } : {}}
                key={index}
                className={` ${
                  step.active ? 'active' : ''
                } flex-1 d-flex step justify-content-center align-items-center`}
                onClick={(event) => {
                  if (!step.disabled && props.onClick) {
                    props.onClick(event, step.number || index + 1);
                  }
                }}>
                <span
                  className={` d-inline-flex h-10 w-10  ${step.visited ? 'bg-success' : ''} ${
                    step.active ? 'bg-primary' : 'bg-secondary'
                  } align-items-center justify-content-center rounded-circle`}>
                  {step.number || index + 1}
                </span>
              </div>
            );
          })}
      </div>
    </Base>
  );
};

export const NestedStep: React.FC<Props & StepProps> = (props) => {
  return (
    <Base {...props}>
      <div id='blockform'>
        <div id='blockbar' className='d-flex w-100'>
          {props.steps &&
            props.steps.map((step, index) => (
              <div
                key={index}
                className={`d-flex stepone w-25  ${step.visited ? 'bg-success' : ''} ${step.active ? 'activ' : ''} pad`}
                style={step.disabled ? { cursor: 'not-allowed' } : {}}
                onClick={(event) => {
                  if (!step.disabled && props.onClick) {
                    props.onClick(event, step.number || index + 1);
                  }
                }}>
                <div className='step align-self-center'>
                  <span className='stepnumber text-black bg-white d-flex justify-content-center align-items-center'>
                    {step.number}
                  </span>
                </div>
                <div className='flex-column w-100 ml-3'>
                  <div className={`${step.active ? 'text-white' : 'text-dark'} font-weight-bold`}>
                    Step {step.number}
                  </div>
                  <div className={`${step.active ? 'text-white' : 'text-dark'}`}>{step.label}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Base>
  );
};

export const RectangleStep: React.FC<Props & StepProps> = (props) => {
  return (
    <Base {...props}>
      <div className='designation'>
        <div className='d-flex w-100'>
          {props.steps &&
            props.steps.map((step, index) => {
              return (
                <div className='w-25' key={index}>
                  <button
                    disabled={step.disabled}
                    style={step.disabled ? { cursor: 'not-allowed' } : {}}
                    className={`btn btn-default rounded-0 w-100  ${step.visited ? 'btn-success border-0' : ''} ${
                      step.active ? 'btn-primary text-white' : '  text-dark'
                    }`}
                    onClick={(event) => {
                      if (!step.disabled && props.onClick) {
                        props.onClick(event, step.number || index + 1);
                      }
                    }}>
                    Step {step.number}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </Base>
  );
};

// export default CircleStep;
