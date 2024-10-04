import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (

    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 w-50">
      {/* Signin (Active) */}
      <div className="list-group-item active text-dark border-0">
        <Link to={`/Kanbas/Account/Signin`} className="text-dark text-decoration-none"> 
          Signin 
        </Link>
      </div>
      
      {/* Signup */}
      <div className="list-group-item text-danger border-0">
        <Link to={`/Kanbas/Account/Signup`} className="text-danger text-decoration-none"> 
          Signup 
        </Link>
      </div>
      
      {/* Profile */}
      <div className="list-group-item text-danger border-0">
        <Link to={`/Kanbas/Account/Profile`} className="text-danger text-decoration-none w-90"> 
          Profile 
        </Link>
      </div>
      </div>

  );
}
