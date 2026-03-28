
import { useActivity } from "../activities/ActivityContext";
import { useAuth } from "../auth/AuthContext";

export default function SetsForm({routine}){
    const {token} = useAuth();
    const {activities} = useActivity();
    console.log(activities);
    const tryAddSet = async (formData) => {
        const activityId = formData.get("activityId");
        const routineId = routine.id;
        const count = formData.get("count")
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
        return <p>Add some sets to your routine!</p>;
    }else{
        return (
            <>
            <ul>
                {routine.sets.map((set)=>(
                <li key={set.id}><b>{set.name}:</b> x {set.count}
                    <p>{set.description}</p>
                    {token ? (<button>Delete Set</button>) : ""}
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