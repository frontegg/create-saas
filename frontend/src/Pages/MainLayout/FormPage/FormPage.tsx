import React from 'react';
import Form from '../../../Components/Form';
import { InputType } from '../../../Components/Form/Form';

const FormPage: React.FC = () => {
  const textInputs: InputType[] = [
    {
      label: 'Label',
      type: 'text',
      placeholder: 'Enter something...',
      name: 'name',
      signature: 'This is a hint',
      valid: false,
    },
    {
      label: 'First name',
      type: 'text',
      placeholder: 'john@example.com',
      name: 'name',
      signature: 'First name is required',
      valid: true,
    },
    {
      label: 'First name',
      type: 'text',
      placeholder: 'john@example.com',
      name: 'name',
      signature: 'First name is valid',
      valid: true,
    },
  ];

  const inlineTextInputs: InputType[] = [
    {
      label: 'Label',
      type: 'text',
      placeholder: 'Enter something...',
      name: 'name',
      signature: 'This is a hint',
      valid: false,
    },
    {
      label: 'First name',
      type: 'text',
      placeholder: 'john@example.com',
      name: 'name',
      signature: 'First name is required',
      valid: true,
    },
    {
      label: 'First name',
      type: 'text',
      placeholder: 'john@example.com',
      name: 'name',
      signature: 'First name is valid',
      valid: true,
    },
  ];

  const selectInputs: InputType[] = [
    {
      label: 'Label',
      type: 'select',
      options: [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
        { value: 'Option 4', label: 'Option 4' },
      ],
      name: 'select1',
      signature: 'This is a hint',
      valid: false,
    },
    {
      label: 'First name',
      type: 'select',
      options: [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
        { value: 'Option 4', label: 'Option 4' },
      ],
      name: 'select2',
      signature: 'First name is required',
      valid: false,
    },
    {
      label: 'First name',
      type: 'select',
      options: [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
        { value: 'Option 4', label: 'Option 4' },
      ],
      name: 'select3',
      signature: 'First name is valid',
      valid: true,
    },
  ];

  const inlineSelectInputs: InputType[] = [
    {
      label: 'Label',
      type: 'select',
      options: [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
        { value: 'Option 4', label: 'Option 4' },
      ],
      name: 'option',
      signature: 'This is a hint',
      valid: false,
    },
    {
      label: 'First name',
      type: 'select',
      options: [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
        { value: 'Option 4', label: 'Option 4' },
      ],
      name: 'option',
      signature: 'First name is required',
      valid: false,
    },
    {
      label: 'Label',
      type: 'select',
      options: [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
        { value: 'Option 4', label: 'Option 4' },
      ],
      name: 'option',
      signature: 'First name is valid',
      valid: true,
    },
  ];

  const defaultComponents: InputType[] = [
    {
      label: 'Label',
      type: 'radio',
      name: 'r1',
      signature: 'This is a hint',
      values: ['Option 1', 'Option 2'],
      valid: false,
    },
    {
      label: 'First name',
      type: 'radio',
      name: 'r2',
      signature: 'First name is required',
      values: ['Option 1', 'Option 2'],
      valid: false,
    },
    {
      label: 'First name',
      type: 'radio',
      name: 'r3',
      signature: 'First name is valid',
      values: ['Option 1', 'Option 2'],
      valid: true,
    },
  ];

  const inlineRadioInputs: InputType[] = [
    {
      label: 'Label',
      type: 'radio',
      name: 'r4',
      signature: 'This is a hint',
      values: ['Option 1', 'Option 2'],
      valid: false,
    },
    {
      label: 'First name',
      type: 'radio',
      name: 'r5',
      signature: 'First name is required',
      values: ['Option 1', 'Option 2'],
      valid: false,
    },
    {
      label: 'First name',
      type: 'radio',
      name: 'r6',
      signature: 'First name is valid',
      values: ['Option 1', 'Option 2'],
      valid: true,
    },
  ];

  const defaultComponentsCheckbox: InputType[] = [
    {
      label: 'Label',
      type: 'checkbox',
      name: 'r7',
      signature: 'This is a hint',
      values: ['Option 1', 'Option 2'],
      valid: false,
    },
    {
      label: 'First name',
      type: 'checkbox',
      name: 'r8',
      signature: 'First name is required',
      values: ['Option 1', 'Option 2'],
      valid: true,
    },
    {
      label: 'First name',
      type: 'checkbox',
      name: 'r9',
      signature: 'First name is valid',
      values: ['Option 1', 'Option 2'],
      valid: true,
    },
  ];

  const inlineCheckboxInputs: InputType[] = [
    {
      label: 'Label',
      type: 'checkbox',
      name: 'r10',
      signature: 'This is a hint',
      values: ['Option 1', 'Option 2'],
      valid: false,
    },
    {
      label: 'First name',
      type: 'checkbox',
      name: 'r11',
      signature: 'First name is required',
      values: ['Option 1', 'Option 2'],
      valid: false,
    },
    {
      label: 'First name',
      type: 'checkbox',
      name: 'r12',
      signature: 'First name is valid',
      values: ['Option 1', 'Option 2'],
      valid: true,
    },
  ];

  return (
    <div className='form-page'>
      <div className='section-title'>
        <div className='category'>FORMS</div>
        <div className='section-name'>Inputs</div>
      </div>
      <div className='main'>
        <Form inputs={textInputs} description='Text inputs' header='Regular' />
        <Form inputs={inlineTextInputs} description='Inline text inputs' header='Inline' inline={true} />
        <Form inputs={selectInputs} description='Select inputs' header='Selects' />
        <Form inputs={inlineSelectInputs} description='Inline select inputs' header='Inline Selects' inline={true} />
        <Form inputs={defaultComponents} description='Default components' header='Radios' inline={true} />
        <Form inputs={inlineRadioInputs} description='Inline radio inputs' header='Inline radios' inline={true} />
        <Form inputs={defaultComponentsCheckbox} description='Default components' header='Checkboxes' inline={true} />
        <Form
          inputs={inlineCheckboxInputs}
          description='Inline checkbox inputs'
          header='Inline checkboxes'
          inline={true}
        />
      </div>
    </div>
  );
};

export default FormPage;
