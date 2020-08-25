import * as React from 'react';
import InputElement from '../InputElement';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {propsType, stateType} from './types';
import './AuthComponent.scss';

const AuthComponent: React.FC<propsType> = ({labelUppercase, description, fields}) => {

    const [state, setState] = React.useState<stateType>({});
    React.useEffect(() => {
        fields.forEach((item) => {
            setState({...state, [item.name]: item.initialValue || ""})
        })
    }, [])
    const RenderFields = fields.map((item, index): React.ReactElement => {
       return (
            <FormGroup>
                <Label>{item.label}</Label>
                <Input name={item.name} type={item.type} onChange={(e) => handleChange(e, setState)} value={state[item.name]}/>
            </FormGroup>
       )
    });
    const handleChange = (e: React.FormEvent<HTMLInputElement>, setState: React.Dispatch<any>) :void => {
        setState({...state, [e.currentTarget.name]: e.currentTarget.value})
    }
    return (
                <div className="authContainer">
                    <div className="header mb-4">
                        <div className="label uppercase">{labelUppercase}</div>
                        <div className="description">{description}</div>
                    </div>
                    <Form>
                        {RenderFields}
                        <Button color="primary" onClick={(e) => { console.log(state)}}>Sign in</Button>
                    </Form>
                </div>
);
}

export default AuthComponent;