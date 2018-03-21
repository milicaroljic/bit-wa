import React from "react";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        const inputValue = event.target.value;
        this.props.onChange(inputValue);
        this.setState({value:inputValue});
    }

    render() {
        return (
            <div className="input-field">
                <div className="nav-wrapper">
                    <input onChange={this.handleChange} value={this.state.value} id="search" type="search" required/>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </div>
        )
    }
}
