import { useSelector } from "react-redux";
export default function StudentContent({ children }: { children: any }) {
    // 从accountReducer里面解构出currentUser
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser && currentUser.role == "STUDENT") {
        return children;
    } else {
        return ;
    }}
