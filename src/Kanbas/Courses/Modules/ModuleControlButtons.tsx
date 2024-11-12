import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {BsPlus} from "react-icons/bs";
import {FaTrash} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";
import ProtectedContent from "../../Account/ProtectedContent";

export default function ModuleControlButtons({moduleId, deleteModule, editModule}: {
    moduleId: string; deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void
}) {

    return (

        <div className="float-end">
            <ProtectedContent>
                <IoEllipsisVertical onClick={() => console.log("Edit module")} className="fs-4"/>
                <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3"/>
                <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
                <BsPlus className="fs-2"/> </ProtectedContent>
            <GreenCheckmark/>

            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}
