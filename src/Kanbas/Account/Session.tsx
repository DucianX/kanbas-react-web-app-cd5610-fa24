import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
// 我们想要在程序的任何地方刷新之后还能从服务器获取到记忆的当前用户的信息
export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
    const fetchProfile = async () => {
        try {
            // 尝试从服务器获取profile，然后copy给本地的reducer，让其余的screen都知道
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser));
        } catch (err: any) {
            console.error(err);
        }
        setPending(false);
    };
    // 在首次加载时从服务器获取到记录的当前用户信息
    useEffect(() => {
        fetchProfile();
    }, []);
    if (!pending) {
        return children;
    }
}

