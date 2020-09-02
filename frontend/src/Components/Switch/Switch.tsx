import * as React from 'react';
// import Switches from 'react-input-switch';
import Switches from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import './Switch.scss';

type SwitchProps = {
    label: string,
    text_label: string,
    track_color: string,
    slider_color: string,
    name: string,
    check: boolean,
}

const Switch: React.FC<SwitchProps> = ({ label, text_label, slider_color, track_color, name, check}) => {

    const [state, setState] = React.useState( check || false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(!state);
    };

    const CustomSwitch = withStyles({
        switchBase: {
            color: "rgb(238, 238, 238)",
            '&$checked': {
                color: slider_color,
            },
            '&$checked + $track': {
                backgroundColor: track_color,
            },
        },
        checked: {},
        track: {},
    })(Switches);


    return (
        <div className="content_switch">
                    <div>
                        <div>
                            <div className="label">
                                {label}
                            </div>
                            <div className="text-label">
                                {text_label}
                            </div>
                        </div>
                        <div>
                            <CustomSwitch
                                checked={state}
                                onChange={handleChange}
                                name={name}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                    </div>
        </div>
    )
}

export default Switch;