import React, { useState, useEffect } from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from "./SidebarOption";
import CommentIcon from '@material-ui/icons/Comment';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{ user }, dispatch] = useStateValue()
    const [channels, setChannels] = useState([])
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => setChannels(snapshot.docs.map(doc => ({
            id: doc.id,
            name: doc.data().name
        }))))
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={CommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Brower" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="More Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels" />
            {channels.map((channel) => <SidebarOption id={channel.id} title={channel.name} />)}


        </div >
    )
}

export default Sidebar
