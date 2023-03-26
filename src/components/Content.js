import { Routes, Route } from 'react-router-dom';
import About from './About/About';
import Header from "./Header/Header";
import Home from './Home/Home';


const Content = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/portfolio" element={<TodoList />} />
                <Route path="/contact" element={<UserList />} /> */}
            </Routes>

        </>
    )
}

export default Content;