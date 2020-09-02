import * as React from 'react';
// import Switches from 'react-input-switch';
import Switches from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import './Switch.scss';

type SwitchProps = {
    header: string,
    description: string | JSX.Element,
    label: string,
    text_label: string,
    track_color: string,
    slider_color: string,
    name: string,
    check: boolean,
    section: string
}

const Switch: React.FC<SwitchProps> = ({header, description, label, text_label, slider_color, track_color, name, check, section}) => {

    const [state, setState] = React.useState({
        checkedA: check
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    console.log('state.checkedA = ', state.checkedA);

    const CustomSwitch = withStyles({
        switchBase: {
            color: "rgb(238, 238, 238)",
            '&$checked': {
                color: {slider_color},
            },
            '&$checked + $track': {
                backgroundColor: {track_color},
            },
        },
        checked: {},
        track: {},
    })(Switches);


    return (
        <div className="content_switch">
            <div className="header">
                {header}
            </div>
            <div className="description">
                {description}
            </div>
                <div>
                    <div>
                        <div className="label">
                            {label}
                        </div>
                        <div className="text-label">
                            {text_label}
                        </div>
                        <div>
                            <CustomSwitch
                                checked={state.checkedA}
                                onChange={handleChange}
                                name={name}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                    </div>
                    {/* <div>
                        <div className="label">
                            {label}
                        </div>
                        <div className="text-label">
                            {text_label}
                        </div>
                        <div>
                            <CustomSwitch
                                checked={check}
                                onChange={handleChange}
                                name={name}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                    </div> */}
                </div>
        </div>
    )
}

export default Switch;