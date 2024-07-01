import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../slices/loginSlice";

function Auth() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((store) => store.login);
  const userRole = useSelector((store) => store.login.role);

  function handelValid() {
    dispatch(login(user, pwd));
  }
  useEffect(
    function () {
      if (status === "valid") {
        switch (userRole) {
          case "admin":
            navigate("/admin"); // Redirect to admin page
            break;
          case "moderateur":
            navigate("/moderateur"); // Redirect to moderateur page
            break;
          default:
            navigate("/membre"); // Redirect to membre page
        }
      }
      // ... existing code
    },
    [status, userRole, navigate]
  );
  return (
    <>
      <fieldset>
        <legend>Authentification</legend>
        <table>
  <tbody>
    <tr>
      <td>
        login:{" "}
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </td>
      <td>
        password:{" "}
        <input
          type="text"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </td>
      <td>
        <button onClick={handelValid}>Valider</button>
      </td>
    </tr>
  </tbody>
</table>

      </fieldset>
      <span>
        <Link to={"insc"}>S'inscrire</Link>
      </span>
    </>
  );
}

export default Auth;












