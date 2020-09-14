import * as React from 'react';
import { CircleStep, NestedStep, RectangleStep, Form } from '../../../Components/FormSteps';


const FormStepsPage: React.FC = () => {

    const [fields, setFields] = React.useState<any>([
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
                    <CircleStep />
                    <NestedStep />
                    <RectangleStep />
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
                    <RectangleStep />
                    <Form fields={fields} setField={setField} />
                </div>
            </div>
        </div>
    )

}

export default FormStepsPage