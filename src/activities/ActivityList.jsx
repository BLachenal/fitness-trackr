import { useAuth } from "../auth/AuthContext";
import { useState } from "react";

export default function ActivityList({ activities }) {
  const {loggedIn} = useState();

  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}{loggedIn ? (<button>Delete</button>) : ""}</li>
      ))}
    </ul>
  );
}
