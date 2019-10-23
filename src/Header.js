import React from 'react';
class Header extends React.Component{
    state={
        input:""
    }
 handleInputChange = event =>{
     this.setState({
         input:event.target.value
     })
     
 }
 handleSubmit = value=>{
     this.props.addlist(this.state.input)
     this.setState({input:""})
 }
    render(){
return(<div> <h1>TODO</h1>
    <textarea type="text" className="form-control" onChange={this.handleInputChange} value={this.state.input}/>
    <button className="btn btn-block btn-primary" onClick={this.handleSubmit}>ADD</button>
</div>);
}
}
export default Header;