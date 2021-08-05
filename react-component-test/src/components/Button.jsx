import { useState } from "react";

export default function Button() {
    const [message, setMessage] = useState('버튼이 눌리지 않았다.');
    return (
        <div>
            <button onClick={clcik}>button</button>
            <p>{message}</p>
        </div>
    );

    function clcik() {
        setMessage('버튼이 방금 눌렸다')
        setTimeout(() => {
            setMessage('버튼이 눌리지 않았다.')
        }, 5000)
    }
}
