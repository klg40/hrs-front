import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { serverConfig } from "../constracts/serverConfig";
import { _serverInteractionActions } from "../constracts/actions";

import { Chat } from '../components/Chat';
import { Video } from "../components/Video";

const socket = io(serverConfig.webSocketServerUrl);

let isMount = false;

const Room = () => {
    const { roomId } = useParams();

    useEffect(() => {
        if (!isMount) {
            socket.emit(_serverInteractionActions.signIn, { roomId });
            isMount = true;
        }

    }, [])

    if (!roomId) return <h1>Room id not found</h1>;

    return (
        <div>
            <Video />
            <Chat socket={socket} />
        </div>
    );
};

export { Room };