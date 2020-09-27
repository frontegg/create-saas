import React, { useCallback } from 'react';
import Validator from 'validatorjs';

import { Button, Form, Label, Input } from 'reactstrap';
import './SampleForm.scss';
import { IField, SampleFormProps } from './types';

const SampleForm: React.FC<SampleFormProps> = ({ header, description, inputs, customErrors, alerts = false }) => {
  const [isEnableChangeInputEffect, setChangeInputEffect] = React.useState(false);
  const prevIsEnableChangeInputEffect = React.useRef(isEnableChangeInputEffect);

  const formValidationState: any = {};
  inputs.map((input: IField) => (formValidationState[input.name] = input.validation || ''));

  const [state, setState] = React.useState(() => {
    const stateObject: any = {};
    inputs.map((input) => (stateObject[input.name] = undefined));
    return stateObject;
  });

  const [formValidation, setValidation] = React.useState(() => {
    const stateFormValidation: any = {};
    inputs.map((input) => (stateFormValidation[input.name] = false));

    return stateFormValidation;
  });

  const [formAlertValidation, setAlertValidation] = React.useState(() => {
    const stateFormAlertValidation: any = {};
    inputs.map((input) => (stateFormAlertValidation[input.name] = false));

    return stateFormAlertValidation;
  });

  const validation = useCallback(() => {
    const validator = new Validator(state, formValidationState, customErrors);
    if (typeof validator !== 'undefined' && validator.fails()) {
      setValidation(() => validator.errors.all());
    } else setValidation({});
  }, [state, formValidationState, customErrors]);

  const alertValidation = (fieldName: string, value: any) => {
    const validator = new Validator({ [fieldName]: value }, formValidationState, customErrors);

    if (validator.fails()) {
      setAlertValidation({
        ...formAlertValidation,
        [fieldName]: validator.errors.all()[fieldName],
      });
    } else {
      setAlertValidation({
        ...formAlertValidation,
        [fieldName]: false,
      });
    }
  };

  const closeAlert = (e: any, fieldName: string) => {
    setAlertValidation({
      ...formAlertValidation,
      [fieldName]: false,
    });
  };

  const inputChangeHandler: any = (e: any) => {
    const { name, value, type, checked } = e.currentTarget;
    const targetValue = type !== 'checkbox' ? value.trim() : checked;
    setState({
      ...state,
      [name]: targetValue,
    });
    if (alerts) alertValidation(name, targetValue);
  };

  React.useEffect(() => {
    if (isEnableChangeInputEffect) {
      validation();
    }
  }, [isEnableChangeInputEffect, validation]);

  React.useEffect(() => {
    if (alerts && !prevIsEnableChangeInputEffect.current) {
      setAlertValidation(() => formValidation);
    }
    prevIsEnableChangeInputEffect.current = isEnableChangeInputEffect;
  }, [formValidation, alerts, isEnableChangeInputEffect]);

  return (
    <Form
      className='wiget form'
      onSubmit={(e) => {
        e.preventDefault();
        setChangeInputEffect(true);
        validation();
      }}>
      <div className='header'>{header}</div>
      <div className='description'>{description}</div>
      {alerts
        ? inputs.map((input, index) =>
            formAlertValidation[input.name] && isEnableChangeInputEffect ? (
              <div className='input-group'>
                <div className='input-field mb-2'>
                  <div
                    className='bg-transparent border-red-500 text-red-500 shadow border-l-4 border-current px-4 py-3 relative'
                    role='alert'>
                    <span className='block sm:inline'>{formAlertValidation[input.name][0]}</span>
                    <span
                      className='absolute top-0 bottom-0 right-0 px-4 py-3'
                      onClick={(e) => closeAlert(e, input.name)}>
                      <svg
                        className='fill-current h-6 w-6 text-red-500'
                        role='button'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'>
                        <title>Close</title>
                        <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ) : undefined,
          )
        : undefined}
      {inputs.map((input, index) => {
        if (input.options) {
          return (
            <div key={index} className='input-group'>
              <div className='input-field'>
                <Label>{input.label}</Label>
                <select
                  className={'form-control form-input mb-2' + (formValidation[input.name] ? ' border-red-500' : '')}
                  name={input.name}
                  onChange={(e) => inputChangeHandler(e)}>
                  {input.options.map((option) => {
                    return (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                {!alerts && formValidation[input.name] ? (
                  <p className='form-group text-red-500 text-xs'>{formValidation[input.name][0]}</p>
                ) : undefined}
              </div>
            </div>
          );
        }
        if (input.type === 'radio') {
          return (
            <div key={index} className='form-group'>
              <Label>{input.label}</Label>
              <div>
                {input.cases?.map((radio) => (
                  <div className='custom-control custom-control-inline custom-radio' key={input.name + radio}>
                    <Input
                      className='form-check-input custom-control-input'
                      placeholder={input.placeholder}
                      type={input.type}
                      name={input.name}
                      id={input.name + radio}
                      value={radio}
                      onChange={(e) => inputChangeHandler(e)}
                    />
                    <Label
                      className={
                        'form-check-label custom-control-label' + (formValidation[input.name] ? ' text-red-500' : '')
                      }
                      htmlFor={input.name + radio}>
                      {radio}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        if (input.type === 'checkbox') {
          return (
            <div key={index} className='form-group'>
              <div className='form-check custom-control custom-checkbox'>
                <input
                  className='custom-control-input'
                  type='checkbox'
                  name={input.name}
                  id={input.name}
                  onChange={(e) => inputChangeHandler(e)}
                />
                <label
                  className={'custom-control-label' + (formValidation[input.name] ? ' text-red-500' : '')}
                  htmlFor={input.name}>
                  {input.label}
                </label>
              </div>
            </div>
          );
        }
        return (
          <div key={index} className='input-group'>
            <div className='input-field'>
              <Label>{input.label}</Label>
              <Input
                className={'mb-2 form-input' + (formValidation[input.name] ? ' border-red-500' : '')}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                onChange={(e) => inputChangeHandler(e)}
              />
              {!alerts && formValidation[input.name] ? (
                <p className='text-red-500 text-xs'>{formValidation[input.name][0]}</p>
              ) : (
                ''
              )}
            </div>
          </div>
        );
      })}
      <Button color='primary'>Submit</Button>
    </Form>
  );
};

export default SampleForm;
