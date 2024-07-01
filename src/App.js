import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Auth from "./components/Auth";
import Inscr from "./components/Inscr";
import store from "./store";
import Acu from "./components/Acu";
import Admin from "./components/Admin";
import Membre from "./components/Membre";
import Moderateur from "./components/Moderateur"
import ConsultBlockedComments from "./components/ConsultBlockedComments";
import ConsultComments from "./components/ConsultComments";
import UserForm from "./components/UserForm"
import ManageCom from "./components/ManageCom";
import Document from "./components/Document"
import InitialPass from "./components/InitialPass"



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" index element={<Auth />} />
          <Route path="insc" element={<Inscr />} />
          <Route path="Acu" element={<Acu />} />
          <Route path="admin" element={<Admin/>} />
          <Route path="moderateur" element={<Moderateur/>} />
          <Route path="moderateur/consult-comments" element={<ConsultComments />} />
          <Route path="moderateur/blocked-comments" element={<ConsultBlockedComments />} />
          <Route path="membre" element={<Membre/>} />
          <Route path="/member/document" element={<Document />} />

          <Route path="*" element={<h1>Error</h1>} />
          <Route path="/admin/users" element={<UserForm />} />
          <Route path="/admin/comments" element={<ManageCom/>} />
          <Route path="/admin/users" element={<UserForm />} />
          <Route path="/admin/initialPass" element={<InitialPass/>} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
