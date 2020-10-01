import React from 'react';
import { IField } from '../../../Components/SampleForm/types';
import SampleForm from '../../../Components/SampleForm';

const SampleFormPage: React.FC = () => {
  const customErrors: any = {
    required: 'Please enter a valid :attribute',
    regex: 'Please enter a valid :attribute',
    email: 'Please enter a valid :attribute',
    min: 'Your password should have at least :min characters',
    max: 'Your password should have no more than :max characters',
    'required.Message': 'Please enter a message',
    'required.Username': 'Please enter your name',
    'required.Password': ':attribute is required',
    'required.PasswordOld': ':attribute is required',
    'required.New password': ':attribute is required',
    'required.PasswordNew': 'Password confirmation is required',
    'required.Language': ':attribute is required',
    'required.CurrentPassword': ':attribute is required',
    'required.ConfirmNewPasswor': ':attribute is required',
    'required_if.CurrentEmail': 'Please enter a valid email',
    'required.NewEmail': 'Please enter a valid email',
  };

  const ContactInputs: IField[] = [
    {
      label: 'Name',
      type: 'text',
      placeholder: 'Enter you name',
      name: 'Username',
      validation: 'required|string',
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter you emaill',
      name: 'Email',
      validation: 'required|email',
    },
    {
      label: 'message',
      type: 'text',
      placeholder: 'Enter something...',
      name: 'Message',
      validation: 'required',
    },
  ];
  const LoginInputs: IField[] = [
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter you name',
      name: 'Email',
      validation: 'required',
    },
    {
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      name: 'Password',
      validation: 'required|string|min:4|max:8',
    },
  ];
  const CreateAccInputs: IField[] = [
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
      placeholder: 'Enter you name',
      name: 'Email',
      validation: 'required',
    },
    {
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      name: 'Password',
      validation: 'required|string|min:4|max:8',
    },
    {
      label: 'I agree to the terms of service',
      type: 'checkbox',
      name: 'IagreeService',
      validation: 'required|regex:true',
    },
    {
      label: 'I agree to the privacy policy',
      type: 'checkbox',
      name: 'IagreePolicy',
      validation: 'required|regex:true',
    },
  ];

  const ResetPassInputs: IField[] = [
    {
      label: 'New password',
      type: 'password',
      placeholder: 'Enter your new password',
      name: 'New password',
      validation: 'required|string|min:4|max:8',
    },
    {
      label: 'Confirm new password',
      type: 'password',
      placeholder: 'Enter your new password confirmation',
      name: 'PasswordNew',
      validation: 'required|string|min:4|max:8',
    },
  ];

  const ForgotPassInputs: IField[] = [
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter you email',
      name: 'Email',
      validation: 'required',
    },
  ];

  const LockScreenInputs: IField[] = [
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter you email',
      name: 'Email',
      validation: 'required',
    },
  ];

  const SubscribeInputs: IField[] = [
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Enter you email',
      name: 'Email',
      validation: 'required',
    },
  ];

  const AccountSettingsInputs: IField[] = [
    {
      label: 'First name',
      type: 'text',
      placeholder: 'Enter you first name',
      name: 'First name',
      validation: 'required',
    },
    {
      label: 'Last name',
      type: 'text',
      placeholder: 'Enter you last name',
      name: 'Last Name',
      validation: 'required',
    },
    {
      label: 'Email address',
      type: 'email',
      placeholder: 'Enter you email address',
      name: 'Email address',
      validation: 'required',
    },
    {
      label: 'Company',
      type: 'text',
      placeholder: 'Enter you company',
      name: 'Company',
      validation: 'required',
    },
    {
      label: 'Position',
      type: 'text',
      placeholder: 'Enter you position',
      name: 'Position',
      validation: 'required',
    },
    {
      label: 'Language',
      type: 'select',
      options: [
        { value: '', label: 'Select language' },
        { value: 'English', label: 'English' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'Portuguese', label: 'Portuguese' },
      ],
      name: 'Language',
      validation: 'required',
    },
  ];

  const EmailPreferencesInputs: IField[] = [
    {
      label: 'Current email',
      type: 'email',
      placeholder: 'Enter you current email address',
      name: 'CurrentEmail',
      validation: 'required_if:NewEmail',
    },
    {
      label: 'New email',
      type: 'email',
      placeholder: 'Enter you new email address',
      name: 'NewEmail',
      validation: 'required',
    },
    {
      label: 'Daily updates',
      type: 'radio',
      name: 'DailyUpdates',
      cases: ['Yes', 'No'],
      validation: 'required',
    },
    {
      label: 'Weekly updates',
      type: 'radio',
      name: 'WeeklyUpdates',
      cases: ['Yes', 'No'],
      validation: 'required',
    },
  ];

  const SecuritySettingsInputs: IField[] = [
    {
      label: 'Current password',
      type: 'password',
      placeholder: 'Enter your current password',
      name: 'CurrentPassword',
      validation: 'required|string|min:4|max:8',
    },
    {
      label: 'Confirm new password',
      type: 'password',
      placeholder: 'Enter your new password',
      name: 'PasswordNew',
      validation: 'required|string|min:4|max:8',
    },
    {
      label: 'Confirm new password',
      type: 'password',
      placeholder: 'Enter your new password confirmation',
      name: 'ConfirmNewPasswor',
      validation: 'required|string|min:4|max:8',
    },
  ];

  // const [collapsed, collapse] = React.useState<boolean>(false);
  return (
    <div className='sampleformpage'>
      <div className='section-title'>
        <div className='category'>FORMS</div>
        <div className='section-name'>Sample forms</div>
      </div>
      <div className='main'>
        <SampleForm
          inputs={ContactInputs}
          customErrors={customErrors}
          description='Sample contact us form'
          header='Contact us'
        />
        <SampleForm inputs={LoginInputs} customErrors={customErrors} description='Sample login form' header='Login' />
        <SampleForm
          inputs={CreateAccInputs}
          customErrors={customErrors}
          description='Sample create account form'
          header='Create account'
        />
        <SampleForm
          inputs={ResetPassInputs}
          customErrors={customErrors}
          description='Sample reset password form'
          header='Reset password'
        />
        <SampleForm
          inputs={ForgotPassInputs}
          customErrors={customErrors}
          description='Sample forgot password form'
          header='Forgot password'
        />
        <SampleForm
          inputs={LockScreenInputs}
          customErrors={customErrors}
          description='Sample lock screen form'
          header='Lock screen'
        />
        <SampleForm
          inputs={SubscribeInputs}
          customErrors={customErrors}
          description='Sample subscribe form'
          header='Lock screen'
        />
        <SampleForm
          inputs={AccountSettingsInputs}
          customErrors={customErrors}
          description='Sample account settings form'
          header='Account settings'
        />
        <SampleForm
          inputs={EmailPreferencesInputs}
          customErrors={customErrors}
          description='Sample email preferences form'
          header='Email preferences'
        />
        <SampleForm
          inputs={SecuritySettingsInputs}
          customErrors={customErrors}
          description='Sample security settings form'
          header='Security settings'
        />
      </div>
    </div>
  );
};
export default SampleFormPage;
