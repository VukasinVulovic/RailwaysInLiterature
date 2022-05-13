import React from 'react';
import trainImage from '../assets/images/train.png';
import './Rail.scss';

class Train extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            y: 0
        }

        this.height = props.height;
        this.speed = 100;
        this.ref = null;
    }

    framePassed(e) {
        const rect = this.ref.getBoundingClientRect();

        if(e.deltaY > 0 && (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) && this.state.y < (this.props.railLength - this.height))
            this.setState({ y: this.state.y + this.speed });
    }

    componentDidMount() {
        window.addEventListener('wheel', this.framePassed.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.framePassed.bind(this));
    }

    render() {
        return (
            <div className='train-wrapper' style={{ top: this.state.y, height: this.height }} ref={ref => this.ref = ref}>
                <img src={trainImage} className='train' alt='train'/>
            </div>
        );
    }
}

class Rail extends React.Component {
    constructor() {
        super();
    }

    render() {
        const segmentLength = 100;
        const segmentCount = 49;
        const trainLength = 350;

        return (
            <div className='rail' style={{ width: this.props.width }}>
                <Train height={trainLength} railLength={segmentCount * segmentLength}/>
                {
                    new Array(segmentCount).fill(            
                        <div className='rail-segment-straight' style={{ height: segmentLength }}>
                            <hr className='ver-stripe'/>
                            <div className='hor-stripes'> { new Array(4 * (segmentLength / 100)).fill(<hr/>) } </div>
                            <hr className='ver-stripe'/>
                        </div> 
                    )
                }
            </div>
        );
    }
}

export default Rail;