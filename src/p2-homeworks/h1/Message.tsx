import React from 'react'
import s from './Message.module.css'

type MessageTypeElement = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: MessageTypeElement) {
    return (
        <div className={s.message}>

            <div className={s.containerImg}>
                <img className={s.image} src={props.avatar}/>
            </div>
            <div className={s.containerMsg}>
                <div className={s.containerText}>
                    <div className={s.textTitle}>{props.name}</div>
                    <div className={s.textMsg}>{props.message}</div>
                </div>
                <div className={s.date}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
