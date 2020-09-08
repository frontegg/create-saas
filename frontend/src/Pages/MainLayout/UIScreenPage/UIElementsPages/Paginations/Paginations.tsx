import * as React from 'react';
import './Pagination.scss';
import Pagination from '../../../../../Components/Pagination';
import Widget from '../../../Widget';
import { CircleButton } from '../../../../../Components/Button';

const Paginations:React.FC = () => {
    const numberComponent1 = <CircleButton outline style={{boxShadow: "none"}} className="border-0 w-6 h-6"></CircleButton>
    return <div className="Paginations">
        <Widget>
            <Pagination NumberComponent={numberComponent1} count={10}/>
        </Widget>
        <Widget>
            <Pagination count={10}/>
        </Widget>
        <Widget>
            <Pagination count={10}/>
        </Widget>
    </div>
}

export default Paginations;