import React,{PropTypes,Component} from 'react';
import {Link} from 'react-router';

export default class Login extends Component {

   constructor(props) {
    super(props);
   }

   componentDidMount() {
    console.log("reached");
   }


    render(){
      return(
         <div className="mdl-grid">
         <div className="mdl-cell
           mdl-cell--12-col-desktop
           mdl-cell--8-col-tablet
           mdl-cell--6-col-phone
           mdl-content-center-any">
             <div className="mdl-cell
               mdl-cell--4-col-desktop
               mdl-cell--4-col-tablet
               mdl-cell--3-col-phone
               mdl-margin-bottom-10-per-phone
               mdl-margin-bottom-6-per-tablet
               mdl-margin-bottom-3-per-desktop">
               <div className="app-logo">
              </div>
            </div>
             <div className="mdl-cell
               mdl-cell--4-col-desktop
               mdl-cell--4-col-tablet
               mdl-cell--3-col-phone
               mdl-content-center-any">
               <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <input className="mdl-textfield__input" type="text" id="loginLbl"/>
                <label className="mdl-textfield__label" htmlFor="loginLbl">login@medlife.com</label>
              </div>
            </div>
            <div className="mdl-cell
              mdl-cell--4-col-desktop
              mdl-cell--4-col-tablet
              mdl-cell--3-col-phone
              mdl-content-center-any">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
               <input className="mdl-textfield__input" type="text" id="passwordLbl"/>
               <label className="mdl-textfield__label" htmlFor="passwordLbl">Password</label>
             </div>
           </div>
           <div className="mdl-cell
             mdl-cell--4-col-desktop
             mdl-cell--4-col-tablet
             mdl-cell--3-col-phone
             mdl-margin-top-10-px-any
             mdl-content-center-any">
             <Link className="mdl-button mdl-full-width mdl-js-button mdl-button--raised mdl-button--accent" to={'/home/first'}>
             Submit
             </Link>
          </div>


         </div>
         </div>
       );
    }
}
