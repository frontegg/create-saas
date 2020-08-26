import * as React from 'react';
import './Sidebar.scss';
import SidebarHeadline from './SidebarHeadline';
import SidebarLink from './SidebarLink';
import SidebarLinkWithSub from './SidebarLinkWithSub';
import sidebarContents, {sidebarHeadlineType, sidebarLinkType, sidebarLinkWithSubType} from './types';
import {links} from './links';

const Sidebar: React.FC = () => {
    const [collapsed, collapse] = React.useState<boolean>(false);

    const handleCollapse = (event: React.ChangeEvent<HTMLInputElement>) => collapse(!collapsed);

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
                        return <li className="submenu">
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
            <div className={`sideBar ${collapsed ? "collapsed" : "expanded"}`}>
                <input type="checkbox" id="collapsing" className="d-none" onChange={handleCollapse} checked={collapsed}/>
                <div className="logo">
                    <a className="d-flex flex-row align-items-center justify-content-start space-x-2" href="/">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"  height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        <span>D-board</span>
                    </a>
                    <label htmlFor="collapsing" className={`${collapsed ? "d-none" : "d-block"} d-lg-none ml-auto mr-4`}>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"  height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </label>
                </div>
                {renderSidebarLinks(links)}
            </div>
    )
}

export default Sidebar;