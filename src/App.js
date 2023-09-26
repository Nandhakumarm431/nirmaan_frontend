import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import FooterMain from './Components/FooterDiv/FooterMain';
import Header from './Components/HeaderDiv/Header';
import Page from './Components/PagesDiv/Page';
import Jobscard from './Components/JobsCardDiv/Jobscard';
import Contact from "./Components/ContactDiv/Contact";
import { useState, useEffect } from "react";
import Logout from "./Components/LoginDiv/Logout";
import Dashboard from "./Components/DashboardDiv/Dashboard";
import PostJob from "./Components/ManageJobDiv/PostJob";
import ManageJobs from "./Components/ManageJobDiv/ManageJobs";

function App() {

  const [currentUrlPath, setCurrentUrlPath] = useState('/');
  useEffect(() => {
    setCurrentUrlPath(window.location.pathname);
  }, [currentUrlPath])

  // console.log('localStorage.getItem("users")==undefined', localStorage.getItem("userData"));

  const currentUserJSON = localStorage.getItem("userData");

  const currentUser = JSON.parse(currentUserJSON);
  const role = currentUser ? currentUser.roles[0] : null;


  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Page} />
          <Route path="/logout" component={Logout} />
          <Route exact path='/Jobscard' component={Jobscard} />
          <Route exact path='/aboutus' component={Contact} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/postjob' component={PostJob} />
          <Route exact path='/dashboard/managejob' component={ManageJobs} />

        </Switch>
        <FooterMain />
      </Router>
    </>
  );
}

export default App;
