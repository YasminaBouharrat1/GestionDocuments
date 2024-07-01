import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../slices/loginSlice";

function Acu() {
  const { status, user } = useSelector((store) => store.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "logout") {
      navigate("/");
    }
  }, [status, navigate]);

  return (
    <>
      <h1>
        Hi, {`${user.nom} ${user.role}`}
        <button onClick={() => dispatch(logout())}>logout</button>
      </h1>
    </>
  );
}

export default Acu;
