import React from 'react';
import Header from '../CommonDumbComponents/Header';

class Feedback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="Feedback" >
                <Header selected={'feedback'} />
            </div>
        )
    }
}

export default Feedback;