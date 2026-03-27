import { Link } from "react-router";
import { useRoutine } from "./RoutineContext";

export default function RoutineList({syncRoutines}) {
 const {routines} = useRoutine();


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
