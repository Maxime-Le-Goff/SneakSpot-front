import { truckFast, shieldTick, support, facebook, twitter, instagram } from "../assets/icons"
import { customer1, customer2 } from '../assets/images'

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Lt Court", link: "/" },
            { name: "Samba", link: "/" },
            { name: "1906 Nike", link: "/" },
            { name: "Air Jordan", link: "/" },
            { name: "Morphic", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@sneakspot.com", link: "mailto:customer@sneakspot.com" },
            { name: "+92574862454", link: "tel:+92574862454" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const filters = [
    {
        title: 'brands',
        
    },
    {
        title: 'types',
        
    },
    {
        title: 'prices',
        
    },
];

export const prices = [
    {   
        id:0,
        firstDigit: 0,
        secondDigit: 25,
    },
    {   
        id:1,
        firstDigit: 26,
        secondDigit: 50,
    },
    {   
        id:2,
        firstDigit: 51,
        secondDigit: 100,
    },
    {   
        id:3,
        firstDigit: 101,
        secondDigit: 100000,
    },
]