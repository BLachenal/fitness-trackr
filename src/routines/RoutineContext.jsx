
import { createContext, useContext, useState, useEffect } from "react";
import { getRoutines } from "../api/activities";


const RoutineContext = createContext();

export function RoutineProvider({ children }) {
  const [routines, setRoutines] = useState([]);
  
  const syncRoutines = async () => {
    const data = await getRoutines();
    setRoutines(data);
    }; 

    useEffect(() => {
        syncRoutines();
    }, []);

  const value = { routines, syncRoutines };
  return <RoutineContext.Provider value={value}>{children}</RoutineContext.Provider>;
}

export function useRoutine() {
  const context = useContext(RoutineContext);
  if (!context) throw Error("useRoutine must be used within AuthProvider");
  return context;
}
