import * as React from 'react';
import Switch from '../../../Components/Switch';

const SwitchPage: React.FC = () => {

    const SwitchPr = [
        {
            label: "API Access",
            text_label: "Enable access",
            track_color: "#3f51b5",
            slider_color: "#3f51b5",
            name: "checkedA",
            check: true,
            section: "section 1"
        }
    ]

    return (
        <div className="container page">
            <div className="section-title">
                <div className="category">
                    FORMS
                </div>
                <div className="section-name">
                    Switches
                </div>
            </div>
            <div className="main">
                <div className="switches">
                    {
                        SwitchPr.map((item, index) => {
                            return (
                                <Switch key={index}
                                    description={<span>Use the <code>&lt;Switch /&gt;</code> component for simple switches</span>}
                                    header="Inline date picker"
                                    label={item.label}
                                    text_label={item.text_label}
                                    track_color={item.track_color}
                                    slider_color={item.slider_color}
                                    name={item.name}
                                    check={item.check}
                                    section={item.section}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SwitchPage