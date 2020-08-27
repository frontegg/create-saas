import * as React from 'react';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Sliders from '@material-ui/core/Slider';
import { ThemeProvider } from '@material-ui/styles';
import './Slider.scss';
// import {IField} from './types';

type SliderProps = {
    sliderType: string,
    header: string,
    description: string | JSX.Element,
    color?: string
}


const Slider: React.FC<SliderProps> = ({header, description, color, sliderType}) => {

    let val;

    if ( sliderType == "RangeSlider" ) {
         val = [ Math.trunc(Math.random() * 50) , Math.trunc(Math.random() * 50) ]
    } else {
         val = [ Math.trunc(Math.random() * 50) ]
    }

    const [value, setValue] = React.useState<number[]>(val);
    const handleChange = (event: any, newValue: number | number[]) => {
            setValue(newValue as number[]);
        };

        const style = {
            color: color
        }

    return (
        <div>
            <div className="header">
                    {header}
                </div>
                <div className="description">
                    {description}
                </div>
                <div>{color}</div>
                <Sliders
                    style = {style}
                    value={value}
                    onChange={handleChange}
                    // valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
        </div>
    )
}

export default Slider;