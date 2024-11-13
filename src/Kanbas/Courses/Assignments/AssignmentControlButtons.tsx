import {IoEllipsisVertical} from "react-icons/io5";
import {BsPlus} from "react-icons/bs";
import FacultyContent from "../../Account/FacultyContent";

export default function AssignmentControlButtons() {
    return (
        <div className="flex-end">
            <FacultyContent>
                <BsPlus className="fs-2"/>
                <IoEllipsisVertical className="fs-4"/>
            </FacultyContent>
        </div>
    );
}
