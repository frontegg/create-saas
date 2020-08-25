import * as React from 'react';
import './Sidebar.scss';
import SidebarHeadline from './SidebarHeadline';
import SidebarLink from './SidebarLink';
import SidebarLinkWithSub from './SidebarLinkWithSub';
import sidebarContents, {sidebarHeadlineType, sidebarLinkType, sidebarLinkWithSubType} from './types';
import {links} from './links';

const Sidebar: React.FC = () => {
    const [collapsed, collapse] = React.useState<boolean>(false);

    const isHeadline = (link: sidebarContents): link is sidebarHeadlineType => {
        return (link as sidebarHeadlineType).header !== undefined;
    }
    const isSidebarLink = (link: sidebarContents): link is sidebarLinkType => {
        return (link as sidebarLinkType).path !== undefined;
    }
    const isSidebarLinkWithSub = (link: sidebarContents): link is sidebarLinkWithSubType => {
        return (link as sidebarLinkWithSubType).sublinks !== undefined;
    }

    const renderSidebarLinks = (sidebarLinkItem: Array<sidebarContents>, parentPath: string = "") => {
    return (
        <ul>
            {sidebarLinkItem.map((link: sidebarContents, index: number) => {
                    if(isHeadline(link)) {
                        const {header} = link;
                        return <li>
                            <SidebarHeadline key={index} {...{header}}/>
                        </li>
                    }
                    if (isSidebarLinkWithSub(link))
                    {
                        const {path, icon, label, sublinks} = link;
                        return <li>
                            <SidebarLinkWithSub key={index} {...{path: parentPath+path, icon, label, sublinks}}/>
                            {sublinks && renderSidebarLinks(sublinks, parentPath+path)}
                        </li>
                    }
                    if(isSidebarLink(link)) {
                        const {path, icon, label} = link;
                        return <li>
                            <SidebarLink key={index} {...{path: parentPath+path, icon, label}}/>
                        </li>
                    }

            }) 
            }
        </ul>
        )
    }
    // onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => collapse(!collapsed)}
    return (
            <div className={`sideBar ${collapsed ? "collapsed" : ""}`}>
                {renderSidebarLinks(links)}
            </div>
    )
}

export default Sidebar;