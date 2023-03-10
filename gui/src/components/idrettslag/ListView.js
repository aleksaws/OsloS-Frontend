import React from "react";
import axios from "axios";

import OversiktsTable from "../OversiktsTable";


class IdrettslagList extends React.Component {

    state = {
        idrettslag:[]
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/idrettslag/get/")
            .then(res => {
                this.setState({
                    idrettslag: res.data
                });
                console.log(res.data)
            });
    }
    
    render(){
        return (
            <OversiktsTable data={this.state.idrettslag}/>
        );
    }
}

export default IdrettslagList;