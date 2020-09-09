import * as React from 'react';
import {CircleStep, NestedStep, RectangleStep} from '../../../Components/FormSteps';



const FormStepsPage: React.FC = () => {

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
                    
                </div>
            </div>
        </div>
    )

}

export default FormStepsPage