import React,{PropTypes,Component} from 'react';
import {Link} from 'react-router';


export default class FeedbackRequest extends Component {
   constructor(props) {
    super(props);

    this.state ={
     feedbackReq : [ ]
    }

   }

   componentDidMount() {
     if(window.componentHandler)
        window.componentHandler.upgradeAllRegistered();
     var empList =[ ];
         
      
    
       console.log(empList[0]);
     this.setState({feedbackReq:empList});



   }
   render(){ 
return (
<div className="mdl-cell
           mdl-cell--12-col-desktop
           mdl-cell--8-col-tablet
           mdl-cell--6-col-phone
           mdl-content-center-any">
             <div className="mdl-cell
               mdl-cell--4-col-desktop
               mdl-cell--4-col-tablet
               mdl-cell--3-col-phone
               ">
               <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                      <input className="mdl-textfield__input" type="text" id="emp1" />
                      <label className="mdl-textfield__label" for="emp1"> Emp name </label>
              </div>
            </div>
            <div className="mdl-cell
              mdl-cell--4-col-desktop
              mdl-cell--4-col-tablet
              mdl-cell--2-col-phone
             ">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                       <input className="mdl-textfield__input" type="text" id="emp1" />
                      <label className="mdl-textfield__label" for="emp1"> Emp2 Name </label>
             </div>
           </div>
           <div className="mdl-cell
             mdl-cell--4-col-desktop
             mdl-cell--4-col-tablet
             mdl-cell--2-col-phone
             mdl-margin-top-10-px-any
             mdl-content-center-any">
             <Link className="mdl-button mdl-full-width mdl-js-button mdl-button--raised mdl-button--accent" to={'/home/first'}>
             Submit
             </Link>
          </div>


         </div>

    ) ; 
   }
 }
