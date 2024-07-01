import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUserRole } from "../slices/loginSlice";

function UserForm() {
  const users = useSelector((state) => state.login.users);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRole, setSelectedRole] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Update the selectedRole when the currentIndex changes
    setSelectedRole(users[currentIndex]?.role || "");
  }, [currentIndex, users]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleUpdateRole = () => {
    const userId = users[currentIndex].idUser;
    dispatch(updateUserRole({ userId, newRole: selectedRole }));
  };

  const currentUser = users[currentIndex];

  const handleFirst = () => {
    setCurrentIndex(0);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(users.length - 1, prevIndex + 1));
  };

  const handleLast = () => {
    setCurrentIndex(users.length - 1);
  };

  return (
    <div>
      <h2>User Form</h2>
      {currentUser && (
        <form>
          <label>ID: {currentUser.idUser}</label>
          <br />
          <label>Name: {currentUser.nom}</label>
          <br />
          <label>Login: {currentUser.login}</label>
          <br />
          <select value={selectedRole} onChange={handleRoleChange}>
            <option value="membre">Membre</option>
            <option value="moderateur">Moderateur</option>
            <option value="admin">Admin</option>
          </select>
          <button type="button" onClick={handleUpdateRole}>
            Update Role
          </button>
          <br />
        </form>
      )}

      <button onClick={handleFirst}>First</button>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleLast}>Last</button>
      <br />
      <button onClick={() => handleDeleteUser(currentUser.idUser)}>
        Delete User
      </button>
    </div>
  );
}

export default UserForm;
