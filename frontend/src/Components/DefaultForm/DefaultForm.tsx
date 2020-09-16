import * as React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './DefaultForm.scss';
import {IField} from './types';

type DefaultFormProps = {
    header: string,
    description: string,
    inputs: IField[],
    gridType?: 'inline' | 'column',
    radioInline?: boolean
}

const DefaultForm: React.FC<DefaultFormProps> = ({header, description, inputs, gridType = 'column', radioInline = false}) => {
    
    const checkValidation = (input: IField, inputType: string, defaultClass: string) => {
        let additionInvalidStyle = input.type === 'radio' ? ' is-invalid' : ''
        let additionValidStyle = input.type === 'radio' ? ' is-valid' : ''
        additionInvalidStyle = input.type === 'checkbox' ? ' is-invalid' : ''
        additionValidStyle = input.type === 'checkbox' ? ' is-valid' : ''

        switch(input.validType) {
            case 'invalid': 
                return defaultClass+' '+inputType+'-red-500'+additionInvalidStyle
            case 'valid': 
                return defaultClass+' '+inputType+'-green-500'+additionValidStyle
            default:
                return defaultClass
        }
    }

    return (
        <Form className="wiget form">
            <div className="header">
                {header}
            </div>
            <div className="description">
                {description}
            </div>
            <div className={(gridType === 'inline' ? '' : 'row') }>
                {
                    inputs.map((input, index) => {

                        if ( input.options ) {
                            return (
                                <>
                                    <div key={index} className={("inputGroup form-group") + (gridType === 'inline' ? ' form-inline' : ' col')}>
                                        <Label className="form-check-label mr-sm-2">{input.label}</Label>
                                        
                                        <select className={checkValidation(input, 'border', 'form-control form-input mb-2 mr-sm-2')} name={input.name}>
                                            {
                                                input.options.map((option, index) => {
                                                    return <option value={option.value}>{option.label}</option>
                                                })
                                            }
                                        </select>
                                        <div className={checkValidation(input, 'text', ' text-xs mr-sm-2')}>{input.signature}</div>
                                    </div>
                                </>
                            )
                        }

                        if ( input.type == "radio" ) {
                            return (
                                <div key={index} className={("inputGroup form-group") + (radioInline ? ' form-inline' : '')}>
                                    <div>
                                        <Label>{input.label}</Label>
                                    </div>
                                    {input.values 
                                        ? input.values.map((val, i) =>
                                        <div className="custom-control custom-control-inline custom-radio">
                                                <Input
                                                    className={checkValidation(input, 'null', 'form-check-input custom-control-input')}
                                                    placeholder={input.placeholder}
                                                    type={input.type}
                                                    name={input.name}
                                                    value={val}
                                                    id={input.name+index+val+i}
                                                />
                                                <Label
                                                    className={checkValidation(input, 'text', 'form-check-label custom-control-label')}
                                                    htmlFor={input.name+index+val+i}
                                                >{val}</Label>
                                            </div>
                                        )
                                        : undefined
                                    }
                                    <div className={checkValidation(input, 'text', 'text-xs')}>{input.signature}</div>
                                </div>
                            )
                        }

                        if ( input.type == "checkbox" ) {
                            return (
                                <div className={("inputGroup form-group") + (radioInline ? ' form-inline' : '')} >
                                    <div>
                                    <Label>{input.label}</Label>
                                    </div>
                                    
                                    {input.values
                                        ? input.values.map((val, i) =>


                                                    <div className="custom-control custom-control-inline custom-checkbox">
                                                        <Input
                                                            className={checkValidation(input, 'null', 'form-input custom-control-input')}
                                                            placeholder={input.placeholder}
                                                            type={input.type}
                                                            name={input.name}
                                                            value={val}
                                                            id={input.name+i+index+val}
                                                        />
                                                        <Label
                                                            className="form-check-label custom-control-label"
                                                            htmlFor={input.name+i+index+val}
                                                        >{val}</Label>
                                                    </div>
                                                    
                                        )
                                        : undefined
                                    }
                                    <div className={checkValidation(input, 'text', 'text-xs')}>{input.signature}</div>
                                </div>
                            )
                        }

                        return (
                            <div className={gridType === 'inline' ? '' : 'col'}>
                                <div key={index} className="inputGroup">
                                    <div className="input-field">
                                        {gridType === 'inline' 
                                        ? <div className="form-inline">
                                            <Label className="form-check-label mr-sm-2">{input.label}</Label>
                                            <Input className={checkValidation(input, 'border', 'form-input mb-2 mr-sm-2')} placeholder={input.placeholder} type={input.type} name={input.name}/>
                                            <div className={checkValidation(input, 'text', 'text-xs mr-sm-2')}>{input.signature}</div>
                                          </div>
                                        : <>
                                            <Label className="form-check-label mr-sm-2">{input.label}</Label>
                                            <Input className={checkValidation(input, 'border', 'form-input mb-2 mr-sm-2')} placeholder={input.placeholder} type={input.type} name={input.name}/>
                                            <div className={checkValidation(input, 'text', 'text-xs mr-sm-2')}>{input.signature}</div>
                                          </>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Form>
    )
}

export default DefaultForm;