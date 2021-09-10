import { Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import PrivateRoute from "./hoc/PrivateRoute"
import GuestRoute from "./hoc/GuestRoute"

import Home from "./pages/dashboard/Home";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import ResetPassword from "./pages/account/ResetPassword";
import Activate from "./pages/account/Activate";


function App() {
  
  return (
    <>
      <Layout>
        <PrivateRoute>
          <Route path='/dashboard/' component={Home} />
        </PrivateRoute>
        <GuestRoute>
          <Route path='/login/' component={Login} />
          <Route path='/signup/' component={Signup} />
          <Route path='/reset-password/' component={ResetPassword} />
          <Route path='/activate/:uid/:token/' component={Activate} />

        </GuestRoute>
      </Layout>
    </>
  );
}

export default App;


