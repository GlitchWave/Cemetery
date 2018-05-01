import React from 'react';
import Header from '../CommonDumbComponents/Header';
import Interactor from './components/Interactor';

class Cemetery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsToDisplay: [],
            booked: [],
            bookedPlaceClassName: 'Booked',
            freePlace: 'FreePlace'
        }

        this.bookPlace = this.bookPlace.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.createArray = this.createArray.bind(this);
    }

    bookPlace(placeId) {

    }

    onCancel(event) {
        console.log(event.target.parentNode);
    }

    createArray(data) {
        let places = [];

        data.forEach(element => {
            let key = Math.round(Math.random() * 10000);
            if(this.state.booked.includes(+element.id)) {
                places.push(
                    <div data-id={element.id}
                         key={key}
                     >
                        {element.description}
                        <div onClick={this.onCancel} style={{display: 'none'}} >
                        Cancel
                        </div>
                    </div>)
            } else {
                places.push(
                    <div data-id={element.id}
                         onClick={this.bookPlace}
                         key={key}
                     >
                        {element.description}
                        <div onClick={this.onCancel} >
                        Cancel
                        </div>
                    </div>)
            }
        })

        this.setState({itemsToDisplay: places});
    }

    componentWillMount() {
        this.createArray([{id: 1, description: 'Loud place'}, {id: 2, description: 'Nice view'}]);
    }

    render() {
        return (
            <div className="Cemetery" >
                <Header selected={'cemetery'} />
                <Interactor itemsToDisplay={this.state.itemsToDisplay}
                 />
            </div>
        )
    }
}

export default Cemetery;