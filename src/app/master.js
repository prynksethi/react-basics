import React,{PropTypes,Component} from 'react';

export default class Master extends Component {

   constructor(props) {
    super(props);
   }

    render(){
      var style={
        width:'100%',
        height:'100%'
      }
      return(
        <div style={style}>
        {this.props.children}
        </div>
      );
    }
}
