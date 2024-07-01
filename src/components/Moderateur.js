// Moderateur.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { blockComment, unblockComment } from "../slices/loginSlice";

function Moderateur() {
;
  const user = useSelector((store) => store.login.user);
  const blockedComments = useSelector((store) => store.login.blockedComments);

 // Fix this line


  const dispatch = useDispatch();

  const handleBlockComment = (code_commentaire) => {
    dispatch(blockComment({ code_commentaire }));
  };

  const handleUnblockComment = (code_commentaire) => {
    dispatch(unblockComment({ code_commentaire }));
  };

  return (
    <div>
      <h1>Moderateur Page</h1>

      {/* Link to view and block comments */}
      <Link to="/moderateur/consult-comments">commmentaires</Link>
    <br/>
      {/* Link to view and unblock comments */}
      <Link to="/moderateur/blocked-comments"> Commentaires Bloqués</Link>

      {/* Add Routes for the above links */}
      {/* ... */}
    </div>
  );
}

export default Moderateur;
