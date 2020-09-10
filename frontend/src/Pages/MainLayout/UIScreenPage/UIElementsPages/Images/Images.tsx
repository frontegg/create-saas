import * as React from 'react';
import './Images.scss';
import Widget from '../../../Widget';
import { Row, Col } from 'reactstrap';

const Images:React.FC = () => {
    const colors = ["grey", "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink"];
    return <div className="Images">
        <Widget>
            <Row>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-8 rounded"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-16 rounded"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-20 rounded"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-24 rounded"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-32 rounded"/>
            </Row>
        </Widget>
        <Widget>
            <Row>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-8 rounded-circle"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-16 rounded-circle"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-20 rounded-circle"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-24 rounded-circle"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-32 rounded-circle"/>
            </Row>
        </Widget>
        <Widget>
            <Row>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-8  rounded-circle shadow"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-16 rounded-circle shadow"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-20 rounded-circle shadow"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-24 rounded-circle shadow"/>
                <img src="/images/profile.jpeg" alt="" className="mx-3 h-32 rounded-circle shadow"/>
            </Row>
        </Widget>
        <Widget>
            <Col className="w-full">
            { colors.map((value, index) => {
                let array = []
                    for (let i = 3; i < 10; i++) {
                        array.push(<img src="/images/profile.jpeg" alt="" className={`mx-3 h-8 rounded-circle shadow-outline-${value}-${i}00`}/>); 
                    }
                return <Row key={"row"+index} className="justify-content-start h-16">
                    {array}
                </Row>
            })
            }
            </Col>
        </Widget>
    </div>
}

export default Images;