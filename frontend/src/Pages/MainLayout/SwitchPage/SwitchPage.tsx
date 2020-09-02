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
        },
        {
            label: "API Access 2",
            text_label: "Enable access",
            track_color: "#3fdddd",
            slider_color: "#3f51b5",
            name: "checkedB",
            check: true,
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
                <div className="content_switch">
                    <div className="header">
                        
                    </div>
                    <div className="description">
                        <span>Use the <code>&lt;Switch /&gt;</code> component for simple switches</span>
                    </div>
                        <div>
                            <div>
                                <div className="label">
                                    
                                </div>
                                <div className="text-label">
                                    
                                </div>
                                <div>
                                    {
                                        SwitchPr.map((item, index) => {
                                            return (
                                                <Switch key={index}
                                                    description={""}
                                                    header="Inline date picker"
                                                    label={item.label}
                                                    text_label={item.text_label}
                                                    track_color={item.track_color}
                                                    slider_color={item.slider_color}
                                                    name={item.name}
                                                    check={item.check}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                </div>
                <div className="content_switch">
                    <div className="header">
                        
                    </div>
                    <div className="description">
                        <span>Use the <code>&lt;Switch /&gt;</code> component for simple switches</span>
                    </div>
                        <div>
                            <div>
                                <div className="label">
                                    
                                </div>
                                <div className="text-label">
                                    
                                </div>
                                <div>
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
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SwitchPage