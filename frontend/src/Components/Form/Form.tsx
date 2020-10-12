import React from 'react';
import { Form as ReactstrapForm } from 'reactstrap';
import { Radio, CheckBox, Select, Input, OptionType } from './Inputs';
import classNames from 'classnames';
import './Form.scss';

type InputTypes = 'select' | 'radio' | 'checkbox' | 'email' | 'text' | 'password' | 'number';

export interface InputType {
  type: InputTypes;
  label: string;
  name: string;
  signature: string;
  placeholder?: string;
  options?: OptionType[];
  values?: string[];
  valid: boolean;
}

type FormProps = {
  header: string;
  description: string;
  inputs: InputType[];
  inline?: boolean;
};

const INPUTS = {
  select: Select,
  radio: Radio,
  checkbox: CheckBox,
  email: Input,
  text: Input,
  number: Input,
  password: Input,
};

function prepareClassName(type: InputTypes, inline: boolean) {
  switch (type) {
    case 'select':
      return classNames('form-group', { 'form-inline': inline, col: !inline });
    case 'radio':
    case 'checkbox':
      return classNames('form-group', { 'form-inline': inline });
    default:
      return classNames({ col: !inline });
  }
}

function getInputType(type: InputTypes) {
  switch (type) {
    case 'select':
    case 'radio':
    case 'checkbox':
      return;
    default:
      return type;
  }
}

const Form: React.FC<FormProps> = (props) => {
  const { header, description, inputs, inline = false } = props;
  return (
    <ReactstrapForm className='wiget form'>
      <div className='header'>{header}</div>
      <div className='description'>{description}</div>
      <div className={classNames({ row: !inline })}>
        {inputs.map((input: InputType, index: number) => {
          const { type, placeholder = '', options = [], values = [], ...rest } = input;
          const InputElement = INPUTS[type];
          const klassName = prepareClassName(type, inline);
          return (
            <InputElement
              key={index}
              placeholder={placeholder}
              className={klassName}
              inline={inline}
              options={options}
              values={values}
              type={getInputType(type)}
              {...rest}
            />
          );
        })}
      </div>
    </ReactstrapForm>
  );
};

export default Form;
