import { useAuth } from "../auth/AuthContext";
// import { deleteActivity } from "../api/activities";
import { Link } from "react-router";

export default function ActivityList({ activities }) {
  const {loggedIn} = useAuth();
  const {token} = useAuth();

  //const tryCreateActivity = async (formData)
/*   const tryDelete = async (activity) => {
        try {
          await deleteActivity(token, activity.id);
          syncActivities();
        } catch (e) {
          console.error(e);
        }
  } */
//onClick={()=>tryDelete} formAction={()=>tryDelete}
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          <Link to ={"/activityDetail/" + activity.id}> {activity.name}</Link>
        </li>
      ))}
    </ul>
  );
}
