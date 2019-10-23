import React from 'react';
import Header from './Header';
import {List} from './List';
import axios from 'axios';
class App extends React.Component{
    state={
     list:[]   
    };
    componentDidMount(){
        axios.get("http://localhost:8082/value").then(response=>{
    this.setState({
        list:response.data
    })
        })

    }
    addlist=(value)=>{
        axios.post("http://localhost:8082/value",{user:value}).then(success=>{
        this.setState({
            list:[...this.state.list,success.data]
        });

    
    });
};
    HandleDelete=(remove)=>{
        this.setState({
            list:this.state.list.filter(i=>i!==remove)
        })
    }
    render(){
return(<div>
    <Header addlist={this.addlist}/>
    <List items={this.state.list} HandleDelete={this.HandleDelete}/>
</div>);
    }
}
export default App;