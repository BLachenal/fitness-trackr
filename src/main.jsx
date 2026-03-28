import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./auth/AuthContext";

import { BrowserRouter} from "react-router";
import { RoutineProvider } from "./routines/RoutineContext.jsx";
import { ActivityProvider } from "./activities/ActivityContext.jsx";
createRoot(document.getElementById("root")).render(
  
  <AuthProvider>

    <ActivityProvider>
    <RoutineProvider>
      
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </RoutineProvider>
    </ActivityProvider>
    
  </AuthProvider>,
);
