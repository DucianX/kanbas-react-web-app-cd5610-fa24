import { Link } from "react-router-dom";
export default function Signin() {
    return (
        
        <div id="wd-signin-screen">
        <h3>Sign in</h3>
        Yitian Xu's Labs
        Section 03
        https://github.com/DucianX/kanbas-react-web-app-cd5610-fa24
        <input id="wd-username" placeholder="username" className="form-control mb-2"/>
        <input id="wd-password" placeholder="password" className="form-control mb-2" type="password" /> 
        <Link id="wd-signin-btn" to="/Kanbas/Dashboard" className="btn btn-primary w-100">
            Sign in
        </Link>
        <br />
        <Link id="wd-signup-link" to="/Kanbas/Account/Signup" >
            Sign up
        </Link>
    </div>
    );
}