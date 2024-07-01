// ConsultComments.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { consultBlockedComments, unblockComment } from "../slices/loginSlice";

function ConsultComments() {
  const dispatch = useDispatch();
  const blockedComments = useSelector((store) => store.login.blockedComments);

  useEffect(() => {
    // Fetch blocked comments when the component mounts
    dispatch(consultBlockedComments());
  }, [dispatch]);

  const handleUnblockComment = (commentId) => {
    // Dispatch the action to unblock the comment
    dispatch(unblockComment(commentId));
    console.log("Comment unblocked");
  };

  return (
    <div>
      <h1>Blocked Comments</h1>
      <form>
        <table>
          <thead>
            <tr>
              <th>Date Comment</th>
              <th>Text Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blockedComments.map((comment) => (
              <tr key={comment.idUser}>
                <td>{comment.comments[0].date_commentaire}</td>
                <td>{comment.comments[0].texte_commentaire}</td>
                <td>
                  <button onClick={() => handleUnblockComment(comment.comments[0].code_commentaire)}>
                    Unblock
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
