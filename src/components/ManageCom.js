
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import{  deleteSelectedComments} from "../slices/loginSlice"

function ManageCom() {
  const { users } = useSelector((store) => store.login);
  const dispatch=useDispatch()
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedComments, setSelectedComments] = useState([]);

  const handleUserChange = (event) => {
    const selectedUserName = event.target.value;
    setSelectedUser(selectedUserName);
    setSelectedComments([]); // Reset selected comments when user changes
  };

  const handleCommentCheckboxChange = (commentId) => {
    // Toggle the selection of a comment
    setSelectedComments((prevSelectedComments) => {
      if (prevSelectedComments.includes(commentId)) {
        return prevSelectedComments.filter((id) => id !== commentId);
      } else {
        return [...prevSelectedComments, commentId];
      }
    });
  };

  const handleDeleteSelectedComments = () => {
    dispatch(deleteSelectedComments({ selectedUser, selectedComments }));
  };
  

  return (
    <>
      <h1>Manage Comments</h1>
      <label htmlFor="userSelect">Select User:</label>
      <select id="userSelect" onChange={handleUserChange} value={selectedUser}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.idUser} value={user.nom}>
            {user.nom}
          </option>
        ))}
      </select>

      {selectedUser && (
        <>
          <h2>Comments by {selectedUser}</h2>
          <ul>
            {users
              .find((user) => user.nom === selectedUser)
              .comments.map((comment) => (
                <li key={comment.code_commentaire}>
                  <input
                    type="checkbox"
                    checked={selectedComments.includes(comment.code_commentaire)}
                    onChange={() => handleCommentCheckboxChange(comment.code_commentaire)}
                  />
                  {comment.texte_commentaire}
                </li>
              ))}
          </ul>
          <button onClick={handleDeleteSelectedComments}>Delete Selected Comments</button>
        </>
      )}
    </>
  );
}

export default ManageCom;
