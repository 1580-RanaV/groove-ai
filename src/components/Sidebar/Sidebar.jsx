import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { context } from '../../context/context'
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {

    const [extended,setExtended] = useState(false);
    const {newChat} = useContext(context);

  return (
    <div className='sidebar'>
        <div className="top">
        <img onClick={()=>setExtended(previous=>!previous)} className='menu' src = {assets.menu_icon}></img>
        <div onClick={()=>newChat()} className="new-chat">
        <FaPlus />
            {extended ? <p>NEW CHAT!</p> : null}
        </div>
        
        {extended 
        ? 
        <div className="recent">
        <p className="recent-title">RECENT</p>
        <div className="recent-entry">
            <img src = {assets.message_icon}></img>
            <p>What is react?</p>
        </div>
    </div>
        :
        null
    }
        
        
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended ? <p>Help</p> : null }
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended ? <p>Activity</p> : null }
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended ? <p>Settings</p> : null }
            </div>
        </div>      
    </div>
  )
}

export default Sidebar