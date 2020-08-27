import * as React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './DefaultForm.scss';
import {IField} from './types';

type DefaultFormProps = {
    header: string,
    description: string,
    inputs: IField[]
}

const DefaultForm: React.FC<DefaultFormProps> = ({header, description, inputs}) => {
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
                                <div>{input.signature}</div>
                            </div>
                        )
                    }

                    if ( input.type == "radio" ) {
                        return (
                            <div key={index} className="inputGroup">
                                <div>
                                <Label>{input.label}</Label>
                                    <div className="form-check">
                                        <Input className="form-check-input" placeholder={input.placeholder} type={input.type} name={input.name} value="0"/>
                                        <Label className="form-check-label" >Option 1</Label>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-check">
                                        <Input lassName="form-check-input" placeholder={input.placeholder} type={input.type} name={input.name} value="1"/>
                                        <Label className="form-check-label">Option 2</Label>
                                    </div>
                                    <div>{input.signature}</div>
                                </div>
                            </div>
                        )
                    }

                    if ( input.type == "checkbox" ) {
                        return (
                            <div key={index} className="inputGroup">
                                <div className="input-field">
                                    <Label>{input.label}</Label>
                                    <div>
                                        <Input className="form-input" placeholder={input.placeholder} type={input.type} name={input.name} value="0"/>
                                        <Label className="form-check-label" >Option 1</Label>
                                    </div>
                                    <div>
                                        <Input className="form-input" placeholder={input.placeholder} type={input.type} name={input.name} value="1"/>
                                        <Label className="form-check-label" >Option 2</Label>
                                    </div>
                                    <div>{input.signature}</div>
                                </div>
                            </div>
                        )
                    }

                    return (
                        <div key={index} className="inputGroup">
                            <div className="input-field">
                                <Label>{input.label}</Label>
                                <Input className="form-input" placeholder={input.placeholder} type={input.type} name={input.name}/>
                                <div>{input.signature}</div>
                            </div>
                        </div>
                    )
                })
            }
        </Form>
    )
}

export default DefaultForm;