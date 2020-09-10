import * as React from 'react';
import './Tabs.scss';
import Widget from '../../../Widget';
import Tab from '../../../../../Components/Tab';


const Tabs:React.FC = () => {
    return <div className="Tabs">
        <Widget>
            <Tab/>
        </Widget>
        <Widget>
            <Tab navClass="btn" activeClass="underlined border-primary"/>
        </Widget>
        <Widget>
            <Tab vertical navClass="btn" activeClass="underlined border-primary"/>
        </Widget>
        <Widget>
            <Tab vertical pills/>
        </Widget>
    </div>
}

export default Tabs;