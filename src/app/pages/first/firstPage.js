import React,{PropTypes,Component} from 'react';


export default class FirstPage extends Component {
   constructor(props) {
    super(props);

    this.state =
     {
        person :[ ]
     }


   }

   componentDidMount() {
     if(window.componentHandler)
        window.componentHandler.upgradeAllRegistered();
      var empList = [];
     var item ={
      "name": "praneeth",
      "age": " 22"
    };
    for(var i=0;i<10;i++)
       {
         empList.push(item);
       }
       console.log(empList[0]);
     this.setState({person:empList});

   }
   render(){

   var loopData = this.state.person.map(function(item, index)
       {
            return (
                 <li key={" emp "+ index} className="mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-icon">person</i>
                    {item.name}
                </span>
               </li>
              );
       });

       

    return (<div>
        <ul className="demo-list-icon mdl-list">
          {loopData}
         </ul>
        
     </div>) ;
   }
 }
