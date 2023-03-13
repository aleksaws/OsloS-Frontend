import IdrettslagCard from './IdrettslagCard.js'

import React from "react";
import axios from "axios";


export default class IdrettslagCards extends React.Component {

    state = {
        data: []
    }

    componentDidUpdate() {
        if (this.props.apiurl !== this.state.apiurl) {
            axios.get(this.props.apiurl)
            .then(res => {
                this.setState({
                    data: res.data,
                    bgcolor: this.props.bgcolor,
                    apiurl: this.props.apiurl
                });
                console.log(this.props.apiurl)
            });
        }
    }

    componentDidMount() {
        axios.get(this.props.apiurl)
        .then(res => {
            this.setState({
                data: res.data,
                bgcolor: this.props.bgcolor,
                apiurl: this.props.apiurl
            });
            console.log(this.props.apiurl)
        });
    }

    render() {
        return (
            <IdrettslagCard data={this.state.data} bgcolor={this.props.bgcolor} />
        );
    }
}