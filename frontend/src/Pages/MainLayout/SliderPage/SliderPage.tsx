import * as React from 'react';
// import {IField} from '../../../Components/Slider/types';
import Slider from '../../../Components/Slider';

const SliderPage: React.FC = () => {


    const DefaultSlider = [
        {
            sliderType: "DefaultSlider",
            header: "Default slider",
            description: <span>Use the <code>DefaultSlider</code> component for a simple slider</span>,
            color: "blue"
        }
    ]
    
    const RangeSlider = [
        {
            sliderType: "RangeSlider",
            header: "Range slider",
            description: <span>Use the <code>RangeSlider</code> component for range sliders</span>,
            color: "blue"
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
                <div className="slider">
                {
                    DefaultSlider.map((item, index) => {
                        return (
                            <Slider
                                key={index}
                                description={item.description}
                                header={item.header}
                                sliderType={item.sliderType}
                                color={item.color}
                            />
                        )
                    })
                }
                </div>
                <div className="slider">
                {
                    RangeSlider.map((item, index) => {
                        return (
                            <Slider
                                key={index}
                                description={item.description}
                                header={item.header}
                                sliderType={item.sliderType}
                                color={item.color}
                            />
                        )
                    })
                }
                </div>

            </div>
        </div>
    )
}

export default SliderPage