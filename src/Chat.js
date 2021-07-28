import React, { useState, useEffect } from 'react'
import "./Chat.css"
import { useParams } from "react-router-dom"
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/Info';
import db from './firebase'
import Message from './Message'
import ChatInput from "./ChatInput"
function Chat() {
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])
    const { roomId } = useParams();
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').
                doc(roomId).onSnapshot(snapshot =>
                    (setRoomDetails(snapshot.data())))
        }
        db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc").
            onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))
    }, [roomId])
    console.log(roomMessages)
    return (
        <div className="chat">

            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <storng>#{roomDetails?.name}</storng>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p><InfoOutlinedIcon />Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map(({ message, timestamp, user, userImage }) =>
                (<Message
                    message={message}
                    user={user}
                    userImage={userImage}
                    timestamp={timestamp}


                />))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.id} />

        </div>
    )
}

export default Chat
