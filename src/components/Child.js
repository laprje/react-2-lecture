import React, {Component} from 'react'

 class Child extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }

     render() { 
         return ( 
             <div className="info-card"> 
                <h3>{this.props.name}</h3>
                <h3>{this.props.age}</h3>
                <h3>{this.props.email}</h3>
                <h3>{this.props.phone}</h3>
                <h3>{this.props.address}</h3>
                <h3>{this.props.website}</h3>
             </div>
          );
     }
 }
  
 export default Child;