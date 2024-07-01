import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom
import { logout } from "../slices/loginSlice";

function Membre() {
  const { status } = useSelector((store) => store.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "logout") {
      navigate("/");
    }
  }, [status, navigate]);

  return (
    <>
      <h1>Admin Page</h1>
      <Link to="/member/document">selectionner documents</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
}

export default Membre;
