import {Link, useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import {useLocation} from "react-router";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser != null ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();

  return (

    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 w-50">

        {links.map((link) => (

            <Link
                key={link}
                to={`/Kanbas/Account/${link}`}
                className={`list-group-item   border-0 ${pathname.includes(link) ? " text-dark active" : "text-danger"}`}
            >
                {link}
            </Link>
        ))}

      {/*  /!* Signin (Active) *!/*/}
      {/*<div className="list-group-item active text-dark border-0">*/}
      {/*  <Link to={`/Kanbas/Account/Signin`} className="text-dark text-decoration-none">*/}
      {/*    Signin*/}
      {/*  </Link>*/}
      {/*</div>*/}

      {/*/!* Signup *!/*/}
      {/*<div className="list-group-item text-danger border-0">*/}
      {/*  <Link to={`/Kanbas/Account/Signup`} className="text-danger text-decoration-none">*/}
      {/*    Signup*/}
      {/*  </Link>*/}
      {/*</div>*/}

      {/*/!* Profile *!/*/}
      {/*<div className="list-group-item text-danger border-0">*/}
      {/*  <Link to={`/Kanbas/Account/Profile`} className="text-danger text-decoration-none w-90">*/}
      {/*    Profile*/}
      {/*  </Link>*/}
      {/*</div>*/}
      </div>

  );
}
