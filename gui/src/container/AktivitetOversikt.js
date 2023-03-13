import React from "react";
import axios from "axios";
import AktivitetOversiktTabell from "../components/AktivitetOversiktTabell";

export default class AktivitetOversiktContainer extends React.Component {

    state = {
        data:[]
    }

    componentDidUpdate() {
        if (this.props.apiurl !== this.state.apiurl) {
            axios.get(this.props.apiurl)
            .then(res => {
                this.setState({
                    data: res.data,
                    apiurl: this.props.apiurl
                });
            });
        }
    }

    componentDidMount() {
        axios.get(this.props.apiurl)
        .then(res => {
            this.setState({
                data: res.data,
                apiurl: this.props.apiurl
            });
        });
    }
    
    render(){
        return (
            <AktivitetOversiktTabell data={this.state.data}/>
        );
    }
}