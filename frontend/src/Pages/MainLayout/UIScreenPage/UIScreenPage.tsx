import * as React from 'react'
import './UIScreenPage.scss'

type Props = {
    category?: string,
}
const UIScreenPage: React.FC<Props & React.HTMLAttributes<HTMLElement>> = ({category = "UI Elements", children}) => {
    return <div className="uiScreenPage">
                <div className="section-title">
                    <div className="category">{category}</div>
                </div>
                {children}
            </div>
}

export default UIScreenPage;