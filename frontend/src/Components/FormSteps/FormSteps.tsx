import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';
import './FormSteps.scss';

type Props = {
    label?:string,
    text_label?: string,
}

const Base:React.FC<Props> = ({ children }) => {

    return <div className="content_step mb-5">
                <div>
                    <div className="row">
                        <div className="col-md-12 mx-0">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
}

export const CircleStep: React.FC<Props> = (props) => {
    return  <Base {...props}>
                <div id="msform">
                    <ul id="progressbar">
                        <li className="active" id="account"></li>
                        <li id="personal"></li>
                        <li id="payment"></li>
                        <li id="confirm"></li>
                    </ul>
                </div>
            </Base>
}

export const NestedStep: React.FC<Props> = (props) => {

    return <Base {...props}>
        <div id="blockform">
            <div id="blockbar" className="d-flex w-100">
                <div className="d-flex stepone w-25 bg-primary pad">
                    <div className="step align-self-center">
                        <span className="stepnumber text-black bg-white d-flex justify-content-center align-items-center">1</span>
                    </div>
                    <div className="flex-column w-100 ml-3">
                        <div className="text-white font-weight-bold">
                            Step 1
                        </div>
                        <div className="text-white">
                            Lorem ipsum dolor
                        </div>
                    </div>
                </div>
                <div className="d-flex steptwo w-25 pad opacity-25">
                    <div className="step align-self-center" >
                        <span className="stepnumber text-white bg-primary d-flex justify-content-center align-items-center">2</span>
                    </div>
                    <div className="flex-column w-100 ml-3">
                        <div className="text-black font-weight-bold">
                            Step 2
                        </div>
                        <div className="text-black">
                            Lorem ipsum dolor
                        </div>
                    </div>
                </div>
                <div className="d-flex stepthree w-25 pad opacity-25">
                    <div className="step align-self-center">
                        <span className="stepnumber text-white bg-primary d-flex justify-content-center align-items-center">3</span>
                    </div>
                    <div className="flex-column w-100 ml-3">
                        <div className="text-black font-weight-bold">
                            Step 3
                        </div>
                        <div className="text-black">
                            Lorem ipsum dolor
                        </div>
                    </div>
                </div>
                <div className="d-flex stepfour w-25 pad opacity-25">
                    <div className="step align-self-center">
                        <span className="stepnumber text-white bg-primary d-flex justify-content-center align-items-center">4</span>
                    </div>
                    <div className="flex-column w-100 ml-3">
                        <div className="text-black font-weight-bold">
                            Step 4
                        </div>
                        <div className="text-black">
                            Lorem ipsum dolor
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Base>
}

export const RectangleStep: React.FC<Props> = (props) => {
    return <Base {...props}>
        <div className="designation">
            <div className="d-flex w-100">
                <div className="w-25">
                    <button className="btn btn-default w-100 bg-primary text-white">Step 1</button>
                </div>
                <div className="w-25 opacity-25">
                    <button className="btn btn-default w-100">Step 2</button>
                </div>
                <div className="w-25 opacity-25">
                    <button className="btn btn-default w-100">Step 3</button>
                </div>
                <div className="w-25 opacity-25">
                    <button className="btn btn-default w-100">Step 4</button>
                </div>
            </div>
        </div>
    </Base>
}

// export default CircleStep;