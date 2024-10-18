import {Link, useParams} from "react-router-dom";
import {useLocation} from "react-router";
export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const { pathname } = useLocation();
    const { cid } = useParams();
    return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">


        {links.map((link) => (
            <Link
                key={link}
                to={`/Kanbas/Courses/${cid}/${link}`}
                className={`list-group-item  border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}
            >
                {link}
            </Link>
        ))}


    </div>
);}
