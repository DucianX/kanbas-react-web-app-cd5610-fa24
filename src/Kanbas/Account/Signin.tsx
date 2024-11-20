import {useState} from "react";
import * as client from "./client";

import {Link, useNavigate} from "react-router-dom";
import {setCurrentUser} from "./reducer";
import {useDispatch} from "react-redux";
// import * as db from "../Database"; 放弃死的Database，而是通过client来向真的服务器发送请求
import FacultyContent from "./FacultyContent";

export default function Signin() {

    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        const user = await client.signin(credentials);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
    };


    return (

        <div id="wd-signin-screen">
            <h3><FacultyContent>Sign in</FacultyContent></h3>
            Yitian Xu's Labs
            Section 03
            https://github.com/DucianX/kanbas-react-web-app-cd5610-fa24
            <input defaultValue={credentials.username}
                   onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                   id="wd-username" placeholder="username" className="form-control mb-2"/>
            <input defaultValue={credentials.password}
                   onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                   id="wd-password" placeholder="password" className="form-control mb-2" type="password"/>
            <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100"> Sign in</button>
            <br/>
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
                Sign up
            </Link>
        </div>
    );
}
