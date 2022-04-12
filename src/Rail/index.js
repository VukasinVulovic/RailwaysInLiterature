import React from 'react';
import Train from '../Train';
import './Rail.scss';

class RailSegment extends React.Component {
    constructor(props) {
        super(props);
        this.type = props.type || 'straight';
    }

    render() {
        return (
            <div className={'rail-segment-' + this.type} style={{ height: this.props.length }}>
                <hr className='ver-stripe'/>
                <div className='hor-stripes'>
                    { new Array((this.props.length / 100) * 4).fill(<hr/>) }
                </div>
                <hr className='ver-stripe'/>
            </div> 
        );
    }
}

class Rail extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='rail'>
                <Train height={350}/>
                <RailSegment length={100} type='straight'/>
                <RailSegment length={100} type='straight'/>
                <RailSegment length={100} type='straight'/>
                <RailSegment length={100} type='straight'/>
                <RailSegment length={100} type='straight'/>
                <RailSegment length={100} type='straight'/>
                <RailSegment length={100} type='straight'/>
            </div>
        );
    }
}

export default Rail;