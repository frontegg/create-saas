import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';
import './FormSteps.scss';

type Direction = "circle" | "nested" | "rectangle" | "designation";

type Props = {
    label?:string,
    text_label?: string,
    direction?: Direction
}

const Base:React.FC<Props> = ({
    label = "Form steps",
    text_label = "Sample form step components",
    direction = "circle",
    children }) => {

    return <div className="content_step">
             <div>
                <div>
                    <div className="label">
                        {label}
                    </div>
                    <div className="text-label">
                        {text_label}
                    </div>
                </div>
             </div>
            </div>
}

type StepProps = Pick<Props, Exclude<keyof Props, keyof {direction?:Direction}>>;

const circleStep: React.FC<StepProps> = (props) => {
    return <Base {...props}>
        {props.children}
    </Base>
}

export const nestedStep: React.FC<StepProps> = (props) => {
    return <Base direction="nested" {...props}>
        {props.children}
    </Base>
}


// const FormSteps: React.FC<Props> = ({ label, text_label, direction}) => {


//     return (
//         <div className="content_step">
//             <div>
//                 <div>
//                     <div className="label">
//                         {label}
//                     </div>
//                     <div className="text-label">
//                         {text_label}
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-md-12 mx-0">
//                         <form id="msform">
//                             <ul id="progressbar">
//                                 <li className="active" id="account"></li>
//                                 <li id="personal"></li>
//                                 <li id="payment"></li>
//                                 <li id="confirm"></li>
//                             </ul>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12 mx-0">
//                         <form id="blockform">
//                             <div id="blockbar" className="flex fullwidth">
//                                 <div className="flex stepone fourth-width blue-bg pad">
//                                     <div className="step w-20">
//                                         <span className="stepnumber text-color white-bg w-20 height-2 flex">1</span>
//                                     </div>
//                                     <div>
//                                         <div>

//                                         </div>
//                                         <div>

//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="flex steptwo fourth-width blue-bg pad">
//                                     <div className="step w-20" >
//                                         <span className="stepnumber text-color white-bg w-20 height-2 flex">2</span>
//                                     </div>
//                                     <div>
//                                         <div>

//                                         </div>
//                                         <div>

//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="flex stepthree fourth-width blue-bg pad">
//                                     <div className="step w-20">
//                                         <span className="stepnumber text-color white-bg w-20 height-2 flex">3</span>
//                                     </div>
//                                     <div>
//                                         <div>

//                                         </div>
//                                         <div>

//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="flex stepfour fourth-width blue-bg pad">
//                                     <div className="step w-20">
//                                         <span className="stepnumber text-color white-bg w-20 height-2 flex">4</span>
//                                     </div>
//                                     <div>
//                                         <div>

//                                         </div>
//                                         <div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

export default circleStep;