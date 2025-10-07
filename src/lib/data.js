

const data = {
    headerMenus:[
        {
            name:"All",
            href:"/search?tag=all",
            id:0
        },
        {
            name:"Todays Deals",
            href:"/search?tag=todays-deals",
            id:1
        },
        {
            name:"New Arrivals",
            href:"/search?tag=new-arrivals",
            id:2
        },
        {
            name:"Best Sellers",
            href:"/search?tag=best-sellers",
            id:3
        },
        {
            name:"Feature Products",
            href:"/search?tag=feature-products",
            id:4
        },
        {
            name:"Browsing History",
            href:"/#browsing-history",
            id:5
        },
        {
            name:"Customer Service",
            href:"/page/customer-service",
            id:6
        },
        {
            name:"About Us",
            href:"/page/about-us",
            id:7
        },
        {
            name:"Contact Us",
            href:"/page/contact-us",
            id:8
        },
        {
            name:"Help",
            href:"/page/help",
            id:9
        }
    ],
    carousels: [
    {
        id: 1,
        title: 'Most Popular Shoes For Sale',
        buttonCaption: 'Shop Now',
        image: '/images/banner3.jpg',
        url: '/search?category=Shoes',
        isPublished: true,
    },
    {
        id: 2,
        title: 'Best Sellers in T-Shirts',
        buttonCaption: 'Shop Now',
        image: '/images/banner1.jpg',
        url: '/search?category=T-Shirts',
        isPublished: true,
    },
    {
        id: 3,
        title: 'Best Deals on Wrist Watches',
        buttonCaption: 'See More',
        image: '/images/banner2.jpg',
        url: '/search?category=Wrist Watches',
        isPublished: true,
    },
    ]

 
}

export default data