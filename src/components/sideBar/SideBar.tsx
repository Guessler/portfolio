import "./style.css"
import {Markup} from './Markup'
import Languages from './Languages'
import Socials from './Socials'



import phone from "../../assets/phone.svg"
import address from "../../assets/Address.svg"

import icon from "../../assets/icon.png"


import inst from "../../assets/inst.svg"
import vk from "../../assets/vk.svg"
import telegram from "../../assets/telegram.svg"

import Britain from "../../assets/greatBrittain.svg"
import Russia from "../../assets/Russia.svg"
import { Contacts } from "./components/Contacts"
export const SideBar = () => {
    return (
        <div className="side-bar-content">
            <img src={icon} alt={icon} />
            <h1>Tarasov Leo</h1>
            <h2 className="job-color">Frontend-developer</h2>
            <div className="line"></div>
            <Contacts />
            <Markup Name={<div className="small-margin">
                <p>Phone</p>
                <a className="name-props">+ 7 (000) 000 00-00</a>
            </div>}>
                <img src={phone} alt={phone} />
            </Markup>
            <Markup Name={<div className="small-margin">
                <p>Address</p>
                <a className="name-props">Russian, Moscow</a>
            </div>}>
                <img src={address} alt={address} />
            </Markup>
            <div className="line"></div>
            <p>Socials</p>
            <Socials  Name={<div className="small-margin">
                <p>Instagram</p>
                <a className="name-props">@Root</a>
            </div>}>
                <img src={inst} alt={inst} />
            </Socials>
            <Socials  Name={<div className="small-margin">
                <p>Telegram</p>
                <a className="name-props">@Root</a>
            </div>}>
                <img src={telegram} alt={telegram} />
            </Socials>
            <Socials  Name={<div className="small-margin">
                <p>vk</p>
                <a className="name-props">@Root</a>
            </div>}>
                <img src={vk} alt={vk} />
            </Socials>
            <div className="line"></div>

            <p>Languages</p>
            <Languages Name={<div className="small-margin">
                <p>English</p>
                <a className="name-props">B2</a>
            </div>}>
                <img src={Britain} alt={Britain} />
            </Languages>
            <Languages Name={<div className="small-margin">
                <p>Russian</p>
                <a className="name-props">Professional orking</a>
            </div>}>
                <img src={Russia} alt={Russia} />
            </Languages>

            <button className="theme-btn">
                <div className="circle"></div>
            </button>
        </div>
    )
}