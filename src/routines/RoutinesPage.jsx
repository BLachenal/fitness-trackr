import { useState, useEffect } from "react";
import { getRoutines } from "../api/activities";

import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";

export default function RoutinesPage() {
  const [routines, setRoutines] = useState([]);

  const syncRoutines = async () => {
    const data = await getRoutines();
    setRoutines(data);
  };

  useEffect(() => {
    syncRoutines();
  }, []);

  return (
    <>
      <h1>Activities</h1>
      <RoutineList routines={routines} 
                    syncRoutines={syncRoutines} />
      <RoutineForm syncRoutines={syncRoutines} />
    </>
  );
}