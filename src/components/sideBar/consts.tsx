import { MapToMarkupDto } from "./types";

import email from "../../assets/email.svg"
import website from "../../assets/website.svg"
import phone from "../../assets/phone.svg"
import address from "../../assets/Address.svg"

import instagram from "../../assets/Instagram.svg"
import telegram from "../../assets/telegram.svg"
import vk from "../../assets/vk.svg"

import Russia from "../../assets/Russia.svg"
import greatBritain from "../../assets/greatBritain.svg"

import ShariXLogo from "../../assets/big-sharix 1.svg" 
export const contacts: MapToMarkupDto[] = [
    {
        image: email,
        name: "Email",
        desc: "@gmail.com"
    },
    {
        image: website,
        name: "Website",
        desc: "https://sports.sharix.org"
    },
    {
        image: phone,
        name: "Phone",
        desc: "+ 7 (000) 000 00-00"
    },
    {
        image: address,
        name: "Address",
        desc: "Russian, Moscow"
    },
]

export const socials: MapToMarkupDto[] = [
    {
        image: instagram,
        name: "instagram",
        desc: "@Root"
    },
    {
        image: telegram,
        name: "telegram",
        desc: "@Root"
    },
    {
        image: vk,
        name: "vk",
        desc: "@Root"
    },
]
export const languages: MapToMarkupDto[] = [
    {
        image: greatBritain,
        name: "English",
        desc: "B2"
    },
    {
        image: Russia,
        name: "Russian",
        desc: "Professional working"
    },
]
export const experience: MapToMarkupDto = {
        image: ShariXLogo,
        name: "Frontend developer",
        desc: "ShariX"
}

export const anotherInformation: MapToMarkupDto[] = [
    {
        image: "sadasd",
        name: "Dec 22, still working",
        desc: "Moscow, Russia"
    }
]