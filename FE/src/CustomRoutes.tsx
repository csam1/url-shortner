import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import WrapperRoute from './WrapperRoute';


const CustomRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' Component={App}></Route>
                <Route path='/:id' Component={WrapperRoute}></Route>
            </Routes>
        </Router>
    )
}

export default CustomRoutes;