import axios from "axios";
import {USERS_API} from "../Account/client";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// 根据URL里面只有course可以判断这里只和Courses相关。所以在courses的client.ts中安装是合理的
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
};
export const deleteCourse = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
};
export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
};
export const findModulesForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/modules`,
        module
    );
    return response.data;
};
export const createEnrollment = async (courseId: string, userId: string) => {
    const { data } = await axios.post(`${COURSES_API}/${courseId}/createEnrollment`, {userId});
    return data;
}

export const deleteEnrollment = async (courseId: string, userId: string) => {
    const { data } = await axios.post(`${COURSES_API}/${courseId}/deleteEnrollment`, {userId});
    return data;
}

// 需要在每一次访问dashboard的时候从server拿回最新数据，放在reducer里面，保证他们的同步
export const getAllEnrollment = async () => {
    const { data } = await axios.get(`${COURSES_API}/getEnrollments`);
    return data;
}

export const getEnrolledCourses = async () => {
    const { data } = await axios.get(`${COURSES_API}/getEnrolledCourses`);
    return data;
}
