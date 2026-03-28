
import { useActivity } from "../activities/ActivityContext";
import { addSets, deleteSet } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { useRoutine } from "./RoutineContext";

export default function SetsForm({routine}){
    const {token} = useAuth();
    const {activities} = useActivity();
    const {syncRoutines} = useRoutine();
    
    const tryAddSet = async (formData) => {
        const activityId = formData.get("activityId");
        const routineId = routine.id;
        const count = formData.get("count");
        try {
            await addSets(token, {activityId, routineId, count});
            syncRoutines();
        }catch(e){
            console.error(e.message);
        }
    }
    const tryDeleteSet = async (id) => {
        try{
            console.log(id)
            await deleteSet(token, id)
            syncRoutines();
        }catch(e){
            console.error(e.message);
        }
    }

    // routine.sets.name, description, count (activityId, routineId, id)
    const addSet = () =>{
        return (
            <>
            <h2>Add a Set</h2>
            <form action={tryAddSet}>
                <select name="activityId">
                    {activities.map((activity) => (
                        <option key={activity.id} value={activity.id}>
                        {activity.name}</option>))}
                </select>
                <label>
                Count
                <input type="number" required name="count" />
                </label>
                <button>Add Set</button>
            </form>
            </>
        );
    }
  
    const emptySets = () =>{      
     if(routine.sets.length === 0){
        return (
        <>
            <p>Add some sets to your routine!</p>
            {addSet()}
        </>);
    }else{
        return (
            <>
            <ul>
                {routine.sets.map((set)=>(
                <li key={set.id}><b>{set.name}:</b> x {set.count}
                    <p>{set.description}</p>
                    {token ? (<button onClick={()=>tryDeleteSet(set.id)}>Delete Set</button>) : ""}
                </li>
                ))}
            </ul>
            <div>
                {addSet()}
            </div>       
         </>
        );
        }
    }
    return (
        <>
            <h3>Sets:</h3>
            <div>{emptySets()}</div>
        </>
    );
}