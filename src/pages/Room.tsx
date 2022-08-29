import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { serverConfig } from "../constracts/serverConfig";
import { _serverInteractionActions } from "../constracts/actions";

import { Chat } from '../components/Chat';

const socket = io(serverConfig.webSocketServerUrl);

const Room = () => {
    const { roomId } = useParams();

    useEffect(() => {
        socket.emit(_serverInteractionActions.joinToRoom, roomId);
    }, [roomId])

    if (!roomId) return <h1>Room id not found</h1>;

    return (
        <div>
            <Chat socket={socket} />
        </div>
    );
};

export { Room };