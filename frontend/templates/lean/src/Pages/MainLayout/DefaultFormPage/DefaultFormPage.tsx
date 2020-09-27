import React from 'react';
import { IField } from '../../../Components/DefaultForm/types';
import DefaultForm from '../../../Components/DefaultForm';

const DefaultFormPage: React.FC = () => {
  const TextInputs: IField[] = [
    {
      label: 'Label',
      type: 'text',
      placeholder: 'Enter something...',
      name: 'name',
      signature: 'This is a hint',
    },
    {
      label: 'First name',
      type: 'text',
      placeholder: 'john@example.com',
      name: 'name',
      signature: 'First name is required',
      validType: 'invalid',
    },
    {
      label: 'First name',
      type: 'text',
      placeholder: 'john@example.com',
      name: 'name',
      signature: 'First name is valid',
      validType: 'valid',
    },
  ];

  const InlineTextInputs: IField[] = [
    {
      label: 'Label',
      type: 'text',
      placeholder: 'Enter something...',
      name: 'name',
      signature: 'This is a hint',
    },
    {
      label: 'First name',
      type: 'text',
      placeholder: 'john@example.com',
      name: 'name',
      signature: 'First name is required',
      validType: 'invalid',
    },
    {
      label: 'First name',
      type: 'text',
      placeholder: 'john@example.com',
      name: 'name',
      signature: 'First name is valid',
      validType: 'valid',
    },
  ];

  const SelectInputs: IField[] = [
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
      validType: 'invalid',
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
      signature: 'First name is valid',
      validType: 'valid',
    },
  ];

  const InlineSelectInputs: IField[] = [
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
      validType: 'invalid',
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
      validType: 'valid',
    },
  ];

  const DefaultComponents: IField[] = [
    {
      label: 'Label',
      type: 'radio',
      name: 'r1',
      signature: 'This is a hint',
      values: ['Option 1', 'Option 2'],
    },
    {
      label: 'First name',
      type: 'radio',
      name: 'r2',
      signature: 'First name is required',
      values: ['Option 1', 'Option 2'],
      validType: 'invalid',
    },
    {
      label: 'First name',
      type: 'radio',
      name: 'r3',
      signature: 'First name is valid',
      values: ['Option 1', 'Option 2'],
      validType: 'valid',
    },
  ];

  const InlineRadioInputs: IField[] = [
    {
      label: 'Label',
      type: 'radio',
      name: 'r3',
      signature: 'This is a hint',
      values: ['Option 1', 'Option 2'],
    },
    {
      label: 'First name',
      type: 'radio',
      name: 'r4',
      signature: 'First name is required',
      values: ['Option 1', 'Option 2'],
      validType: 'invalid',
    },
    {
      label: 'First name',
      type: 'radio',
      name: 'r5',
      signature: 'First name is valid',
      values: ['Option 1', 'Option 2'],
      validType: 'valid',
    },
  ];

  const DefaultComponentsCheckbox: IField[] = [
    {
      label: 'Label',
      type: 'checkbox',
      name: 'r1',
      signature: 'This is a hint',
      values: ['Option 1', 'Option 2'],
    },
    {
      label: 'First name',
      type: 'checkbox',
      name: 'r2',
      signature: 'First name is required',
      values: ['Option 1', 'Option 2'],
      validType: 'invalid',
    },
    {
      label: 'First name',
      type: 'checkbox',
      name: 'r3',
      signature: 'First name is valid',
      values: ['Option 1', 'Option 2'],
      validType: 'valid',
    },
  ];

  const InlineCheckboxInputs: IField[] = [
    {
      label: 'Label',
      type: 'checkbox',
      name: 'r4',
      signature: 'This is a hint',
      values: ['Option 1', 'Option 2'],
    },
    {
      label: 'First name',
      type: 'checkbox',
      name: 'r5',
      signature: 'First name is required',
      values: ['Option 1', 'Option 2'],
      validType: 'invalid',
    },
    {
      label: 'First name',
      type: 'checkbox',
      name: 'r6',
      signature: 'First name is valid',
      values: ['Option 1', 'Option 2'],
      validType: 'valid',
    },
  ];

  return (
    <div className='defaultformpage'>
      <div className='section-title'>
        <div className='category'>FORMS</div>
        <div className='section-name'>Inputs</div>
      </div>
      <div className='main'>
        <DefaultForm inputs={TextInputs} description='Text inputs' header='Regular' />
        <DefaultForm inputs={InlineTextInputs} description='Inline text inputs' header='Inline' gridType={'inline'} />
        <DefaultForm inputs={SelectInputs} description='Select inputs' header='Selects' />
        <DefaultForm
          inputs={InlineSelectInputs}
          description='Inline select inputs'
          header='Inline Selects'
          gridType={'inline'}
        />
        <DefaultForm inputs={DefaultComponents} description='Default components' header='Radios' gridType={'inline'} />
        <DefaultForm
          inputs={InlineRadioInputs}
          description='Inline radio inputs'
          header='Inline radios'
          gridType={'inline'}
          radioInline={true}
        />
        <DefaultForm
          inputs={DefaultComponentsCheckbox}
          description='Default components'
          header='Checkboxes'
          gridType={'inline'}
        />
        <DefaultForm
          inputs={InlineCheckboxInputs}
          description='Inline checkbox inputs'
          header='Inline checkboxes'
          gridType={'inline'}
          radioInline={true}
        />
      </div>
    </div>
  );
};

export default DefaultFormPage;
