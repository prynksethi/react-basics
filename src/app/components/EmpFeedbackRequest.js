import React,{PropTypes,Component} from 'react';


export default class EmpFeedbackRequest extends Component {
   constructor(props) {
    super(props);

    this.state ={
     empFeedbackRequest : [ ]
    }

   }

   componentDidMount() {
     if(window.componentHandler)
        window.componentHandler.upgradeAllRegistered();
     var empRequestList =[
    {
      "_id" : "M00024 Mon Jul 25 12:04:05 IST 2016",
      "empId" : "M00024",
      "empFirstname" : "Praneeth",
      "empLastname" : "Gadari",
      "managerID" : "M00001",
      "managerMailID" : "gadaripraneeth@gmail.com",
      "givEmpIdList" : [
        "M00021",
        "M00022"
      ],
      "givEmpFNameList" : [
        "Prashanth",
        "Sai"
      ],
      "givEmpLNameList" : [
        "Tatan",
        "Pradeep"
      ],
      "givEmpMailList" : [
        "praneeth.gadari@medlife.com",
        "praneeth.gadari@medlife.com"
      ],
      "reqGenDate" : "2016-07-25T06:34:05.605Z"
    }

  ];
         
      
    
       console.log(empRequestList[0]);
     this.setState({empFeedbackRequest:empRequestList});



   }
   render(){

   var loopData = this.state.empFeedbackRequest.map(function(item, index)
       {
            return (
                 <li key={" empFeedbackRequest "+ index} className="mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-icon">person</i>
                    {item.empFirstname} &nbsp; { item.empLastname}
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
