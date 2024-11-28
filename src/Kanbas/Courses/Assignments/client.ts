import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${ASSIGNMENTS_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${ASSIGNMENTS_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}/assignments`);
    return response.data;
};

// 更新一个assignment
export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
}
