import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import InfoArea from "./pages/InfoArea";
import ShowTransaction from "./pages/ShowTransaction";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <InfoArea />
        }, 
        {
            path: "transaction/:id",
            element: <ShowTransaction />
        }]
    }
])

export default router