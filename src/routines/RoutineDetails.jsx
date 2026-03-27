import { useParams, useNavigate} from "react-router";
import { deleteRoutine, getRoutines} from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { ToastContainer, toast} from "react-toastify"
import { useRoutine } from "./RoutineContext";
//import sets from /sets;

export default function RoutineDetail(){
    //const [routine, setRoutine] = useState();
    const {routines, syncRoutines} = useRoutine();
    const {token} = useAuth();
    const {id} = useParams();
    const nav = useNavigate();
    
    const routine = routines.find(routine => routine.id == id);


    const handleClick = async () =>{
        try{
            await deleteRoutine(token, routine.id);
            syncRoutines();
            nav("/RoutinePage");
        }catch(error){
            toast.error(error.message);
        }

    }    

    return( //<sets syncActivities ={syncActivities}/>
        <>
            {routine && <>
            <h1>{routine.name}</h1>
            <h2>Goal: {routine.goal}</h2>
            <h4>created by: {routine.creatorName}</h4>
            {token ? (<button onClick={handleClick}>X</button>) : ""}
            <ToastContainer/>
            </>}
        </>
    );
}