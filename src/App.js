import { Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import PrivateRoute from "./hoc/PrivateRoute"
import GuestRoute from "./hoc/GuestRoute"



import Home from "./pages/dashboard/Home";
import MakeRequest from "./pages/dashboard/MakeRequest";
import Request from "./pages/dashboard/Request";


import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import ResetPassword from "./pages/account/ResetPassword";
import Activate from "./pages/account/Activate";
import HelpPeople from "./pages/dashboard/HelpPeople";
import DesignConfig from "./context/DesignConfig";


function App() {
  
  return (
    <>
    <DesignConfig>

      <Layout>
        <PrivateRoute>
          <Route path='/dashboard/' component={Home} />
          <Route path='/make-request/' component={MakeRequest} />
          <Route path='/help-people/' component={HelpPeople} />
          <Route path='/requests/:id/' component={Request} />
        </PrivateRoute>
        <GuestRoute>
          <Route path='/login/' component={Login} />
          <Route path='/signup/' component={Signup} />
          <Route path='/reset-password/' component={ResetPassword} />
          <Route path='/activate/:uid/:token/' component={Activate} />

        </GuestRoute>
      </Layout>
    </DesignConfig>
    </>
  );
}

export default App;


