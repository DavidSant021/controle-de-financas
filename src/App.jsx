import { RouterProvider } from "react-router-dom";
import router from './router'
import ValueContextProvider from "./context/ValueContext";

export default function App() {
  return (
    <ValueContextProvider>
        <RouterProvider router={router} />
    </ValueContextProvider>
  )
}