import * as React from 'react';
import './ProgressBar.scss';


type Props = {
    value: number
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

export default ProgressBar;