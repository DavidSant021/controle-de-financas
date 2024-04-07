import { RouterProvider } from "react-router-dom";
import router from './router'
import ValueContextProvider from "./context/ValueContext";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <ValueContextProvider>
        <RouterProvider router={router} />
    </ValueContextProvider>
  )
}