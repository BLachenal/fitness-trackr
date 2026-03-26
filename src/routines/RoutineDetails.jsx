import { useParams, useNavigate} from "react-router";
import {getOneRoutine, deleteRoutine} from "../api/activities";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";


export default function RoutineDetail(){
    const [routine, setRoutine] = useState();
    const {token} = useAuth();
    const {id} = useParams();
    const nav = useNavigate();
   
    useEffect(()=>{
        const fetchRoutine = async () =>{
            setRoutine(await getOneRoutine(id));
        }

        fetchRoutine();
    }, []);

    const handleClick = async () =>{
        console.log(token, routine.id);
        await deleteRoutine(token, routine.id);
        nav("/RoutinePage");
    }    
    return( 
        <>
            {routine && <>
            <h1>{routine.goal}</h1>
            <h3>{routine.creatorName}</h3>
            <button onClick={handleClick}>X</button>
            </>}
        </>
    );
}