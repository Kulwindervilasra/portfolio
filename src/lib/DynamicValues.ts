import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";
import alphanet from "../assets/images/alpha_net_logo.jpeg"
import antier from "../assets/images/antier.png"
import innow8 from "../assets/images/innow8_apps_logo.jpeg"
import enest from "../assets/images/enestlogo-new.svg"

import india from "../assets/images/india.png"

class DynamicValues {
    static initialInformation: IInitialInformation = {
        name: "Kulwinder Singh",
        occupation: "Fullstack Software Developer, Team Lead and Blockchain Expert",
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send?phone=+919855657566"
        },
        // {
        //     name: "Messenger",
        //     link: "https://m.me/vilasraboyz"
        // },
        {
            name: "Telegram",
            link: "https://t.me/vilasraboyz"
        },

    ]

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: "Kulwinder Singh",
                    logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                },
                {
                    title: "Work Experience",
                    desc: "7+ years",
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png"
                },
                {
                    title: "Languages",
                    desc: "Punjabi, Hindi, English",
                    logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png"
                },
                {
                    title: "Nationality",
                    desc: "Indian",
                    logo: india
                },
                {
                    title: "Resume",
                    desc: "Click the link icon to view/download",
                    link: "https://drive.google.com/file/d/1NrxK5tlN9CtiLf3NNe75mOGrl4_0RlXT/view",
                    logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png"
                }
            ]
        },
        {
            text: "Experiences",
            arr: [
                {
                    title: "Alphanet Corp, Mohali",
                    desc: "Senior Backend Engineer (Sept 2024-Present)",
                    logo: alphanet
                },
                {
                    title: "Antier Solutions, Mohali",
                    desc: "Fullstack Blockchain Apps Team Lead (Dec 2020-July 2025)",
                    logo: antier
                },
                {
                    title: "Innow8 Apps Pvt Ltd, Mohali",
                    desc: "Full Stack Software Developer (Feb 2019-Dec 2020)",
                    logo: innow8
                },
                {
                    title: "eNest Technologies Pvt Ltd, Mohali",
                    desc: "Software Engineer (Jan 2018-Sept 2018)",
                    logo: enest
                },

            ]
        }
    ]

    static skills: Array<ITitledListItem> = [
        {
            text: "Blockchain Platforms & Frameworks",
            arr: [
                { title: "Ethereum", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" },
                { title: "Substrate", logo: "https://substrate.dev/img/substrate-logo.png" },
                { title: "Cosmos SDK", logo: "https://cosmos.network/images/cosmos-logo.svg" },
                { title: "Tendermint", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Tendermint_Logo.svg" },
                { title: "Hyperledger Fabric", logo: "https://www.hyperledger.org/wp-content/uploads/2018/08/hyperledger_fabric.png" },
                { title: "Polkadot", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Polkadot_new.png" },
                { title: "Layer1 & Layer2", logo: "https://cryptologos.cc/logos/layer-2-logo.svg" }
            ]
        },
        {
            text: "Smart Contract Development",
            arr: [
                { title: "Solidity", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" },
                { title: "Rust", logo: "https://www.rust-lang.org/static/images/rust-logo-blk.svg" },
                { title: "WASM", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/WebAssembly_Logo.svg" }
            ]
        },
        {
            text: "Programming / Markup Languages",
            arr: [
                { title: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
                { title: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/TypeScript_Logo.svg" },
                { title: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
                { title: "Rust", logo: "https://www.rust-lang.org/static/images/rust-logo-blk.svg" },
                { title: "Go", logo: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" },
                { title: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
                { title: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" }
            ]
        },
        {
            text: "Frontend & Backend",
            arr: [
                { title: "React.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                { title: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
                { title: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
                { title: "NestJS", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" },
                { title: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" }
            ]
        },
        {
            text: "Mobile Programming",
            arr: [
                { title: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                { title: "Ionic", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" }
            ]
        },
        {
            text: "Databases",
            arr: [
                { title: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
                { title: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg" },
                { title: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" }
            ]
        },
        {
            text: "Cloud & DevOps",
            arr: [
                { title: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
                { title: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Google_Cloud_logo.svg" },
                { title: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
                { title: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
                { title: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" }
            ]
        },
        {
            text: "Blockchain Tools",
            arr: [
                { title: "Web3.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Metamask_logo.svg" },
                { title: "Ethers.js", logo: "https://ethers.org/favicon.svg" },
                { title: "OpenZeppelin", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/OpenZeppelin.png" },
                { title: "Truffle", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Truffle_logo.png" },
                { title: "Hardhat", logo: "https://hardhat.org/favicon.ico" }
            ]
        },
        {
            text: "APIs & Protocols",
            arr: [
                { title: "GraphQL", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
                { title: "REST", logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/REST-API-icon.png" },
                { title: "WebSocket", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/WebSockets_Logo.svg" },
                { title: "RabbitMQ", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/RabbitMQ_logo.svg" }
            ]
        },
        {
            text: "Testing Frameworks/Tools",
            arr: [
                { title: "Jest", logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Jest_logo.svg" },
                { title: "Mocha", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Mocha_logo.svg" },
                { title: "Chai", logo: "https://www.chaijs.com/img/chai-logo.svg" }
            ]
        },
        {
            text: "Others",
            arr: [
                { title: "Android Studio", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg" },
                { title: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
                { title: "Jira", logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Jira_%28Software%29_Logo.svg" },
                { title: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
                { title: "Heroku", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.svg" },
                { title: "Linux", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" }
            ]
        }
    ];

    static projects: Array<ITitledListItem> = [
        {
            text: "Blockchain Projects",
            arr: [
                {
                    title: "5ireChain Network",
                    link: "https://5ire.org/",
                    logo: "https://5ire.org/favicon.ico",
                    desc: "Developed a Substrate-based NPOS blockchain with native token support and applications like IDEs and Wallet extensions. Achieved a 15% reduction in carbon footprint through eco-friendly infrastructure."
                },
                {
                    title: "SaitaChain",
                    link: "https://saitachain.com/",
                    logo: "https://saitachain.com/favicon.ico",
                    desc: "Implemented decentralized apps for a scalable Layer 0 blockchain ecosystem, including Validator/Nominator apps and a decentralized exchange (DEX)."
                },
                {
                    title: "Shido Network",
                    link: "https://shido.io/",
                    logo: "https://shido.io/favicon.ico",
                    desc: "Built a Layer 1 Proof-of-Stake blockchain with interoperability across Cosmos, EVM, and WASM frameworks."
                },
                {
                    title: "Galaxia Coin",
                    link: "https://www.galaxiacoin.io/",
                    logo: "https://www.galaxiacoin.io/favicon.ico",
                    desc: "Core blockchain development using Substrate at Antier."
                },
                {
                    title: "Nexa Blockchain",
                    link: "https://nexa.org/",
                    logo: "https://nexa.org/favicon.ico",
                    desc: "Worked on the core blockchain and explorer for Nexa."
                }
            ]
        },
        {
            text: "Web & Mobile Apps",
            arr: [
                {
                    title: "Zest AI Backend",
                    link: "https://zest.ai/",
                    logo: "https://zest.ai/favicon.ico",
                    desc: "Built backend systems for AI-driven credit underwriting using Node.js, integrating machine learning models to automate loan workflows."
                },
                {
                    title: "Fantom Wallet",
                    link: "https://fantom.foundation/",
                    logo: "https://fantom.foundation/favicon.ico",
                    desc: "Developed a decentralized wallet, enabling secure fund management and token staking."
                },
                {
                    title: "FoodClub",
                    link: "https://foodclub.com/",
                    logo: "https://foodclub.com/favicon.ico",
                    desc: "Worked on mobile applications at Innow8."
                },
                {
                    title: "Phantom Wallet Mobile App",
                    link: "https://play.google.com/store/apps/details?id=app.phantom&hl=en_IN",
                    logo: "https://phantom.app/favicon.ico",
                    desc: "Developed a mobile app for Phantom Wallet using React Native at Innow8."
                },
                {
                    title: "Poptikr",
                    link: "https://www.poptikr.com/",
                    logo: "https://www.poptikr.com/favicon.ico",
                    desc: "Freelance project involving full-stack development."
                }
            ]
        },
        {
            text: "Cryptocurrency Exchanges",
            arr: [
                {
                    title: "BWB Exchange",
                    link: "https://bwbexchange.com/",
                    logo: "https://bwbexchange.com/favicon.ico",
                    desc: "Developed a cryptocurrency exchange supporting P2P and margin trading, reducing transaction processing time by 35%."
                }
            ]
        },
        {
            text: "E-commerce & Business Solutions",
            arr: [
                {
                    title: "Holland & Barrett PIM Services",
                    link: "https://www.hollandandbarrett.com/",
                    logo: "https://www.hollandandbarrett.com/favicon.ico",
                    desc: "Worked on PIM services using Node.js and implemented unit testing at Innow8."
                },
                {
                    title: "Seven Store",
                    link: "https://www.sevenstore.com/",
                    logo: "https://www.sevenstore.com/favicon.ico",
                    desc: "Freelance project focused on payment gateway checkout using Stripe."
                }
            ]
        },
        {
            text: "Browser Extensions",
            arr: [
                {
                    title: "5ire Wallet",
                    link: "https://chromewebstore.google.com/detail/5ire-wallet/keenhcnmdmjjhincpilijphpiohdppno",
                    logo: "https://5ire.org/favicon.ico",
                    desc: "A browser extension for the 5ireChain ecosystem, enabling seamless transactions, asset management, and blockchain interactions directly from your web browser."
                }
            ]
        },
        {
            text: "Tools & Explorers",
            arr: [
                {
                    title: "Nexa Explorer",
                    link: "https://explorer.nexa.org/",
                    logo: "https://nexa.org/favicon.ico",
                    desc: "Developed backend and frontend using Node.js and Next.js."
                },
                {
                    title: "GetCalculators",
                    link: "https://getcalculators.com/",
                    logo: "https://getcalculators.com/favicon.ico",
                    desc: "Worked on React and Node.js at eNest."
                }
            ]
        }
    ]


    static contacts: Array<ITitledListItem> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'WhatsApp ( Recommended )',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://wa.me/+919855657566',
                    desc: "+919855657566"
                },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'kulwinder.vilasra@gmail.com',
                    link: 'mailto:kulwinder.vilasra@gmail.com'
                },
                {
                    title: 'Telegram',
                    logo: 'https://cdn-icons-png.flaticon.com/128/2111/2111646.png',
                    desc: '@vilasraboyz',
                    link: 'https://t.me/vilasraboyz'
                },
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'Anywhere on the internet',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840900-91ac076a-8d2b-45dc-b346-66f72d376d4b.png',
                    desc: "Kulwinder vilasra"
                },
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png',
                    link: 'https://github.com/kulwindervilasra/'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/kulwinder-singh-394384130/'
                },
                // {
                //     title: 'Facebook',
                //     logo: 'https://user-images.githubusercontent.com/6418354/155840898-9e2327aa-a280-45e3-8266-8268242abda4.png',
                //     link: 'https://www.facebook.com/p32929'
                // },
                {
                    title: 'Twitter',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841031-532d5d6e-797a-4da1-8064-48d266b69ab2.png',
                    link: 'https://twitter.com/vilasra'
                },
                {
                    title: 'Instagram',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841023-0b842621-56a3-42ec-81f1-3944034b09c7.png',
                    link: 'https://www.instagram.com/vilasraboyz/#'
                },
                // {
                //     title: 'Fiverr',
                //     logo: 'https://cdn.worldvectorlogo.com/logos/fiverr-1.svg',
                //     link: 'https://www.fiverr.com/users/fayazbinsalam/'
                // },
                {
                    title: "Upwork",
                    logo: "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg",
                    link: "https://www.upwork.com/freelancers/~018cb3122f40181fd5"
                },
                // {
                //     title: "Medium",
                //     logo: "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png",
                //     link: "https://medium.com/@p32929_77176"
                // },
                // {
                //     title: "xda",
                //     logo: "https://www.svgrepo.com/show/331651/xda-developers.svg",
                //     link: "https://forum.xda-developers.com/m/p32929.5346826/"
                // },
                // {
                //     title: "Product Hunt",
                //     logo: "https://seeklogo.com/images/P/product-hunt-logo-A144953C4C-seeklogo.com.png?v=637846885100000000",
                //     link: "https://www.producthunt.com/@p32929"
                // },
                // {
                //     title: "UVA Online Judge",
                //     logo: "https://github.com/p32929/portfolio-v2/assets/6418354/5e21914b-9dfd-4394-bfa3-d2e216e8ce39",
                //     link: "https://uhunt.onlinejudge.org/id/590978"
                // },
                // {
                //     title: "URI Online Judge",
                //     logo: "https://user-images.githubusercontent.com/26368939/110052090-be0a0b00-7d35-11eb-8827-993190a9568e.png",
                //     link: "https://www.beecrowd.com.br/judge/en/profile/76542"
                // },
                // {
                //     title: "Buy Me a Coffee",
                //     logo: "https://cdn.iconscout.com/icon/free/png-256/free-buymeacoffee-3628667-3029892.png",
                //     link: "https://www.buymeacoffee.com/p32929"
                // },
                {
                    title: 'Skype',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840899-62c1fe8e-66a6-4492-9acc-5bd504ac21ef.png',
                    desc: 'Kulwinder Singh',
                    link: 'skype:live:9f3280f7701fb1d8?chat'
                },
            ]
        },
        // {
        //     text: "Thank you for visiting my portfolio",
        //     arr: [
        //         {
        //             title: "Click on the link button",
        //             desc: 'To create your own portfolio. It will only take around 3 minutes',
        //             logo: `https://cdn.iconscout.com/icon/premium/png-256-thumb/gift-2990371-2484427.png`,
        //             link: 'https://github.com/p32929/p32929.github.io/'
        //         }
        //     ]
        // }
    ]
}

// 
// Dont change anything below this line
// 
export const combinedInformation: ICombinedInformation = {
    initialInformation: DynamicValues.initialInformation,
    directMessageItems: DynamicValues.directMessageItems,
    routes: [
        {
            name: "About",
            items: DynamicValues.about,
        },
        {
            name: "Skills",
            items: DynamicValues.skills,
        },
        {
            name: "Projects",
            items: DynamicValues.projects,
        },
        {
            name: "Contact",
            items: DynamicValues.contacts,
        },
    ]
}