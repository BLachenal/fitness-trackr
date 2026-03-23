import { useAuth } from "../auth/AuthContext";
import { deleteActivity } from "../api/activities";

export default function ActivityList({ activities }) {
  const {loggedIn} = useAuth();
  const {token} = useAuth();

  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}{loggedIn ? (<button onClick={()=>deleteActivity(token, activity.id)}>Delete</button>) : ""}</li>
      ))}
    </ul>
  );
}
