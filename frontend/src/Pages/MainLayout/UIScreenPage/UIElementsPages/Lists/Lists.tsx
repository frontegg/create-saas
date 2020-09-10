import * as React from 'react';
import './Lists.scss';
import Widget from '../../../Widget';
import List from '../../../../../Components/List';

const img = <img src="/images/profile.jpeg" alt="" className="mr-3 h-8 rounded-circle shadow-outline-orange-400"></img>
const Lists:React.FC = () => {
    return <div className="Lists">
        <Widget>
            <List className="w-100" left={img} right={1}>
                    <div className="text-sm">Voluptas repellendus est alias ut.</div>
            </List>
            <List className="w-100" left="AB" right="2 days ago">
                    <div className="text-sm">Voluptas repellendus est alias ut.</div>
            </List>
        </Widget>
        <Widget>
            <List className="w-100" left={img} right="2 days ago">
                        <div className="text-sm font-bold">Voluptas repellendus est alias ut.</div>
                        <div className="text-sm text-grey-500">Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
                        <div className="d-flex flex-row text-grey-500 align-items-center justify-content-start">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="stroke-current text-grey-300" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"></path></svg>
                            <div className="text-grey-300 ml-2">a few seconds ago</div>
                        </div>
            </List>
            <List className="w-100" left="AB" leftClassName="bg-success" rightClassName="bg-danger" right={2}>
                        <div className="text-sm font-bold">Voluptas repellendus est alias ut.</div>
                        <div className="text-sm text-grey-500">Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.</div>
                        <div className="d-flex flex-row text-grey-500 align-items-center justify-content-start">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="stroke-current text-grey-300" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"></path></svg>
                            <div className="text-grey-300 ml-2">a few seconds ago</div>
                        </div>
            </List>
        </Widget>
    </div>
}

export default Lists;