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
            type: 'text',
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
        active: false
    },
    {
        label: " ipsum Lorem  dolor",
        number: 3,
        active: false
    },
    {
        label: "Lorem ddddd",
        number: 4,
        active: false
    }]
    const state1 = [...steps]
    const state2 = [...steps]

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
                    
                    <StepForm stepElement={RectangleStep} steps={[...state1]} fields={fields}/>
                    <StepForm stepElement={NestedStep} steps={[...state2]} fields={fields}/>
                </div>
            </div>
        </div>
    )

}

export default FormStepsPage