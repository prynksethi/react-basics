import React,{PropTypes,Component} from 'react'
import {Link} from 'react-router'
import {FirstPage , Login} from './index'
import {EmpFeedbackRequest,PendingFeedback,FeedbackRequest, DoctorFeedback} from '../components/index'

export default class Home extends Component {
   constructor(props) {
    super(props);
   }

   componentDidMount() {
     if(window.componentHandler)
        window.componentHandler.upgradeAllRegistered();
   }

    render(){
     return(
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Peer to Peer </span>
        </div>

        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <a href="#scroll-tab-1" className="mdl-layout__tab is-active">Request Feedback </a>
          <a href="#scroll-tab-2" className="mdl-layout__tab"> Pending Feedback </a>
          <a href="#scroll-tab-3" className="mdl-layout__tab"> Employee Feedback Requests </a>
          <a href="#scroll-tab-4" className="mdl-layout__tab"> Received Employee Feedback </a>
          <a href="#scroll-tab-5" className="mdl-layout__tab"> Doctor Feedback </a>
        </div>
    </header>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Manager</span>
  </div>
  <main className="mdl-layout__content">
      <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
        <div className="page-content"> <FeedbackRequest  / > </div>
      </section>
      <section className="mdl-layout__tab-panel" id="scroll-tab-2">
        <div className="page-content"> <PendingFeedback/ > </div>
      </section>
      <section className="mdl-layout__tab-panel" id="scroll-tab-3">
        <div className="page-content"> < EmpFeedbackRequest /> </div>
      </section>
      <section className="mdl-layout__tab-panel" id="scroll-tab-4">
        <div className="page-content">Received Employee Feedback </div>
      </section>
      <section className="mdl-layout__tab-panel" id="scroll-tab-5">
        <div className="page-content"> < DoctorFeedback /> </div>
      </section>
  </main>
</div>
);
    }
}
