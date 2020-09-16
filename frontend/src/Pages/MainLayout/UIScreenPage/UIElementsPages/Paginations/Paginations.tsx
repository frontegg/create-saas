import * as React from 'react';
import './Pagination.scss';
import Pagination from '../../../../../Components/Pagination';
import Widget from '../../../Widget';
import { CircleButton } from '../../../../../Components/Button';

const Paginations:React.FC = () => {
    return <div className="Paginations">
        <Widget className="flex-wrap">
            <Pagination page={5}
                count={10}/>
        </Widget>
        <Widget className="flex-wrap" col>
            <Pagination className="mb-3" page={5}
                prev={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>}
                next={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>}
                count={10}/>
            <Pagination className="mb-3" page={5} 
                prev={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>}
                next={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>}
                count={10} />
            <Pagination className="mb-3" page={5}
                prev={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>}
                next={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>}
                count={10}/>
        </Widget>
        <Widget className="flex-wrap">
            <Pagination page={5}
                first={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>}
                last={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>}
                prev={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>}
                next={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>}
                count={10}/>
        </Widget>
        <Widget className="flex-wrap">
            <Pagination 
                page={5}
                numberRender={
                    (props) => 
                    <CircleButton {...props} 
                        outline 
                        color="primary" 
                        className={` ${props.className} border-0 w-6 h-6`}
                        style={{
                            boxShadow: "none"
                        }} >
                            {props.children}
                    </CircleButton>
                } 
                count={10}/>
        </Widget>
        <Widget className="flex-wrap">
            <Pagination numberComponent={CircleButton} count={10}/>
        </Widget>
    </div>
}

export default Paginations;