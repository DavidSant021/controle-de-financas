import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";

export default function RootLayout() {
    return (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )
}