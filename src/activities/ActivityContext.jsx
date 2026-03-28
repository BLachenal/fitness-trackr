import { createContext, useContext, useEffect, useState } from "react";
import { getActivities } from "../api/activities";



const ActivityContext = createContext();

export function ActivityProvider({children}){
    const [activities, setActivities] = useState([]);

    const syncActivities = async () =>{
        const data = await getActivities();
        setActivities(data);
    };

    useEffect(() => {
        syncActivities();
    }, []); 

    const value = {activities, syncActivities};
    return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>;
}

export function useActivity(){
    const context = useContext(ActivityContext);
    if(!context) throw Error("useActivity mst be used within AuthProvider");
    return context;
}