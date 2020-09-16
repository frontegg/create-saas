import * as React from 'react';
import { CircleStep, NestedStep, RectangleStep, StepForm } from '../../../Components/FormSteps';


const FormStepsPage: React.FC = () => {

    const [fields, setFields] = React.useState([
        {
            label: 'Name',
            value: '',
            type: 'text',
            placeholder: 'Enter you name'
        },
        {
            label: 'Email',
            value: '',
            type: 'email',
            placeholder: 'Enter you email'
        },
    ]);

    const steps = [{
        label: "Lorem ipsum dolor",
        number: 1,
        active: true
    },
    {
        label: " ipsum dolor Lorem",
        number: 2,
        active: false,
        disabled: true
    },
    {
        label: " ipsum Lorem  dolor",
        number: 3,
        active: false,
        disabled: true
    },
    {
        label: "Lorem ddddd",
        number: 4,
        active: false,
        disabled: true
    }]

    const formSteps = [{
        key: 1,
        fields: fields
    },
    {
        key: 2,
        fields: fields
    },
    {
        key: 3,
        fields: fields
    },
    {
        key: 4,
        fields: fields
    }]

    return (
        <div>
            <div className="formstepspage">
                <div className="section-title">
                    <div className="category">
                        FORMS
                    </div>
                    <div className="section-name">
                        Steps
                    </div>
                </div>
                <div className="bg-white rounded mb-4">
                    <div className="p-4">
                        <div className="">
                            <div className="label">
                                Form steps
                            </div>
                            <div className="text-label font-weight-bold">
                                Sample form step components
                            </div>
                        </div>
                        <CircleStep steps={steps}/>
                        <NestedStep steps={steps}/>
                        <RectangleStep steps={steps}/>
                    </div>
                </div>
                <div className="bg-white rounded">
                    <div className="p-4">
                        <div className="mb-4">
                            <div className="label">
                                Example
                            </div>
                            <div className="text-label font-weight-bold">
                                Ready to use form steps example
                            </div>
                        </div>

                        <StepForm stepElement={NestedStep} steps={[...steps]} formSteps={[...formSteps]}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FormStepsPage