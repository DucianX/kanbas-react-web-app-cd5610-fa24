import React, { useEffect, useState } from "react";
import axios from "axios";
import * as client from "./client";


export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

    // axios让我们以编程的方式进行访问，并且能捕捉返回的结果，而不用真的到那个URL里面
    const fetchWelcomeOnClick = async () => {
        // 封装
        const message = await client.fetchWelcomeMessage();
        setWelcomeOnClick(message);
    };
    const fetchWelcomeOnLoad = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    // useEffect仅在第一次访问的时候从服务器自动获取信息，之后再也不执行
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);

    return (
        <div>
            <h3>HTTP Client</h3>
            <hr/>
            <h4>Requesting on Click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button>
            <br/>
            Response from server: <b>{welcomeOnClick}</b>

            <hr/>
            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr/>
        </div>
    );
}

