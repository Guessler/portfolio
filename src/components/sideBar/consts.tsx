import { MapToMarkupDto } from "./types";

import email from "../../assets/email.svg"
import website from "../../assets/website.svg"

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
]