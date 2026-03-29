// Global Site Data
// Current Year
const currentYear = new Date().getFullYear();
// Site Data
export const siteData = {
    website: "nTiling",
    author: "Nikola Steficar",
    developer: "Filip Steficar",
    developerURL: "https://filipsteficar.com",
    lang: "en-CA",
    ogLang: "en_CA",
    langSchema: "en",
    copyright: `nTiling - ${currentYear} | All Rights Reserved`,
    url: "https://ntiling.ca",
    cmsURL: "#",
    graphQL: "#"
}
// Define the MenuItem Interface
interface MenuItem {
    label: string
    href: string
    isExternal?: boolean
}
// Main Menu
export const mainMenu: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Our Work",
        href: "/#our-work"
    },
    {
        label: "Services",
        href: "/#services"
    },
    {
        label: "Contact",
        href: "/#contact"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@ntiling.ca"
}