import * as React from 'react';
import './ProgressBar.scss';


type Props = {
    value: number,
    colorClass?: string,
    colorCss?: string
}

const ProgressBar: React.FC<Props> = ({ value }) => {

    return (
        <div className="wrapper">
            <div className="progress" >
                <div className="progress-bar" style={{ width: `${value}%` }} />
            </div >
            <div className="progressTxt">
                {value}%
            </div>
        </div>
    )
}

export const ProgressLine: React.FC<Props> = ({ colorCss, colorClass="", value }) => {

    return (
            <div className="w-100">
                <div className={`progress-bar h-1 ${colorClass}`} 
                    style={{
                        backgroundColor: colorCss, 
                        width: `${value}%` }} />
            </div>
            
    )
}

export const ProgressBarWithValue: React.FC<Props> = ({ colorCss, colorClass="", value }) => {

    return (
        <div className="w-100">
            <div className={`progress-bar ${colorClass}`} 
                    style={{
                        backgroundColor: colorCss, 
                        width: `${value}%` }} >
                {value}%
            </div>
        </div>
            
    )
}

export default ProgressBar;