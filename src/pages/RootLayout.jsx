import { Outlet } from "react-router-dom";
import AddTransaction from "../components/AddTransaction";
import ContentCards from "../components/ContentCards";
import { FaDollarSign } from "react-icons/fa6";

export default function RootLayout() {
    return (
        <>
          <header className="header">
            <h1>My Finances<FaDollarSign style={{color: '#49AA26'}} /> </h1>
          </header>
          <main className="main">
            <ContentCards />
            <AddTransaction />
            <Outlet />
          </main>
          <footer className="footer">
            <p>My Finances<FaDollarSign style={{color: '#49AA26'}} /> </p>
          </footer>
        </>
      )
}