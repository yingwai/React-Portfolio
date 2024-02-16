import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { About } from "./layout/sections/about/About";
import { Contact } from "./layout/sections/contact/Contact";
import { Main } from "./layout/sections/main/Main";
import { Projects } from "./layout/sections/projects/Projects";
import { Technologies } from "./layout/sections/technologies/Technologies";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About />
            <Technologies />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;