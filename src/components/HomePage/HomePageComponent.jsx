import React from 'react';

import Header from '../CommonDumbComponents/Header';

class HomePageComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="Home" >
                <Header />
            </div>
        )
    }

}

export default HomePageComponent;