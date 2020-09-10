import * as React from 'react';
import './Pagination.scss';
import Pagination from '../../../../../Components/Pagination';
import Widget from '../../../Widget';
import { CircleButton } from '../../../../../Components/Button';

const Paginations:React.FC = () => {
    return <div className="Paginations">
        <Widget>
            <Pagination numberComponent={CircleButton} count={10}/>
        </Widget>
        <Widget>
            <Pagination 
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
        <Widget>
            <Pagination 
                prev={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>}
                next={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>}
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
        <Widget>
            <Pagination 
                first={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>}
                last={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>}
                prev={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>}
                next={<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="stroke-current" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>}
                numberRender={
                    (props) => 
                     <CircleButton {...props} 
                        outline 
                        color="primary"
                        className={` ${props.className} border-0 w-6 h-6`}
                        style={
                            {
                            ...props.style,
                            boxShadow: "none"
                        }} >
                            {props.children}
                    </CircleButton>
                    } 
                count={10}/>
        </Widget>
    </div>
}

export default Paginations;