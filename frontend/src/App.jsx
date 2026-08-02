import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import { Toaster } from "@/components/ui/sonner";

function App() {

    return (

        <>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>

            <Toaster
                richColors
                position="top-right"
            />
        </>
    );

}

export default App;