import React from 'react';

import Header from '../CommonDumbComponents/Header';

class HomePageComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="Home" >
                <Header selected={'home'} />
            </div>
        )
    }

}

export default HomePageComponent;