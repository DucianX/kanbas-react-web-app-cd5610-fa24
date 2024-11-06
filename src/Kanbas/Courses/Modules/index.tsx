import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons"
import { BsGripVertical } from "react-icons/bs"; 
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import React, { useState } from "react";
export default function Modules() {
  const { cid } = useParams();
    const [modules, setModules] = useState<any[]>(db.modules);
    const [moduleName, setModuleName] = useState("");
    const addModule = () => {
        setModules([ ...modules, { _id: new Date().getTime().toString(),
            name: moduleName, course: cid, lessons: [] } ]);
        setModuleName("");
    };
    const deleteModule = (moduleId: string) => {
        setModules(modules.filter((m) => m._id !== moduleId));
    };


    return (
      <div>
        <div>
  <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule}/><br /><br /><br /><br />

  <ul id="wd-modules" className="list-group rounded-0">
    {modules
        .filter((module: any) => module.course === cid)
        .map((module: any) => (
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

    <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons
        moduleId={module._id}
        deleteModule={deleteModule}/>
      </div>
      {module.lessons && (
      <ul className="wd-lessons list-group rounded-0">
        {module.lessons.map((lesson: any) => (
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
        </li>
            ))}

  </ul>
      )}
</li>
        ))}
  </ul>
          </div>

        </div>

  );}
