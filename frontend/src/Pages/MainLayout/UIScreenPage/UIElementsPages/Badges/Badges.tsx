import * as React from 'react';
import './Badges.scss';
import Widget from '../../../Widget';
import Badge, { CircularBadge } from '../../../../../Components/Badge';

const Badges:React.FC = () => {
    return <div className="Badges">
                <div className="header">Badges</div>
                <Widget className="w-100 flex-column">
                    <div className="w-100 mb-3">
                        <Badge className="rounded-0 mr-3" large>default</Badge>
                        <Badge className="rounded-0 mr-3" medium>default</Badge>
                        <Badge className="rounded-0 mr-3" small>default</Badge>
                    </div>
                    <div className="w-100 mb-3">
                        <Badge className="mr-3" large>default</Badge>
                        <Badge className="mr-3" medium>default</Badge>
                        <Badge className="mr-3" small>default</Badge>
                    </div>
                    <div className="w-100 mb-3">
                        <CircularBadge className="mr-3" large>1</CircularBadge>
                        <CircularBadge className="mr-3" medium>1</CircularBadge>
                        <CircularBadge className="mr-3" small>1</CircularBadge>
                    </div>
                </Widget>
                <Widget className="w-100 flex-column">
                    <div className="w-100 mb-3">
                        <Badge className="rounded-0 mr-3" outline large>default</Badge>
                        <Badge className="rounded-0 mr-3" outline medium>default</Badge>
                        <Badge className="rounded-0 mr-3" outline small>default</Badge>
                    </div>
                    <div className="w-100 mb-3">
                        <Badge className="mr-3" outline large>default</Badge>
                        <Badge className="mr-3" outline medium>default</Badge>
                        <Badge className="mr-3" outline small>default</Badge>
                    </div>
                    <div className="w-100 mb-3">
                        <CircularBadge className="mr-3" outline large>1</CircularBadge>
                        <CircularBadge className="mr-3" outline medium>1</CircularBadge>
                        <CircularBadge className="mr-3" outline small>1</CircularBadge>
                    </div>
                </Widget>
            </div>
}

export default Badges;