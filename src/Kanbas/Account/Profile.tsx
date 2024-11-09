import {Link, useNavigate} from "react-router-dom";
import * as db from "../Database";
import {setCurrentUser} from "./reducer";
import { useDispatch } from "react-redux";

export default function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signout = () => {
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Dashboard/Signin");
    };
return (
<div id="wd-profile-screen">
<h3>Profile</h3>
<input id="wd-username" value="alice" placeholder="username"className="form-control mb-2" />
<input id="wd-password" value="123" placeholder="password"className="form-control mb-2"
type="password" />
<input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2"/>
<input id="wd-lastname" value="Wonderland" placeholder="Last Name"className="form-control mb-2" />
<input id="wd-dob" value="2000-01-01" type="date" className="form-control mb-2"/>
<input id="wd-email" value="alice@wonderland" type="email"className="form-control mb-2" />
<select id="wd-role" className="form-control mb-2">
<option value="USER" >User</option>
<option value="ADMIN">Admin</option>
<option value="FACULTY">Faculty</option>
<option value="STUDENT">Student</option>
</select>
<Link onClick = {signout} to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign out</Link>
</div>
);}
