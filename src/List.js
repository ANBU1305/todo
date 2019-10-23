import React from 'react';

export class List extends React.Component{
    render(){
    console.log(this.props)
   return(<div>
   <ul className="list-group">
       {
       this.props.items.map(i=>(
<li key={i.id} className="list-group-item list-group-item-primary">{i.user}<button style={{float:"right"}} onClick={this.props.HandleDelete.bind(this,i)}>delete</button></li>
   ))
    }
    
   </ul>
   </div>
)}
}