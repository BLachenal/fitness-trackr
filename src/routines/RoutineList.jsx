import { Link } from "react-router";

export default function RoutineList({ routines }) {


  return (
    <ul>
      {routines.map((routine) => (
        <li key={routine.id}>
          <Link to ={"/RoutineDetail/" + routine.id}> {routine.name}</Link>
        </li>
      ))}
    </ul>
  );
}
