import { getActivities } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

/**
 * function for adding sets to api{
 *      blah blah
 * }
 * 
 * function for deleting sets to api{
 *      blah blah
 * }
 * 
 * export default setsForm{
 * return (
 *      <form for sets and blah blah> 
 * )
 * }
 * 
 * 
 */
export default function SetsForm({routine}){
    const {token} = useAuth();
    

    const tryAddSet = async (formData) => {
        const activityId = "activity.id" //formData.get(activity.id);
        const routineId = routine.id;
        const count = formData.get("count")
    }

    // routine.sets.name, description, count (activityId, routineId, id)
    const addSet = () =>{
        return (
            <>
            <h2>Add a Set</h2>
            <form action={tryAddSet}>
                <select>
                    <option value="activity.id">Activity.name</option>
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