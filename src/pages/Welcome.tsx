import React, { useMemo } from 'react';
import { Link } from "react-router-dom";
import { getHash } from "../utils/hash";

const Welcome = () => {
    const roomId = useMemo(() => getHash(), [])
    console.log(123)

    return (
        <div>
            <h1>Welcome</h1>
            <Link to={`room/${roomId}`}>New Room</Link>
        </div>
    );
};

export { Welcome };