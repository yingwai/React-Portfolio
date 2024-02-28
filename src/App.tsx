import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Home } from "./layout/pages/home/Home";
import { About } from "./layout/pages/about/About";
import { Projects } from "./layout/pages/projects/Projects";
import { Contact } from "./layout/pages/contact/Contact";

const aRouter = createBrowserRouter([
    {
        element: <> <Header /> <Footer/> </>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={aRouter} />
        </div>
    );
}

export default App;