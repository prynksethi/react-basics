/**   <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
       <header className="mdl-layout__header">
       <div className="mdl-layout__header-row">
         <span className="mdl-layout-title">Peer to Peer </span>
         <div className="mdl-layout-spacer"></div>
       </div>
     </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Manager</span>
      <nav className="mdl-navigation">
        <Link className="mdl-navigation__link" to={'/home/first'}> Request Feedback </Link>
        <Link className="mdl-navigation__link" to={'/home/second'}> Pending Feedback </Link>
         <Link className="mdl-navigation__link" to={'/home/second'}> Employee Feedback Requests </Link>
         <Link className="mdl-navigation__link" to={'/home/second'}> Received Employee Feedback  </Link>
        <Link className="mdl-navigation__link" to={'/login'}>Login</Link>
      </nav>
    </div>
    <main className="mdl-layout__content">
      {this.props.children}
    </main>
   </div> */


         <form action="#">
    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="text" id="emp1" />
      <label className="mdl-textfield__label" for="emp1"> Emp name </label>
    </div>
      <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="text" id="emp2" / >
      <label className="mdl-textfield__label" for="emp2">Emp name</label>
    </div>

</form>