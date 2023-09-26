import { Component } from "react";

export default class Notification extends Component {
    render(){
        return(
            <h3>{this.props.message}</h3>
        )
    }
}