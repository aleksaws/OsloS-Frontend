import React from "react";
import axios from "axios";

import OversiktsTable from "../OversiktsTable";


class IdrettslagList extends React.Component {

    state = {
        data:[]
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/idrettslag/get/")
            .then(res => {
                this.setState({
                    data: res.data
                });
            });
    }
    
    render(){
        return (
            <OversiktsTable data={this.state.data}/>
        );
    }
}

export default IdrettslagList;