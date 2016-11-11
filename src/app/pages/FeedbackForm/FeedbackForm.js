import React,{PropTypes,Component} from 'react'
import {Link} from 'react-router'
import {FirstPage , Login} from '../index'
import {EmpFeedbackRequest,PendingFeedback,FeedbackRequest} from '../../components/index'

export default class FeedbackForm  extends Component {
   constructor(props) {
    super(props);
    this.state = {
   
        Questions : [ ]
    }
   }

   componentDidMount() {
     if(window.componentHandler)
        window.componentHandler.upgradeAllRegistered();

   var qlist = ["Q1 : Spring MVC " ,"Q2: React JS ","Q3: Design Patterns ","Q4: Angular JS ","Q5: Node JS "];
   this.setState({Questions:qlist});
      console.log("Fback form mounted");
   }

    render(){

    var loopData  = this.state.Questions.map(function(item , index)
                      {
                            return (

                           <tr>
                               <td>{item}</td>
                               <td>
                                <span className="rating">
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-5" name="rating-input-1" />
                                    <label for="rating-input-1-5" className="rating-star"></label>
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-4" name="rating-input-1" />
                                    <label for="rating-input-1-4" className="rating-star"></label>
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-3" name="rating-input-1" />
                                    <label for="rating-input-1-3" className="rating-star"></label>
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-2" name="rating-input-1" />
                                    <label for="rating-input-1-2" className="rating-star"></label>
                                    <input type="radio" className="rating-input"
                                        id="rating-input-1-1" name="rating-input-1" />
                                    <label for="rating-input-1-1" className="rating-star"></label>
                                   </span>
                                   </td>
                               </tr>    
                                 );
                      });
    


     return(
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">

      <span className="mdl-layout-title">Feedback Form </span>
     
      <div className="mdl-layout-spacer"></div>
     
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <a className="mdl-navigation__link" href="">Logout</a>
      </nav>
    </div>
  </header>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title"> Going somewhere ? </span>
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link" href="">Home </a>
    </nav>
  </div>
  <main className="mdl-layout__content">
    <div className="page-content"> 
     

     <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
  <thead>
    <tr>
      <th class="mdl-data-table__cell--non-numeric">Question </th>
      <th>Rating</th>
    </tr>
  </thead>
  <tbody>
  {loopData}
  </tbody>
</table>
<div className="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="sample1" />
    <label class="mdl-textfield__label" for="sample1">Text...</label>
  </div>

<div className="mdl-cell
             mdl-cell--4-col-desktop
             mdl-cell--4-col-tablet
             mdl-cell--3-col-phone
             mdl-margin-top-10-px-any
             mdl-content-center-any">
             <Link className="mdl-button mdl-full-width mdl-js-button mdl-button--raised mdl-button--accent"  to ={''}>
             Submit
             </Link>
          </div>

     </div>
  </main>
</div>
);
    }
}
