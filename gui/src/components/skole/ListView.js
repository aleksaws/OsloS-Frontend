import React from "react";
import axios from "axios";

import OversiktsTable from "../DataOversiktPerTypeTable";


class SkoleList extends React.Component {

    state = {
        data:[]
    }

    componentDidMount(){
        axios.get(this.props.apiurl)
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

export default SkoleList;