import React,{PropTypes,Component} from 'react';
import {Link} from 'react-router';

export default class PendingFeedback extends Component {
   constructor(props) {
    super(props);

    this.state ={
     pendingFeedback : [ ]
    }

   }

   componentDidMount() {
     if(window.componentHandler)
        window.componentHandler.upgradeAllRegistered();
     var empList = [
         {
        "_id": "M00024 Wed Jul 20 18:04:58 IST 2016M00021",
        "empID": "M00024",
        "empFirstname": "Praneeth",
        "empLastname": "Gadari",
        "managerID": "M00001",
        "managerMailID": "gadaripraneeth@gmail.com",
        "givEmpId": "M00021",
        "givEmpMail": "praneeth.gadari@medlife.com",
        "reqGenDate": "2016-07-20T12:34:58.358Z"
      }, 
      {
        "_id": "M00023 Wed Jul 19 18:04:58 IST 2016M00021",
        "empID": "M00023",
        "empFirstname": "Sai",
        "empLastname": "Pradeep",
        "managerID": "M00001",
        "managerMailID": "gadaripraneeth@gmail.com",
        "givEmpId": "M00021",
        "givEmpMail": "praneeth.gadari@medlife.com",
        "reqGenDate": "2016-07-19T12:34:58.358Z"
      }

     ];
         
      
    
       console.log(empList[0]);
     this.setState({pendingFeedback:empList});



   }
   render(){

   var loopData = this.state.pendingFeedback.map(function(item, index)
       {
            return (
                 <li key={" pendingFeedback "+ index}    className="mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-icon">person</i>
                    <Link   to={"/feedback/"+item.givEmpId+"/"+item.empID+"/"+item.managerID} >{item.empFirstname} &nbsp; { item.empLastname}</Link>
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
