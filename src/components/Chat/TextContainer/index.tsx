import React from 'react';
import style from './style.module.css';

const TextContainer = ({ children }: any) => {
    return (
        <div className={style.textContainer}>
            { children }
        </div>
    )
};

export { TextContainer };