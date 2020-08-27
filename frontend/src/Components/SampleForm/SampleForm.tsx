import * as React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SampleForm.scss';
import {IField} from './types';

type SampleFormProps = {
    header: string,
    description: string,
    inputs: IField[]
}


const SampleForm: React.FC<SampleFormProps> = ({header, description, inputs}) => {
    return (
        <Form className="wiget form">
            <div className="header">
                {header}
            </div>
            <div className="description">
                {description}
            </div>
            {
                inputs.map((input, index) => {
                        if ( input.options ) {
                            return (
                                <div key={index} className="inputGroup">
                                    <Label>{input.label}</Label>
                                    <select name={input.name}>
                                        {
                                            input.options.map((option, index) => {
                                                return <option value="{option.value}">{option.label}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            )
                        }
                        if ( input.type == "radio" ) {
                            return (
                                <div key={index} className="inputGroup">
                                    <Label>{input.label}</Label>
                                    <div className="form-check">
                                        <Input className="form-check-input" placeholder={input.placeholder} type={input.type} name={input.name} value="Yes"/>
                                        <Label className="form-check-label" >Yes</Label>
                                    </div>
                                    <div className="form-check">
                                        <Input lassName="form-check-input" placeholder={input.placeholder} type={input.type} name={input.name} value="No"/>
                                        <Label className="form-check-label">No</Label>
                                    </div>
                                </div>

                            )
                        }
                        return (
                            <div key={index} className="inputGroup">
                                <div className="input-field">
                                    <Label>{input.label}</Label>
                                    <Input className="form-input" placeholder={input.placeholder} type={input.type} name={input.name}/>
                                </div>
                            </div>
                        )
                    })
                }
            <Button color="primary" >Submit</Button>
        </Form>
    )
}

export default SampleForm;