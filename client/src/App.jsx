import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./views/Overview";
import LoginView from "./views/LoginView";
import Layout from "./components/Layout";
import RegisterUser from "./views/RegisterUser";
import EmployeePanel from "./views/EmployeePanel";
import UserPanel from "./views/UserPanel";
import UserProfilePanel from "./views/UserProfilePanel";
import InvoiceDetails from "./views/InvoiceDetails";

function App() {
  return (
    <>
      <div>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/overview" element={<Overview />} />
              <Route path="/userprofile/:id" element={<UserProfilePanel />} />
              <Route path="/invoice/:id" element={<InvoiceDetails />} />
              <Route path="/employee" element={<EmployeePanel />} />
              <Route path="/user" element={<UserPanel />} />
              <Route path="/register_user" element={<RegisterUser />} />
            </Route>
            <Route path="/login" element={<LoginView />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
