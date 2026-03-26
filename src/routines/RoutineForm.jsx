import { useState } from "react";
import { createRoutine } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

/** Form for a user to create a new activity with a name and description. */
export default function RoutineForm({ syncRoutines }) {
  const { token } = useAuth();

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
      <h2>Add a new activity</h2>
      <form action={tryCreateRoutine}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Description
          <input type="text" name="goal" />
        </label>
        <button>Add activity</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
}
