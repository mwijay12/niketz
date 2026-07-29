import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#tech", label: "Tech Air" },
    { href: "#customizer", label: "Studio" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];


export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: 1000, displayValue: '1k+', label: 'Brands' },
    { value: 500, displayValue: '500+', label: 'Shops in TZ' },
    { value: 250000, displayValue: '250k+', label: 'Happy Customers' },
];

export const products = [
    {
        id: "prod-1",
        imgURL: shoe4,
        name: "Nike Air Jordan-01 Red",
        priceNumber: 125000,
        price: "TSh 125,000",
        rating: 4.8,
        category: "Retro High",
        description: "Premium leather finish with high-bounce air-cushioned sole. Perfect for streetwear & casual flex in Tanzania.",
        sizes: [39, 40, 41, 42, 43, 44, 45],
        colors: ["#EF4444", "#111827", "#FFFFFF"]
    },
    {
        id: "prod-2",
        imgURL: shoe5,
        name: "Nike Air Jordan-10 Black",
        priceNumber: 145000,
        price: "TSh 145,000",
        rating: 4.9,
        category: "Basketball Edition",
        description: "Iconic sleek design crafted for superior grip, heel support, and all-day comfort for active lifestyle.",
        sizes: [40, 41, 42, 43, 44],
        colors: ["#111827", "#DC2626", "#6B7280"]
    },
    {
        id: "prod-3",
        imgURL: shoe6,
        name: "Nike Air Jordan-100 Mesh",
        priceNumber: 95000,
        price: "TSh 95,000",
        rating: 4.7,
        category: "Lightweight Runner",
        description: "Ultra-breathable mesh construction built to keep your feet cool in tropical heat while staying stylish.",
        sizes: [39, 40, 41, 42, 43],
        colors: ["#2563EB", "#111827", "#F3F4F6"]
    },
    {
        id: "prod-4",
        imgURL: shoe7,
        name: "Nike Air Jordan-001 Gold",
        priceNumber: 165000,
        price: "TSh 165,000",
        rating: 5.0,
        category: "Limited Edition",
        description: "Top-tier craftsmanship featuring reinforced heel stability and premium shock-absorption technology.",
        sizes: [40, 41, 42, 43, 44, 45],
        colors: ["#D97706", "#111827", "#FFFFFF"]
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free Worldwide Shipping",
        subtext: "Enjoy fast, tracked & reliable delivery right to your doorstep anywhere."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payments",
        subtext: "Pay easily & safely via Credit Card, PayPal, M-Pesa, or Mobile Money upon delivery."
    },
    {
        imgURL: support,
        label: "24/7 Dedicated Support",
        subtext: "Our customer support team is available around the clock to assist you with any questions."
    },
];

export const reviews = [
    {
        imgURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        customerName: 'Juma Rashidi',
        rating: 4.9,
        feedback: "The shoes are super stylish and sizing is spot on! I received my package on the very same day. The Air Sole quality is top-notch!"
    },
    {
        imgURL: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
        customerName: 'Neema K.',
        rating: 4.8,
        feedback: "Quality is 10/10 and the price is incredibly fair. Very smooth delivery and genuine Nike craftsmanship. Definitely buying again!"
    },
    {
        imgURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        customerName: 'Bakari M.',
        rating: 5.0,
        feedback: "Delivery was extremely fast and reliable. The shoes arrived perfectly packaged in their original Nike box. Exceptional service!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "#products" },
            { name: "Air Max 1", link: "#products" },
            { name: "Air Jordan 1", link: "#products" },
            { name: "Nike Zoom Runner", link: "#products" },
            { name: "Nike Cortez", link: "#products" },
        ],
    },
    {
        title: "Help & Policies",
        links: [
            { name: "About us", key: "about-us" },
            { name: "FAQs", key: "faqs" },
            { name: "How it works", key: "how-it-works" },
            { name: "Privacy policy", key: "privacy-policy" },
            { name: "Payment policy (M-Pesa / Tigo)", key: "payment-policy" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "info@mwijaynike.co.tz", link: "mailto:info@mwijaynike.co.tz" },
            { name: "+255 700 000 000 (Dar es Salaam)", link: "tel:+255700000000" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];


