import React from 'react';
import Header from '../CommonDumbComponents/Header';

class Feedback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textarea: ''
        }

        this.handleText = this.handleText.bind(this);
    }

    handleText(value) {
        if((typeof value) === 'string') {
            this.setState({textarea: value});
        }
    }

    submitMessage() {
        if(this.state.textarea.length !== 0) {
            let message = {
                text: this.state.textarea
            };
            /**
             * Todo
             * Send Message logic
             */
            this.setState({textarea: ''});
        }
    }

    render() {
        return (
            <div className="Feedback" >
                <Header selected={'feedback'} />
                <h2>Напишите нам письмо</h2>
                <textarea cols="30" rows="10" value={this.state.textarea} onChange={(event) => this.handleText(event.target.value)} ></textarea>
                <button  >Отправить</button>
            </div>
        )
    }
}

export default Feedback;