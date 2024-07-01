import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  annuler,
  updateLogin,
  updateId,
  updateNom,
  updatePwd,

} from "../slices/inscripSlice";
import { addUser } from "../slices/loginSlice";

function Inscr() {
  const user = useSelector((store) => store.inscription);
  const users = useSelector((store) => store.login.users);
  const [pwdCmf, setPwdCmf] = useState("");

  const dispatch = useDispatch();

  dispatch(updateId(users.length + 1));
  function handelAddUser(e) {
    e.preventDefault();
    if (user.password === pwdCmf) {
      dispatch(addUser(user));
    }
  }

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={(e) => handelAddUser(e)}>
        <table>
          <tr>
            <th>Nom</th>
            <td>
              <input
                type="text"
                value={user.nom}
                onChange={(e) => dispatch(updateNom(e.target.value))}
                required
              />
            </td>
          </tr>
          <tr>
            <th>login</th>
            <td>
              <input
                type="email"
                value={user.login}
                onChange={(e) => dispatch(updateLogin(e.target.value))}
                required
              />
            </td>
          </tr>
          <tr>
            <th>Mot de passe</th>
            <td>
              <input
                type="text"
                value={user.password}
                onChange={(e) => dispatch(updatePwd(e.target.value))}
                required
              />
            </td>
          </tr>
          <tr>
            <th>Comfirmer mot de passe</th>
            <td>
              <input
                type="text"
                value={pwdCmf}
                onChange={(e) => setPwdCmf(e.target.value)}
                required
              />
            </td>
          </tr>
        </table>
        <hr />
        <button type="submit">Valider</button>
        <button onClick={() => dispatch(annuler())}>Annuler</button>
      </form>
      <br />
      <Link to="/">Login</Link>
    </div>
  );
}

export default Inscr;
