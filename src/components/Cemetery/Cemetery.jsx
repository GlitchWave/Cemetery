import React from 'react';
import Header from '../CommonDumbComponents/Header';

class Cemetery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="Cemetery" >
                <Header selected={'cemetery'} />
            </div>
        )
    }
}

export default Cemetery;