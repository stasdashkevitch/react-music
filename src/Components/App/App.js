import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import MainPage from "../Pages/MainPage";
import RegistrationPage from "../Pages/RegistrationPage";
import Footer from "../Footer";
import Nav from "../Nav";

function App() {
  return (
      <Router>
         <Nav/>
         <Switch>
            <Route exact path="/">
               <MainPage/>
            </Route>
            <Route exact path="/registration">
               <RegistrationPage/>
            </Route>
         </Switch>
         <Footer/>
      </Router>
  );
}

export default App;
