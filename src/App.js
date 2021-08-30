import { Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Layout from "./hoc/Layout";
import PrivateRoute from "./hoc/PrivateRoute"
import GuestRoute from "./hoc/GuestRoute"

import Home from "./pages/dashboard/Home";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";

function App() {
  
  return (
    <>
      <GlobalStyle />
      <Layout>
        <PrivateRoute>
          <Route path='/dashboard/' component={Home} />
        </PrivateRoute>
        <GuestRoute>
          <Route path='/login/' component={Login} />
          <Route path='/signup/' component={Signup} />
        </GuestRoute>
      </Layout>
    </>
  );
}

export default App;


