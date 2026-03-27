import { useState } from "react";
import { createRoutine, getRoutines } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { useRoutine } from "./RoutineContext";


/** Form for a user to create a new activity with a name and description. */
export default function RoutineForm() {
  const { token } = useAuth();
  const {syncRoutines} = useRoutine();
  const [error, setError] = useState(null);

  const tryCreateRoutine = async (formData) => {
    setError(null);

    const name = formData.get("name");
    const goal = formData.get("goal");

    try {
      await createRoutine(token, { name, goal });
      syncRoutines();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h2>Add a new Routine</h2>
      <form action={tryCreateRoutine}>
        <label>
          Name
          <input type="text" required name="name" />
        </label>
        <label>
          Goal
          <input type="text" required name="goal" />
        </label>
        <button>Add Routine</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
}
