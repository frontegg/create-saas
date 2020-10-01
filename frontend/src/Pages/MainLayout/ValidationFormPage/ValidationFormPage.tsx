import React from 'react';
import { IField } from '../../../Components/SampleForm/types';
import SampleForm from '../../../Components/SampleForm';

const ValidationFormPage: React.FC = () => {
  const customErrors: any = {
    required: ':attribute is required',
    regex: 'Please enter a valid :attribute',
    email: 'Please enter a valid :attribute',
    'required.username': 'Please enter a valid :attribute',
    'required.email': 'Please enter a valid :attribute',
    'min.password': 'Your :attribute should have at least :min characters',
    'max.password': 'Your :attribute should have no more than :max characters',
    'min.Age': 'You must be :min or older to create an account',
    'max.Age': 'You must be :max or younger to create an account',
    'regex.Planet': 'Only users from earth can create an account',
    'required.Terms of service2': 'Please agree to our terms of service',
    'regex.Terms of service2': 'Please agree to our terms of service',
    'required.Gender2': 'Gender is required',
  };

  const ContactInputs: IField[] = [
    {
      label: 'Username',
      type: 'text',
      placeholder: 'Enter you username',
      name: 'username',
      validation: 'required|string',
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter you emaill',
      name: 'email',
      validation: 'required|email',
    },
    {
      label: 'Password',
      type: 'password',
      placeholder: 'Enter you password',
      name: 'password',
      validation: 'required|string|min:4|max:8',
    },
    {
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter something...',
      name: 'Message',
      validation: 'required|string',
    },
    {
      label: 'Age',
      type: 'number',
      placeholder: '',
      name: 'Age',
      validation: 'required|numeric|min:13|max:65',
    },
    {
      label: 'Pattern',
      type: 'text',
      placeholder: '###-###-###',
      name: 'Phone number',
      validation: 'required|regex:/^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/m',
    },
    {
      label: 'Planet',
      type: 'text',
      placeholder: 'Type earth',
      name: 'Planet',
      validation: 'required|string|regex:/^earth$/m',
    },
    {
      label: 'Country',
      type: 'select',
      options: [
        { value: '', label: 'Select country' },
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
        { value: 'australia', label: 'Australia' },
      ],
      name: 'Country',
      validation: 'required',
    },
    {
      label: 'I agree to the terms of service',
      type: 'checkbox',
      name: 'Terms of service',
      validation: 'required|regex:true',
    },
    {
      label: 'Gender',
      type: 'radio',
      name: 'Gender',
      cases: ['Male', 'Female'],
      validation: 'required',
    },
  ];
  const LoginInputs: IField[] = [
    {
      label: 'Username',
      type: 'text',
      placeholder: 'Enter you username',
      name: 'username',
      validation: 'required|string',
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter you emaill',
      name: 'email',
      validation: 'required|email',
    },
    {
      label: 'Password',
      type: 'password',
      placeholder: 'Enter you password',
      name: 'password',
      validation: 'required|string|min:4|max:8',
    },
    {
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter something...',
      name: 'Message',
      validation: 'required|string',
    },
    {
      label: 'Age',
      type: 'number',
      placeholder: '',
      name: 'Age',
      validation: 'required|numeric|min:13|max:65',
    },
    {
      label: 'Pattern',
      type: 'text',
      placeholder: '###-###-###',
      name: 'Phone number',
      validation: 'required|regex:/^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/m',
    },
    {
      label: 'Planet',
      type: 'text',
      placeholder: 'Type earth',
      name: 'Planet',
      validation: 'required|string|regex:/^earth$/m',
    },
    {
      label: 'Country',
      type: 'select',
      options: [
        { value: '', label: 'Select country' },
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
        { value: 'australia', label: 'Australia' },
      ],
      name: 'Country',
      validation: 'required',
    },
    {
      label: 'I agree to the terms of service',
      type: 'checkbox',
      name: 'Terms of service2',
      validation: 'required|regex:true',
    },
    {
      label: 'Gender',
      type: 'radio',
      name: 'Gender2',
      cases: ['Male', 'Female'],
      validation: 'required',
    },
  ];

  return (
    <div className='sampleformpage'>
      <div className='section-title'>
        <div className='category'>FORMS</div>
        <div className='section-name'>Validation</div>
      </div>
      <div className='main'>
        <SampleForm
          inputs={ContactInputs}
          customErrors={customErrors}
          description='Default error messages'
          header='Validation'
        />
        <SampleForm
          inputs={LoginInputs}
          customErrors={customErrors}
          description='Use the alerts prop to show error messages in Alert components'
          header='Validation'
          alerts={true}
        />
      </div>
    </div>
  );
};
export default ValidationFormPage;
