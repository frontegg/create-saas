import * as React from 'react';
import FormSteps from '../../../Components/FormSteps';

const FormStepsPage: React.FC = () => {

    return (
        <div className="formstepspage">
            <div className="section-title">
                <div className="category">
                    FORMS
                </div>
                <div className="section-name">
                    Steps
                </div>
            </div>
            <FormSteps label="Form steps" text_label="Sample form step components" />
        </div>
    )

}

export default FormStepsPage