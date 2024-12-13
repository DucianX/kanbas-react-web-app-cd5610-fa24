import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons"
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import {useParams} from "react-router";
import * as db from "../../Database";

import * as coursesClient from "../client";
import * as modulesClient from "./client";
import React, {useState, useEffect} from "react";
import {
    setModules, addModule, editModule,
    updateModule, deleteModule
}
    from "./reducer";
import {useSelector, useDispatch}
    from "react-redux";

export default function Modules() {
    const {cid} = useParams();
    const [moduleName, setModuleName] = useState("");

    // 在这里用selector建立连接
    const {modules} = useSelector(
        (state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
    }, []); // 第二个参数给[]，让useEffect只会在组件第一次渲染的时候运行

    // 重点参考对象
    const createModuleForCourse = async () => {
        if (!cid) return; // 如果没有cid就直接返回
        // 从URL的动态路径参数里面解析的courseID，用它修改新module的属性
        const newModule = {name: moduleName, course: cid};
        // 调用client里的axios进行HTTP程序化请求
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        // 刚好用回传的module来进行dispatch更新本地文件
        dispatch(addModule(module));
    };
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    return (
        <div>
            <div>
                {/*顶部四连编辑按钮*/}
                <ModulesControls setModuleName={setModuleName} moduleName={moduleName}
                                 addModule={createModuleForCourse}/>
                <br/><br/><br/><br/>

                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
                        // .filter((module: any) => module.course === cid)
                        .map((module: any) => (
                            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

                                <div className="wd-title p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3"/>
                                    {!module.editing && module.name}
                                    {module.editing && (
                                        <input className="form-control w-50 d-inline-block"
                                               onChange={(e) => dispatch(updateModule({
                                                   ...module,
                                                   name: e.target.value
                                               }))}
                                               onKeyDown={(e) => {
                                                   if (e.key === "Enter") {
                                                       saveModule({...module, editing: false});
                                                   }
                                               }}
                                               defaultValue={module.name}/>
                                    )}

                                    <ModuleControlButtons moduleId={module._id}
                                                          deleteModule={(moduleId) => removeModule(moduleId)}
                                                          editModule={(moduleId) => dispatch(editModule(moduleId))}/>

                                </div>
                                {module.lessons && (
                                    <ul className="wd-lessons list-group rounded-0">
                                        {module.lessons.map((lesson: any) => (
                                            <li className="wd-lesson list-group-item p-3 ps-1">
                                                <BsGripVertical className="me-2 fs-3"/> {lesson.name}
                                                <LessonControlButtons/>
                                            </li>
                                        ))}

                                    </ul>
                                )}
                            </li>
                        ))}
                </ul>
            </div>

        </div>

    );
}
