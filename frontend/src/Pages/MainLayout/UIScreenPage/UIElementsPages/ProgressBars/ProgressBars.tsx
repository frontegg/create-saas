import * as React from 'react';
import './ProgressBars.scss';
import Widget from '../../../Widget';
import ProgressBar, { ProgressLine, ProgressBarWithValue } from '../../../../../Components/ProgressBar';
import { Col } from 'reactstrap';

const ProgressBars:React.FC = () => {
    return <div className="ProgressBars">
        <Widget>
            <Col>
                <ProgressBar value={32}/>
                <ProgressBar value={52}/>
                <ProgressBar value={82}/>
            </Col>
            
        </Widget>
        <Widget>
            <Col>
                <ProgressLine colorClass="bg-primary" value={32}/>
                <ProgressLine colorClass="bg-success" value={52}/>
                <ProgressLine colorClass="bg-danger" value={82}/>
            </Col>
        </Widget>
        <Widget>
            <Col>
                <ProgressBarWithValue colorClass="bg-primary" value={32}/>
                <ProgressBarWithValue colorClass="bg-success" value={52}/>
                <ProgressBarWithValue colorClass="bg-danger" value={82}/>
            </Col>
        </Widget>
    </div>
}

export default ProgressBars;