import { useParams, useNavigate} from "react-router";
import {getAnActivity, deleteActivity} from "../api/activities";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { toast, ToastContainer } from "react-toastify";


export default function ActivityDetails(){
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
        try{
            await deleteActivity(token, activity.id);
            nav("/");
        }catch(e){
            toast.error(e.message);
        }
    }    
    return( 
        <>
            {activity && <>
            <h1>{activity.name}</h1>
            <h3>{activity.description}</h3>
            {token ? (
            <button onClick={handleClick}>X</button>) : ""}
            <ToastContainer/>
            </>}
        </>
    );
}