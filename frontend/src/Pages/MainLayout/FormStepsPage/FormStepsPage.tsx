import * as React from 'react';
import { CircleStep, NestedStep, RectangleStep, StepForm } from '../../../Components/FormSteps';


const FormStepsPage: React.FC = () => {

    const [fields, setFields] = React.useState([
        {
            label: 'Name',
            value: '',
            type: 'text',
        },
        {
            label: 'Email',
            value: '',
            type: 'email',
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


    const setField = (label:string, value: string) => {
        const index = fields.findIndex(((item: any) => item!.label === label))
        if (index !== -1) {
            const newField = fields[index]
            newField.value = value
            const newFields = [...fields.slice(0, index), newField , ...fields.slice(index)]
            setFields(newFields)
        }
    }

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
                <div>
                    <div className="">
                        <div className="label">
                            Form steps
                        </div>
                        <div className="text-label">
                            Sample form step components
                        </div>
                    </div>
                    <CircleStep steps={steps}/>
                    <NestedStep steps={steps}/>
                    <RectangleStep steps={steps}/>
                </div>
                <div>
                    <div className="mb-4">
                        <div className="label">
                            Example
                        </div>
                        <div className="text-label">
                            Ready to use form steps example
                        </div>
                    </div>
                    
                    <StepForm stepElement={NestedStep} steps={[...steps]} formSteps={[...formSteps]}/>
                </div>
            </div>
        </div>
    )

}

export default FormStepsPage