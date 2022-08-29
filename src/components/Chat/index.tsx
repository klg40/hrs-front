import React,{ ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Textarea, Button } from '@mantine/core';
import { TextContainer } from "./TextContainer";
import { _chatActions } from "../../constracts/actions";

import style from './style.module.css';

let isMount = false;

const Chat = ({ socket }: { socket: Record<string, any> }) => {
    const [currentMessage, setCurrentMessage] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    const sendMessage = () => {
        if (currentMessage) {
            socket.emit(_chatActions.sendMessage, currentMessage);
            setCurrentMessage('');
        }
    };

    const handleInputValueChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setCurrentMessage(text);
    }, []);

    useEffect(() => {
        if (!isMount) {
            socket.on(_chatActions.getAllMessages, setMessages);
            socket.on(_chatActions.updateMessages, (message: any) => {
                console.log('update message')
                setMessages(prevValue => [...prevValue, message]);
            })
            isMount = true;
        }
    }, []);

    return (
        <div className={style.chat}>
            <div className={style.messageBlock}>
                { messages.map(({ text }: any) => (
                    <TextContainer key={text}>{ text }</TextContainer>
                )) }
            </div>
            <div className={style.inputBlock}>
                <Textarea
                    placeholder="Your message"
                    radius="xs"
                    autosize
                    minRows={2}
                    value={currentMessage}
                    onChange={handleInputValueChange}
                />
                <Button
                    radius="xs"
                    onClick={sendMessage}
                    sx={{ outline: 'none' }}
                >Send message</Button>
            </div>
        </div>
    );
}

export { Chat };