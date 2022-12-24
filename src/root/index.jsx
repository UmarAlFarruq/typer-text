import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SiginInPage from "../pages/siginIn";
import { path } from './../utils/path';
import NotFound from './../components/notFound/index';


const Root = () => {
    return (
        <div className="center">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to={'home'} />} />
                    <Route path="/siginin" element={<SiginInPage />} />
                    <Route path="/" element={<Navbar />}  >
                        {path.map(({ path, id, component, hidden }) => {
                            return !hidden && <Route key={id} path={path} element={component} />
                        })}
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default Root;