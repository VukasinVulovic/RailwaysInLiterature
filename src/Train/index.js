import React from 'react';
import trainImage from '../assets/images/train.png';
import './Train.scss';

class Rail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            y: 0
        }

        this.height = props.height;
        this.speed = 1;
        this.runLoop = true;
    }

    framePassed() {
        this.setState({ y: this.state.y + this.speed });

        if(this.runLoop)
            window.requestAnimationFrame(this.framePassed.bind(this));
    }

    componentDidMount() {
        window.requestAnimationFrame(this.framePassed.bind(this));
        // this.loop = setInterval(() => this.setState({ speed: 10 }), 100);
    }

    componentWillUnmount() {
        this.runLoop = false;
        // clearInterval(this.loop);
    }

    render() {

        return (
            <div className='train-wrapper' style={{ top: this.state.y, height: this.height  }}>
                <img src={trainImage} className='train' alt='train'/>
            </div>
        );
    }
}

export default Rail;