import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';
import './FormSteps.scss';

type StepProps = {
    label?:string,
    text_label?: string
}

const FormSteps: React.FC<StepProps> = ({ label, text_label }) => {


    return (
        <div className="content_step">
            <div>
                <div>
                    <div className="label">
                        {label}
                    </div>
                    <div className="text-label">
                        {text_label}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mx-0">
                        <form id="msform">
                            <ul id="progressbar">
                                <li className="active" id="account"></li>
                                <li id="personal"></li>
                                <li id="payment"></li>
                                <li id="confirm"></li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mx-0">
                        <form id="blockform">
                            <div id="blockbar" className="flex">
                                <div className="flex stepone">
                                    <div>
                                        <span className="stepnumber">1</span>
                                    </div>
                                    <div>
                                        <div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex steptwo">
                                    <div>
                                        <span className="stepnumber">2</span>
                                    </div>
                                    <div>
                                        <div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex stepthree">
                                    <div>
                                        <span className="stepnumber">3</span>
                                    </div>
                                    <div>
                                        <div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex stepfour">
                                    <div>
                                        <span className="stepnumber">4</span>
                                    </div>
                                    <div>
                                        <div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FormSteps;