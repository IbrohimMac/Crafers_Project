import React from "react";

const Profile = ({ userInfo }) => {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>Username: {userInfo.username}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  );
};

export default Profile;
