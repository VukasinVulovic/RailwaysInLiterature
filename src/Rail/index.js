import React from 'react';
import './Rail.scss';

class RailSegment extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='rail-segment' style={{ height: this.props.length }}>
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
                <RailSegment length={100}/>
                <RailSegment length={100}/>
                <RailSegment length={100}/>
                <RailSegment length={100}/>
                <RailSegment length={100}/>
                <RailSegment length={100}/>
            </div>
        );
    }
}

export default Rail;