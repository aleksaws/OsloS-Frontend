import React from "react";
import axios from "axios";

import OversiktsTable from "../OversiktsTable";


class SkoleList extends React.Component {

    state = {
        skoler:[]
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/skole/get/")
            .then(res => {
                this.setState({
                    skoler: res.data
                });
                console.log(res.data)
            });
    }
    
    render(){
        return (
            <OversiktsTable data={this.state.skoler}/>
        );
    }
}

export default SkoleList;