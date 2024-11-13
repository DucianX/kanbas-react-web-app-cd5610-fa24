import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {BsPlus} from "react-icons/bs";
import {FaTrash} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";
import FacultyContent from "../../Account/FacultyContent";

export default function ModuleControlButtons({moduleId, deleteModule, editModule}: {
    moduleId: string; deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void
}) {

    return (

        <div className="float-end ">
            <FacultyContent>
                <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3"/>
                <FaTrash className=" me-2 text-danger" onClick={() => deleteModule(moduleId)}/>
                <BsPlus className="fs-2 me-2"/>
            </FacultyContent>
            <IoEllipsisVertical onClick={() => console.log("Edit module")} className="me-2 fs-4"/>
            <GreenCheckmark/>

        </div>
    );
}
