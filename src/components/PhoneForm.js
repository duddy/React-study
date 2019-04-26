import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        console.log('Call');
        this.setState({
            [e.target.name]: e.target.value //computed property name!!
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        });
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
                <input
                    placeholder="tel"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <div>{this.state.name}{this.state.phone}</div>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default PhoneForm;
