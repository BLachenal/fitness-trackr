import { Link } from "react-router";
import { useActivity } from "./ActivityContext";

export default function ActivityList() {
  const {activities} = useActivity();

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
