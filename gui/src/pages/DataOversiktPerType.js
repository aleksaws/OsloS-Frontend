import React from "react";
import axios from "axios";

import DataOversiktPerTypeTable from "../components/DataOversiktPerTypeTable";


export default class DataOversiktPerType extends React.Component {

    state = {
        data:[]
    }

    componentDidMount(){
        axios.get(this.props.apiurl)
        
            .then(res => {
                this.setState({
                    data: res.data
                });
                console.log(this.props.apiurl)
            });
    }
    
    render(){
        return (
            <DataOversiktPerTypeTable data={this.state.data}/>
        );
    }
}
