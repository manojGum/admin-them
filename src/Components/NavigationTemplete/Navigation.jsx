import Nav from "../NaviconTemplete/Nav"
import "./Navigation.css"
import {AiOutlineDashboard,AiOutlineLogin, AiFillFileAdd} from 'react-icons/ai'
import {SiTheregister} from 'react-icons/si'
import {MdReadMore} from 'react-icons/md'
import {FiChevronsLeft} from 'react-icons/fi'
import {FaAffiliatetheme} from 'react-icons/fa'
import { useContext, useState } from "react"
import { ThemeContext } from "../../ThemeContext"
const Navigation = () => {
  const [nav, setnav]=useState(false)
  const {DarkTheme, setDarkTheme}= useContext(ThemeContext)
  function changeTheme(){
    setDarkTheme(!DarkTheme)
  }
  return (
    <div className={`navigation ${nav && "active"} ${DarkTheme && "Dark"}`}>
      <div className={`menu ${nav && "active"}`} onClick={()=>{
        setnav((prevState)=> !prevState)
      }}>
        <FiChevronsLeft className="menu-icon" />
      </div>
        <header>
            <div className="profile">
                <img src="https://media.istockphoto.com/id/1460539796/photo/dasha-avtar-images-wodden-carvings-of-dashaavatara-of-lord-vishnu.jpg?s=1024x1024&w=is&k=20&c=21pt0n5VGzqoi00_alUVam1tpc3jrQxzC7HLY-ih5NY=" alt="user image" className="profile-img" />
            </div>
            <span>create-amition</span>
        </header>
        <Nav title="Dashboard" Icon={AiOutlineDashboard} />
        <Nav title="Login" Icon={AiOutlineLogin} />
        <Nav title="Register" Icon={SiTheregister} />
        <div className="divider"></div>
        <Nav title="Add data" Icon={AiFillFileAdd} />
        <Nav title={`${DarkTheme ? "Switch to Light Theme": "Switch to Dark Theme"}`} Icon={FaAffiliatetheme} onClick={changeTheme} />
        <Nav title="more Details" Icon={MdReadMore} />
 
    </div>
  )
}

export default Navigation