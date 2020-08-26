import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Sliders from '@material-ui/core/Slider';
import './Slider.scss';
// import {IField} from './types';

type SliderProps = {
    header: string,
    description: string | JSX.Element,
}


const Slider: React.FC<SliderProps> = ({header, description}) => {
    return (
        <div>
            <div className="header">
                    {header}
                </div>
                <div className="description">
                    {description}
                </div>
            <Sliders
                aria-label="custom thumb label"
            />
        </div>
    )
}

export default Slider;