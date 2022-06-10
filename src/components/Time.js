import React from "react";
import { useState } from "react";

export default function Time() {
    let time = new Date().toLocaleTimeString();
    const [cTime, setCtime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(updateTime, 1000);

    return <>
            <div className="timewatch nopadding"><h4>🕥 {cTime}</h4></div>
    </>
}