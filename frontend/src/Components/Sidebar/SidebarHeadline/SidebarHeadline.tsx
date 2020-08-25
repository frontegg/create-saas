import * as React from 'react';
import './SidebarHeadline.scss';
import {sidebarHeadlineType} from '../types';

const SidebarHeadline: React.FC<sidebarHeadlineType> = ({header}) => {

        return <div className="sideBarHeadLine">
                        <span>{header}</span>
                </div>

    }

export default SidebarHeadline;