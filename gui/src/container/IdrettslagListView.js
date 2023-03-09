import React from "react";
import axios from "axios";
import Idrettslag from "../components/Idrettslag";

const data = [
    {    title: 'Ant Design Title 1',  },
    {    title: 'Ant Design Title 2',  },
    {    title: 'Ant Design Title 3',  },
    {    title: 'Ant Design Title 4',  },
  ];

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
            <Idrettslag data={this.state.idrettslag}/>
        );
    }
}

export default IdrettslagList;