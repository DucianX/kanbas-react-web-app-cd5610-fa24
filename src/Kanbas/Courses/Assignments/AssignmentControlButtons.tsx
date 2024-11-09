import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import ProtectedContent from "../../Account/ProtectedContent";
export default function AssignmentControlButtons() {
  return (
    <div className="flex-end">
        <ProtectedContent>
      <BsPlus className="fs-2"/>
      <IoEllipsisVertical className="fs-4" />
        </ProtectedContent>
    </div>
);}
