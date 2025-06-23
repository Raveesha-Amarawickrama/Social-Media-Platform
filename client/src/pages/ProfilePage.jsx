import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import FriendCard from "../components/FriendCard";

export default function ProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    API.get(`/users/${id}`).then(res => setUser(res.data));
    API.get(`/users/${id}/friends`).then(res => setFriends(res.data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.firstName} {user.lastName}</h2>
      <h3>Friends</h3>
      {friends.map(friend => <FriendCard key={friend._id} user={friend} />)}
    </div>
  );
}
