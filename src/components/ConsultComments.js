// ConsultComments.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { consultComments,blockComment } from "../slices/loginSlice";

function ConsultComments() {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.login.users);

  useEffect(() => {
    // Fetch comments when the component mounts
    dispatch(consultComments());
  }, [dispatch]);

  const handleBlockComment = (commentId) => {
    // Dispatch the action to block the comment
    dispatch(blockComment(commentId));
    console.log("Comment blocked");
    
  };

  return (
    <div>
      <h1>Consult Comments</h1>
      <form>
        <table>
          <thead>
            <tr>
              <th>Date Commentaire</th>
              <th>Texte Commentaire</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {comments
  .filter((comment) => comment.etat_commentaire !== 2)
  .sort((a, b) => new Date(b.comments[0].date_commentaire) - new Date(a.comments[0].date_commentaire))
  .map((comment) => (
    <tr key={comment.idUser} style={{ display: 'table-row' }}>
      <td>{comment.comments[0].date_commentaire}</td>
      <td>{comment.comments[0].texte_commentaire}</td>
      <td>
        <button onClick={() => handleBlockComment(comment.comments[0].code_commentaire)}>
          Bloquer
        </button>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </form>
    </div>
  );
}

export default ConsultComments;
