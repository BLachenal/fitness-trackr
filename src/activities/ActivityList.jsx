import { useAuth } from "../auth/AuthContext";
import { deleteActivity } from "../api/activities";

export default function ActivityList({ activities, syncActivities }) {
  const {loggedIn} = useAuth();
  const {token} = useAuth();

  //const tryCreateActivity = async (formData)
  const tryDelete = async (activity) => {
        try {
          await deleteActivity(token, activity.id);
          syncActivities();
        } catch (e) {
          console.error(e);
        }
  }
//onClick={()=>tryDelete} formAction={()=>tryDelete}
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}{
          loggedIn ? (<button onClick={()=>tryDelete(activity)}>Delete</button>) : ""}
          </li>
      ))}
    </ul>
  );
}
