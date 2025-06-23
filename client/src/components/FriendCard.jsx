import React from "react";

export default function FriendCard({ user }) {
  return (
    <div>
      <p>{user.firstName} {user.lastName}</p>
      <p>{user.occupation}</p>
    </div>
  );
}
