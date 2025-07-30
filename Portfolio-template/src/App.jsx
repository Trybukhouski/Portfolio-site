import "./styles/main.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
// import ProjectsPage from "./pages/projectspage/ProjectsPage";
import ContactsPage from "./pages/contactspage/ContactsPAge";
// import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <>
      <NavBar />
      <ContactsPage />
      <Footer />
    </>
  );
}

export default App;
