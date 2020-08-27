import * as React from 'react';
// import {IField} from '../../../Components/Slider/types';
import Slider from '../../../Components/Slider';

const SliderPage: React.FC = () => {


    const sliders = [
        {
            header: "Label",
            description: "string",
        },
        {
            header: "string",
            description: <span>Use the <code>DefaultSlider</code> component for a simple slider</span>
        }
    ]

    return (

        <div className="container page">
            <div className="section-title">
                <div className="category">
                    FORMS
                </div>
                <div className="section-name">
                    Sliders
                </div>
            </div>
            <div className="main">
                {
                    sliders.map((item, index) => {
                        return (
                            <Slider description={item.description} header={item.header} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SliderPage