import { Outlet } from "react-router-dom";
import AddTransaction from "../components/AddTransaction";
import ContentCards from "../components/ContentCards";

export default function RootLayout() {
    return (
        <>
          <header className="header">
            <h1>Controle de Finanças</h1>
          </header>
          <main className="main">
            <ContentCards />
            <AddTransaction />
            <Outlet />
          </main>
        </>
      )
}