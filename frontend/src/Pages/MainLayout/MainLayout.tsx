import * as React from 'react';
import './MainLayout.scss';
import Sidebar from '../../Components/Sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import  SampleForm from '../../Components/SampleForm';
import  {IField} from '../../Components/SampleForm/types';
const MainLayout: React.FC = () => {

    const CcontactInputs: IField[] = [
        {
            label: "Name",
            type: "text",
            placeholder: "Enter you name",
            name: "Username"
        },
        {
            label: "Email",
            type: "email",
            placeholder: "Enter you emaill",
            name: "Email"
        },
        {
            label: "message",
            type: "text",
            placeholder: "Enter something...",
            name: "Message"
        }
    ]
    const LoginInputs: IField[] = [
        {
            label: "Email",
            type: "email",
            placeholder: "Enter you name",
            name: "Email"
        },
        {
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            name: "Password",
        }
    ]
    const CreateAccInputs: IField[] = [
        {
            label: "Username",
            type: "text",
            placeholder: "Enter you username",
            name: "Username",
        },
        {
            label: "Email",
            type: "email",
            placeholder: "Enter you name",
            name: "Email",
        },
        {
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            name: "Password",
        },
        {
            label: "I agree to the terms of service",
            type: "checkbox",
            name: "IagreeService",
        },
        {
            label: "I agree to the privacy policy",
            type: "checkbox",
            name: "IagreePolicy",
        }
    ]

    const ResetPassInputs: IField[] = [
        {
            label: "New password",
            type: "password",
            placeholder: "Enter your new password",
            name: "PasswordOld",
        },
        {
            label: "Confirm new password",
            type: "password",
            placeholder: "Enter your new password confirmation",
            name: "PasswordNew",
        }
    ]

    const ForgotPassInputs: IField[] = [
        {
            label: "Email",
            type: "email",
            placeholder: "Enter you email",
            name: "Email",
        }
    ]

    const LockScreenInputs: IField[] = [
        {
            label: "Email",
            type: "email",
            placeholder: "Enter you email",
            name: "Email",
        }
    ]

    const SubscribeInputs: IField[] = [
        {
            label: "Email",
            type: "email",
            placeholder: "Enter you email",
            name: "Email",
        }
    ]

    const AccountSettingsInputs: IField[] = [
        {
            label: "First name",
            type: "text",
            placeholder: "Enter you first name",
            name: "FirstName",
        },
        {
            label: "Last name",
            type: "text",
            placeholder: "Enter you last name",
            name: "LastName",
        },
        {
            label: "Email address",
            type: "email",
            placeholder: "Enter you email address",
            name: "Email",
        },
        {
            label: "Company",
            type: "text",
            placeholder: "Enter you company",
            name: "Company",
        },
        {
            label: "Position",
            type: "text",
            placeholder: "Enter you position",
            name: "Position",
        },
        {
            label: "Language",
            type: "select",
            options: [
                { value: '', label: 'Select language' },
                { value: 'English', label: 'English' },
                { value: 'Portuguese', label: 'Portuguese' }
              ],
            name: "Language",
        }
    ]

    const EmailPreferencesInputs: IField[] = [
        {
            label: "Current email",
            type: "email",
            placeholder: "Enter you current email address",
            name: "CurrentEmail",
        },
        {
            label: "New email",
            type: "email",
            placeholder: "Enter you new email address",
            name: "NewEmail",
        },
        {
            label: "Daily updates",
            type: "radio",
            name: "DailyUpdates",
        },
        {
            label: "Weekly updates",
            type: "radio",
            name: "WeeklyUpdates",
        }
    ]

    const SecuritySettingsInputs: IField[] = [
        {
            label: "Current password",
            type: "password",
            placeholder: "Enter your current password",
            name: "CurrentPassword",
        },
        {
            label: "Confirm new password",
            type: "password",
            placeholder: "Enter your new password",
            name: "PasswordNew",
        },
        {
            label: "Confirm new password",
            type: "password",
            placeholder: "Enter your new password confirmation",
            name: "ConfirmNewPasswor",
        }
    ]

    // const [collapsed, collapse] = React.useState<boolean>(false);
    return (
        <div className="mainLayout">
            <Sidebar/>
            <div className="container page">
                <div className="section-title">
                    <div className="category">
                        FORMS
                    </div>
                    <div className="section-name">
                        Sample forms
                    </div>
                </div>
                <div className="main">
                    <SampleForm inputs={CcontactInputs} description="Sample contact us form" header="Contact us"/>
                    <SampleForm inputs={LoginInputs} description="Sample login form" header="Login"/>
                    <SampleForm inputs={CreateAccInputs} description="Sample create account form" header="Create account"/>
                    <SampleForm inputs={ResetPassInputs} description="Sample reset password form" header="Reset password"/>
                    <SampleForm inputs={ForgotPassInputs} description="Sample forgot password form" header="Forgot password"/>
                    <SampleForm inputs={LockScreenInputs} description="Sample lock screen form" header="Lock screen"/>
                    <SampleForm inputs={SubscribeInputs} description="Sample lock screen form" header="Lock screen"/>
                    <SampleForm inputs={AccountSettingsInputs} description="Sample account settings form" header="Account settings"/>
                    <SampleForm inputs={EmailPreferencesInputs} description="Sample email preferences form" header="Email preferences"/>
                    <SampleForm inputs={SecuritySettingsInputs} description="Sample security settings form" header="Security settings"/>
                </div>
            </div>
        </div>
    )
}

export default MainLayout;