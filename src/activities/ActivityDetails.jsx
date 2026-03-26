import { useParams, useNavigate} from "react-router";
import {getAnActivity, deleteActivity} from "../api/activities";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";


export default function ActivityDetails(){
    //{loggedIn ? (<button onClick={()=>tryDelete(activity)}>Delete</button>) : ""}
    const [activity, setActivity] = useState();
    const {token} = useAuth();
    const {id} = useParams();
    const nav = useNavigate();
    useEffect(()=>{
        const fetchActivity = async () =>{
            setActivity(await getAnActivity(id));
        }
        fetchActivity();
    }, []);

    const handleClick = async () =>{
        await deleteActivity(token, activity.id);
        nav("/");
    }    
    return( 
        <>
            {activity && <>
            <h1>{activity.name}</h1>
            <h3>{activity.description}</h3>
            <button onClick={handleClick}>X</button>
            </>}
        </>
    );
}