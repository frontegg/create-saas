import * as React from 'react';
import './Breadcrumbs.scss';
import Widget from '../../../Widget';
import Breadcrumbs from '../../../../../Components/Breadcrumbs';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const BreadcrumbsPage:React.FC = () => {
    const Links = [
    {
        href: "/ui-elements/",
        label: "UI Elements",
    },
    {
        label: "Breadcrumbs",
    }]
    return <div className="Breadcrumbs">
        <Widget>
            <Breadcrumbs links={Links} separator=">"/>
        </Widget>
        <Widget>
            <Breadcrumbs links={Links} separator={<ArrowRightAltIcon/>}/>
        </Widget>
        <Widget>
            <Breadcrumbs home links={Links} separator={<ArrowRightAltIcon/>}/>
        </Widget>
    </div>
}

export default BreadcrumbsPage;