import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';

import Labs from "./Labs";
import Kanbas from "./Kanbas";
import store from "./Kanbas/store";
import {Provider} from "react-redux";

export default function App() {
    return (

        <HashRouter>
            {/*Provider将所有的app都包裹，提供着他们的store信息*/}
            <Provider store={store}>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Kanbas"/>}/>
                        <Route path="/Labs/*" element={<Labs/>}/>
                        <Route path="/Kanbas/*" element={<Kanbas/>}/>
                    </Routes>
                </div>
            </Provider>
        </HashRouter>
    );
}
