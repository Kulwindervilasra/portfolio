import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";
import alphanet from "../assets/images/alpha_net_logo.jpeg"
import antier from "../assets/images/antier.png"
import innow8 from "../assets/images/innow8_apps_logo.jpeg"
import enest from "../assets/images/enestlogo-new.svg"

import india from "../assets/images/india.png"

class DynamicValues {
    static initialInformation: IInitialInformation = {
        name: "Kulwinder Singh",
        occupation: "Fullstack Software Developer | Blockchain Expert | Team Lead with over 7 years of professional experience.",
    };

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "WhatsApp",
            link: "https://wa.me/+919855657566",
            // desc: "Connect with me on WhatsApp for quick discussions or inquiries."
        },
        {
            name: "Telegram",
            link: "https://t.me/vilasraboyz",
            // desc: "Reach out via Telegram for professional inquiries or collaborations."
        },
    ];

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: "Kulwinder Singh - A seasoned Fullstack Developer and Blockchain Expert with over 7 years of hands-on experience in designing and implementing scalable solutions.",
                    logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                },
                {
                    title: "Work Experience",
                    desc: "Over 7 years of professional experience specializing in full-stack development, blockchain technology, and leading high-performing teams to deliver innovative projects.",
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png"
                },
                {
                    title: "Languages",
                    desc: "Fluent in Punjabi, Hindi, and English, facilitating effective communication across diverse multicultural environments.",
                    logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png"
                },
                {
                    title: "Nationality",
                    desc: "Proud Indian citizen with a global perspective, adept at collaborating with international teams and adapting to various cultural settings.",
                    logo: india
                },
                {
                    title: "Resume",
                    desc: "Access my comprehensive resume detailing my extensive skills, qualifications, and professional journey.",
                    link: "https://drive.google.com/file/d/1NrxK5tlN9CtiLf3NNe75mOGrl4_0RlXT/view",
                    logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png"
                }
            ]
        },
        {
            text: "Experience",
            arr: [
                {
                    title: "Senior Backend Engineer",
                    desc: "Currently leading backend engineering efforts at Alphanet Corp, focusing on designing and implementing scalable microservices architectures to support high-performance applications. (Sept 2024 - Present)",
                    logo: alphanet // Ensure this path is correct
                },
                {
                    title: "Fullstack Blockchain Team Lead",
                    desc: "Led a team of developers in building decentralized blockchain applications and solutions at Antier Solutions. Successfully delivered multiple projects involving smart contracts, DeFi platforms, and NFT marketplaces. (Dec 2020 - July 2025)",
                    logo: antier // Ensure this path is correct
                },
                {
                    title: "Full Stack Software Developer",
                    desc: "Developed innovative web and mobile applications at Innow8 Apps Pvt Ltd, enhancing user engagement and system performance through modern technologies and best practices. Contributed to both frontend and backend development. (Feb 2019 - Dec 2020)",
                    logo: innow8 // Ensure this path is correct
                },
                {
                    title: "Software Engineer",
                    desc: "Worked on enterprise-level software solutions at eNest Technologies Pvt Ltd, contributing to the design, development, and deployment of multiple successful projects. Gained hands-on experience in full-stack development and agile methodologies. (Jan 2018 - Sept 2018)",
                    logo: enest // Ensure this path is correct
                }
            ]
        }
    ];

    static skills: Array<ITitledListItem> = [
        {
            text: "Blockchain Platforms & Frameworks",
            arr: [
                {
                    title: "Ethereum",
                    desc: "Proficient in developing decentralized applications (dApps) and smart contracts on the Ethereum blockchain, with expertise in EVM-compatible solutions.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"
                },
                {
                    title: "Substrate",
                    desc: "Experienced in building custom blockchains using Substrate, a modular framework for creating interoperable and scalable blockchain networks.",
                    logo: "https://substrate.dev/img/substrate-logo.png"
                },
                {
                    title: "Cosmos SDK",
                    desc: "Skilled in creating interoperable blockchain solutions using the Cosmos SDK, enabling cross-chain communication and decentralized ecosystems.",
                    logo: "https://cosmos.network/images/cosmos-logo.svg"
                },
                {
                    title: "Tendermint",
                    desc: "Expertise in Tendermint for building secure and scalable consensus engines, ensuring high-performance blockchain networks.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Tendermint_Logo.svg"
                },
                {
                    title: "Hyperledger Fabric",
                    desc: "Experienced in developing enterprise-grade blockchain solutions using Hyperledger Fabric, focusing on permissioned networks and modular architecture.",
                    logo: "https://www.hyperledger.org/wp-content/uploads/2018/08/hyperledger_fabric.png"
                },
                {
                    title: "Polkadot",
                    desc: "Proficient in building interoperable blockchains using Polkadot's multi-chain framework, enabling seamless communication between parachains.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Polkadot_new.png"
                },
                {
                    title: "Layer 1 & Layer 2",
                    desc: "Knowledgeable in Layer 1 and Layer 2 scaling solutions, including rollups, sidechains, and sharding, to optimize blockchain performance.",
                    logo: "https://cryptologos.cc/logos/layer-2-logo.svg"
                }
            ]
        },
        {
            text: "Smart Contract Development",
            arr: [
                {
                    title: "Solidity",
                    desc: "Expert in writing secure and efficient smart contracts using Solidity for Ethereum-based applications, with a focus on security best practices.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg"
                },
                {
                    title: "Rust",
                    desc: "Proficient in Rust for developing high-performance smart contracts and blockchain applications, leveraging its safety and concurrency features.",
                    logo: "https://www.rust-lang.org/static/images/rust-logo-blk.svg"
                },
                {
                    title: "WASM",
                    desc: "Experienced in WebAssembly (WASM) for building fast and efficient blockchain applications, enabling cross-platform compatibility.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/WebAssembly_Logo.svg"
                }
            ]
        },
        {
            text: "Programming / Markup Languages",
            arr: [
                {
                    title: "JavaScript",
                    desc: "Proficient in JavaScript for building dynamic and interactive web applications, with expertise in both frontend and backend development.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                },
                {
                    title: "TypeScript",
                    desc: "Experienced in TypeScript for building scalable and maintainable web applications, ensuring type safety and improved developer experience.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/TypeScript_Logo.svg"
                },
                {
                    title: "Python",
                    desc: "Skilled in Python for scripting, automation, and backend development, leveraging its simplicity and versatility for various use cases.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                },
                {
                    title: "Rust",
                    desc: "Proficient in Rust for system-level programming and blockchain development, ensuring memory safety and high performance.",
                    logo: "https://www.rust-lang.org/static/images/rust-logo-blk.svg"
                },
                {
                    title: "Go",
                    desc: "Experienced in Go for building high-performance backend systems and microservices, leveraging its efficiency and concurrency model.",
                    logo: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg"
                },
                {
                    title: "HTML",
                    desc: "Expert in HTML for structuring and designing web pages, ensuring semantic markup and accessibility standards.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                },
                {
                    title: "CSS",
                    desc: "Skilled in CSS for styling and creating responsive web designs, with expertise in modern frameworks like Tailwind and Bootstrap.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                }
            ]
        },
        {
            text: "Frontend & Backend",
            arr: [
                {
                    title: "React.js",
                    desc: "Proficient in React.js for building dynamic and interactive user interfaces, with expertise in state management and component-based architecture.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                },
                {
                    title: "Node.js",
                    desc: "Experienced in Node.js for building scalable and efficient backend systems, leveraging its non-blocking I/O model for high performance.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                },
                {
                    title: "Express.js",
                    desc: "Skilled in Express.js for building RESTful APIs and web applications, ensuring clean and modular code structure.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                },
                {
                    title: "NestJS",
                    desc: "Proficient in NestJS for building scalable and modular backend applications, leveraging TypeScript and dependency injection.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"
                },
                {
                    title: "Next.js",
                    desc: "Experienced in Next.js for building server-side rendered and static web applications, ensuring SEO optimization and performance.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                }
            ]
        },
        {
            text: "Mobile Programming",
            arr: [
                {
                    title: "React Native",
                    desc: "Proficient in React Native for building cross-platform mobile applications, ensuring native-like performance and user experience.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                },
                {
                    title: "Ionic",
                    desc: "Experienced in Ionic for building hybrid mobile applications with web technologies, enabling rapid development and deployment.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg"
                }
            ]
        },
        {
            text: "Databases",
            arr: [
                {
                    title: "MySQL",
                    desc: "Proficient in MySQL for designing and managing relational databases, ensuring data integrity and efficient query performance.",
                    logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg"
                },
                {
                    title: "MongoDB",
                    desc: "Experienced in MongoDB for building scalable NoSQL database solutions, leveraging its flexibility and document-based architecture.",
                    logo: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg"
                },
                {
                    title: "PostgreSQL",
                    desc: "Skilled in PostgreSQL for building robust and efficient relational databases, with expertise in advanced querying and indexing.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                }
            ]
        },
        {
            text: "Cloud & DevOps",
            arr: [
                {
                    title: "AWS",
                    desc: "Proficient in AWS for deploying and managing cloud-based applications and infrastructure, leveraging services like EC2, S3, and Lambda.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                },
                {
                    title: "Google Cloud",
                    desc: "Experienced in Google Cloud for building and scaling cloud-native applications, utilizing services like Kubernetes Engine and BigQuery.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Google_Cloud_logo.svg"
                },
                {
                    title: "Docker",
                    desc: "Skilled in Docker for containerizing applications and streamlining deployment processes, ensuring consistency across environments.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
                },
                {
                    title: "Kubernetes",
                    desc: "Proficient in Kubernetes for orchestrating containerized applications at scale, ensuring high availability and fault tolerance.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg"
                },
                {
                    title: "Git",
                    desc: "Experienced in Git for version control and collaborative software development, ensuring efficient branching and merging workflows.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
                }
            ]
        },
        {
            text: "Blockchain Tools",
            arr: [
                {
                    title: "Web3.js",
                    desc: "Proficient in Web3.js for interacting with Ethereum-based blockchain networks, enabling seamless integration of dApps and wallets.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Metamask_logo.svg"
                },
                {
                    title: "Ethers.js",
                    desc: "Experienced in Ethers.js for building Ethereum-based applications and smart contracts, ensuring lightweight and efficient interactions.",
                    logo: "https://ethers.org/favicon.svg"
                },
                {
                    title: "OpenZeppelin",
                    desc: "Skilled in OpenZeppelin for building secure and audited smart contracts, leveraging its battle-tested libraries and tools.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/OpenZeppelin.png"
                },
                {
                    title: "Truffle",
                    desc: "Proficient in Truffle for developing and testing Ethereum-based smart contracts, ensuring streamlined workflows and debugging.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Truffle_logo.png"
                },
                {
                    title: "Hardhat",
                    desc: "Experienced in Hardhat for building and deploying Ethereum-based applications, leveraging its powerful development environment.",
                    logo: "https://hardhat.org/favicon.ico"
                }
            ]
        },
        {
            text: "APIs & Protocols",
            arr: [
                {
                    title: "GraphQL",
                    desc: "Proficient in GraphQL for building efficient and flexible APIs, enabling precise data fetching and reducing over-fetching issues.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                },
                {
                    title: "REST",
                    desc: "Experienced in REST for building scalable and interoperable web services, ensuring clean and standardized API design.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/REST-API-icon.png"
                },
                {
                    title: "WebSocket",
                    desc: "Skilled in WebSocket for building real-time communication applications, enabling bidirectional data streaming.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/WebSockets_Logo.svg"
                },
                {
                    title: "RabbitMQ",
                    desc: "Proficient in RabbitMQ for building message-driven and event-based systems, ensuring reliable message delivery and scalability.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/RabbitMQ_logo.svg"
                }
            ]
        },
        {
            text: "Testing Frameworks/Tools",
            arr: [
                {
                    title: "Jest",
                    desc: "Proficient in Jest for testing JavaScript and TypeScript applications, ensuring comprehensive unit and integration testing.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Jest_logo.svg"
                },
                {
                    title: "Mocha",
                    desc: "Experienced in Mocha for testing Node.js applications, leveraging its flexibility and plugin ecosystem.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Mocha_logo.svg"
                },
                {
                    title: "Chai",
                    desc: "Skilled in Chai for writing expressive and readable test assertions, ensuring robust and maintainable test suites.",
                    logo: "https://www.chaijs.com/img/chai-logo.svg"
                }
            ]
        },
        {
            text: "Payment Gateways Integration",
            arr: [
                {
                    title: "RazorPay",
                    desc: "Experienced in integrating RazorPay for seamless payment processing in web applications, ensuring secure and efficient transactions.",
                    logo: "https://razorpay.com/favicon.ico"
                },
                {
                    title: "Stripe",
                    desc: "Proficient in integrating Stripe for secure and scalable payment solutions, leveraging its developer-friendly APIs.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Stripe_Logo%2C_revised_2016.svg"
                },
                {
                    title: "PhonePe",
                    desc: "Skilled in integrating PhonePe for UPI-based payment solutions, enabling fast and secure peer-to-peer transactions.",
                    logo: "https://www.phonepe.com/favicon.ico"
                },
                {
                    title: "UPI",
                    desc: "Experienced in integrating UPI for fast and secure payment processing, ensuring compliance with Indian banking standards.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/BHIM-UPI-Logo.svg"
                },
                {
                    title: "Paytm",
                    desc: "Proficient in integrating Paytm for digital wallet and payment solutions, ensuring seamless user experiences.",
                    logo: "https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png"
                },
                {
                    title: "Google Pay",
                    desc: "Skilled in integrating Google Pay for seamless and secure transactions, leveraging its widespread adoption.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg"
                },
                {
                    title: "Cashfree",
                    desc: "Experienced in integrating Cashfree for payment gateway solutions, ensuring reliability and ease of use.",
                    logo: "https://www.cashfree.com/favicon.ico"
                }
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: "Android Studio",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg"
                },
                {
                    title: "VS Code",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                },
                {
                    title: "Jira",
                    logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Jira_%28Software%29_Logo.svg"
                },
                {
                    title: "Figma",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                },
                {
                    title: "Heroku",
                    logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.svg"
                },
                {
                    title: "Linux",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png"
                }
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
                    title: 'WhatsApp (Recommended)',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://wa.me/+919855657566',
                    desc: "Connect with me on WhatsApp for quick discussions or inquiries. (+919855657566)"
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
                    desc: "Search for 'Kulwinder vilasra' to find me across platforms."
                },
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png',
                    link: 'https://github.com/kulwindervilasra/',
                    desc: "Explore my open-source projects and contributions on GitHub."
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/kulwinder-singh-394384130/',
                    desc: "Connect with me professionally on LinkedIn."
                },
                {
                    title: 'Twitter',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841031-532d5d6e-797a-4da1-8064-48d266b69ab2.png',
                    link: 'https://twitter.com/vilasra',
                    desc: "Follow me on Twitter for updates and insights."
                },
                {
                    title: 'Instagram',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841023-0b842621-56a3-42ec-81f1-3944034b09c7.png',
                    link: 'https://www.instagram.com/vilasraboyz/',
                    desc: "Check out my Instagram for personal and professional highlights."
                },
                {
                    title: "Upwork",
                    logo: "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg",
                    link: "https://www.upwork.com/freelancers/~018cb3122f40181fd5",
                    desc: "Hire me for freelance projects on Upwork."
                },
                {
                    title: 'Skype',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840899-62c1fe8e-66a6-4492-9acc-5bd504ac21ef.png',
                    desc: 'Kulwinder Singh',
                    link: 'skype:live:9f3280f7701fb1d8?chat'
                },
            ]
        }
    ];
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