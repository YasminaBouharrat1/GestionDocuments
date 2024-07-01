import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPassword } from "../slices/loginSlice";
import { useNavigate } from "react-router-dom";

function InitialPass() {
  const [selectedUser, setSelectedUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate=useNavigate()

  // Import the 'users' state from the Redux store
  const users = useSelector((store) => store.login.users);
  const dispatch = useDispatch();

  const handleUserSelect = (event) => {
    setSelectedUser(event.target.value);
    // You can add logic here to display the password of the selected user
  };

  const handleUpdatePassword = () => {
    // Add logic to validate and update the password here
    if (newPassword === confirmPassword) {
      const selectedUserId = users.find((user) => user.login === selectedUser)?.idUser;
      if (selectedUserId) {
        dispatch(updateUserPassword(selectedUserId, newPassword));
        navigate("/admin")

      } else {
        // Handle case where selected user is not found
        console.log("User not found");
      }
    } else {
      // Handle case where passwords do not match
      console.log("Passwords do not match");
    }
  };

  return (
    <div>
      <h2>Password Management</h2>
      <label>Select a user:</label>
      <select value={selectedUser} onChange={handleUserSelect}>
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.idUser} value={user.login}>
            {user.login}
          </option>
        ))}
      </select>
      {selectedUser && (
        <>
          <p>Login: {selectedUser}</p>
          {/* Add logic here to display the password of the selected user */}
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button onClick={handleUpdatePassword}>Update Password</button>
        </>
      )}
    </div>
  );
}

export default InitialPass;
