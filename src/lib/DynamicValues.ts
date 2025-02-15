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
            shouldNotSort: true,
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
                    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=040"
                },
                {
                    title: "Cosmos SDK",
                    desc: "Skilled in creating interoperable blockchain solutions using the Cosmos SDK, enabling cross-chain communication and decentralized ecosystems.",
                    logo: "https://docs.cosmos.network/img/logo-sdk.svg"
                },
                {
                    title: "Tendermint",
                    desc: "Expertise in Tendermint for building secure and scalable consensus engines, ensuring high-performance blockchain networks.",
                    logo: "https://logos-download.com/wp-content/uploads/2023/02/Tendermint_Logo.png"
                },
                {
                    title: "Hyperledger Fabric",
                    desc: "Experienced in developing enterprise-grade blockchain solutions using Hyperledger Fabric, focusing on permissioned networks and modular architecture.",
                    logo: "https://hyperledger-fabric.readthedocs.io/en/release-2.5/_images/hyperledger_fabric_logo_color.png"
                },
                {
                    title: "Polkadot",
                    desc: "Proficient in building interoperable blockchains using Polkadot's multi-chain framework, enabling seamless communication between parachains.",
                    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=040"
                },
                {
                    title: "Layer 1 & Layer 2",
                    desc: "Knowledgeable in Layer 1 and Layer 2 scaling solutions, including rollups, sidechains, and sharding, to optimize blockchain performance.",
                    logo: "https://s3.amazonaws.com/assets.coingecko.com/app/public/ckeditor_assets/pictures/6329/content_Twitter_PoR_Roll_Out_%2814%29.png"
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
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/600px-WebAssembly_Logo.svg.png"
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
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
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
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png?20190626143224"
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
                    logo: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo-700x394.png"
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
                    logo: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-3-icon.png"
                },
                {
                    title: "Ethers.js",
                    desc: "Experienced in Ethers.js for building Ethereum-based applications and smart contracts, ensuring lightweight and efficient interactions.",
                    logo: "https://images.seeklogo.com/logo-png/42/1/ethers-logo-png_seeklogo-426721.png"
                },
                {
                    title: "OpenZeppelin",
                    desc: "Skilled in OpenZeppelin for building secure and audited smart contracts, leveraging its battle-tested libraries and tools.",
                    logo: "https://www.openzeppelin.com/hubfs/oz-light-bg.svg"
                },
                {
                    title: "Truffle",
                    desc: "Proficient in Truffle for developing and testing Ethereum-based smart contracts, ensuring streamlined workflows and debugging.",
                    logo: "https://archive.trufflesuite.com/assets/logo.png"
                },
                {
                    title: "Hardhat",
                    desc: "Experienced in Hardhat for building and deploying Ethereum-based applications, leveraging its powerful development environment.",
                    logo: "https://hardhat.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhardhat-logo.5c5f687b.svg&w=256&q=75"
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
                    logo: "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2022-05/whatis_rest_api.webp"
                },
                {
                    title: "WebSocket",
                    desc: "Skilled in WebSocket for building real-time communication applications, enabling bidirectional data streaming.",
                    logo: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4BtGcPz3JauG9qsNXzLMXA.gif"
                },
                {
                    title: "RabbitMQ",
                    desc: "Proficient in RabbitMQ for building message-driven and event-based systems, ensuring reliable message delivery and scalability.",
                    logo: "https://www.rabbitmq.com/img/rabbitmq-logo-with-name.svg"
                }
            ]
        },
        {
            text: "Testing Frameworks/Tools",
            arr: [
                {
                    title: "Jest",
                    desc: "Proficient in Jest for testing JavaScript and TypeScript applications, ensuring comprehensive unit and integration testing.",
                    logo: "https://icon.icepanel.io/Technology/svg/Jest.svg"
                },
                {
                    title: "Mocha",
                    desc: "Experienced in Mocha for testing Node.js applications, leveraging its flexibility and plugin ecosystem.",
                    logo: "https://mochajs.org/images/mocha-logo.svg"
                },
                {
                    title: "Chai",
                    desc: "Skilled in Chai for writing expressive and readable test assertions, ensuring robust and maintainable test suites.",
                    logo: "https://www.chaijs.com/img/favicon.ico"
                }
            ]
        },
        {
            text: "Payment Gateways Integration",
            arr: [
                {
                    title: "RazorPay",
                    desc: "Experienced in integrating RazorPay for seamless payment processing in web applications, ensuring secure and efficient transactions.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Razorpay_logo.webp/620px-Razorpay_logo.webp.png?20220522093348"
                },
                {
                    title: "Stripe",
                    desc: "Proficient in integrating Stripe for secure and scalable payment solutions, leveraging its developer-friendly APIs.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/250px-Stripe_Logo%2C_revised_2016.svg.png"
                },
                {
                    title: "PhonePe",
                    desc: "Skilled in integrating PhonePe for UPI-based payment solutions, enabling fast and secure peer-to-peer transactions.",
                    logo: "https://www.phonepe.com/favicon.ico"
                },
                {
                    title: "UPI",
                    desc: "Experienced in integrating UPI for fast and secure payment processing, ensuring compliance with Indian banking standards.",
                    logo: "https://www.npci.org.in/images/npci/logo.png"
                },
                {
                    title: "Paytm",
                    desc: "Proficient in integrating Paytm for digital wallet and payment solutions, ensuring seamless user experiences.",
                    logo: "https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png"
                },
                {
                    title: "Google Pay",
                    desc: "Skilled in integrating Google Pay for seamless and secure transactions, leveraging its widespread adoption.",
                    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAbCAMAAAAeYLy0AAAA8FBMVEX///+eoKNPVFo0qFNChfRMUVfqQzW/wcLH1/syfvP6+vr7uwBWW2AufPObnqCIi46oqqw8gvTR0tPpNSToJg3qPzD3xsO1trjpKxXo6OmWmJv8vwBzdnvx8vLh6f1fY2jz+fQSoT+Mx5n86unynZjsXlTubWX1tbLwiYPrTEDnAAD74eDrUUbvgnvtZVzxlZX/+eXyfwDpNDf92pb3pRb8x1L5rgD99PjT3/xsnPYUc/P8y1/7wS/8z2+orRji8upSjfX+5bh+rkRvu4F6pPZPp0KazaW53cNit3bS6NczonQ9jdQUpC7W5PBLr2Sq1bSXQ9WSAAAB3ElEQVQ4jdWT21YTMRSGM5nZHUzSOXZMJ0yatoCieFZEEaUKUvH4/m/jTtJpwbZ0wZ3/Xf7sb+1TQsh/pp3dvbJXPXh4W26/V1adTqcqy/tzT6ZWKr4BO3pUWqqy7OOD1k2EABQV9VrwCRJl9XT/Wb/qLTIGVNYoRalewz3HfH3X3c7egkPQV6lotpp78fJVp3+w7LdgDc1q8PX2m3J3hd+CGkGWNcYobFZK37GWMTnk22+P7OHd1kzXwYyqWlAwlEJMMlDeBEk454fu8L57z+mYtSBjTGcU6hhS9CQFzYC6WwHMgh9c5HkeOXVnoBDUCvMQP9eEShyVraOwiU84P5llRF0FjUClrqk4UEEc0wRHZfCYArofOf90ai8HVpMoyq/3aEdhqH8LCSENFG5ehHzmX8KzNmTQjfLzJbARTYF7URYsIMXRFNb+GoajCx/BJnnU3foXxIm4JgsslRADTBjnT0dIfrskZDj9HuX5hKwAZ4ktGItGSH8xRjIcWYXhj+PBEogErkOnrkdCqPEraUmvn7/a6ATmYI1LEUBjv/3MVex1+Xvks54N516RLf6TDhqjtM7cTBRc/Winf8bji+mQbJZe9+g3KfC7uLUYmLsltP/iTpKSbQ66UX8BHuklQ0tWz1cAAAAASUVORK5CYII="
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
                    logo: "https://images.ctfassets.net/8j5aqoy0ts8s/5MpU3FFmDN64SPZPgCX4qg/b83847032fdda852206f8098aa093ae6/logo-strapline.jpg"
                },
                {
                    title: "Figma",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                },
                {
                    title: "Heroku",
                    logo: "https://www.heroku.com/assets/enterprise/logo-blue-cde578d6a1931a7ba371bc0c5397d13ddf02a6059fc943b8ca86b7b53522097a.svg"
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
                    desc: "Developed a Substrate-based Nominated Proof-of-Stake (NPOS) blockchain with native token support and integrated applications like IDEs and Wallet extensions. Achieved a 15% reduction in carbon footprint through eco-friendly infrastructure, emphasizing sustainability in blockchain operations."
                },
                {
                    title: "SaitaChain",
                    link: "https://saitachain.com/",
                    logo: "https://saitachain.com/saitachainlogo.png    ",
                    desc: "Implemented decentralized applications for a scalable Layer 0 blockchain ecosystem, including Validator/Nominator apps and a decentralized exchange (DEX). Enabled seamless cross-chain interoperability and high-performance transaction processing."
                },
                {
                    title: "Shido Network",
                    link: "https://shido.io/",
                    logo: "https://shido.io/favicon.ico",
                    desc: "Built a Layer 1 Proof-of-Stake blockchain with interoperability across Cosmos, EVM, and WASM frameworks. Designed modular architecture to support diverse use cases, from DeFi to NFT marketplaces, ensuring scalability and security."
                },
                {
                    title: "Galaxia Coin",
                    link: "https://www.galaxiacoin.io/",
                    logo: "https://www.galaxiacoin.io/assets/images/logo-white.svg",
                    desc: "Led core blockchain development using Substrate at Antier Solutions. Designed and implemented consensus mechanisms, staking modules, and governance systems, ensuring a robust and secure blockchain ecosystem."
                },
                {
                    title: "Nexa Blockchain",
                    link: "https://nexa.org/",
                    logo: "https://nexa.org/favicon.ico",
                    desc: "Contributed to the core blockchain development and explorer for Nexa. Implemented advanced features like real-time analytics, block tracking, and user-friendly interfaces, enhancing transparency and usability."
                }
            ]
        },
        {
            text: "Web & Mobile Apps",
            arr: [
                {
                    title: "Zest AI Backend",
                    link: "https://zest.ai/",
                    logo: "https://www.zest.ai/wp-content/themes/zest/images/Zest--logo.png",
                    desc: "Architected and built backend systems for AI-driven credit underwriting using Node.js. Integrated machine learning models to automate loan workflows, reducing manual intervention and improving decision-making accuracy."
                },
                {
                    title: "Fantom Wallet",
                    link: "https://fantom.foundation/",
                    logo: "https://fantom.foundation/favicon.ico",
                    desc: "Developed a decentralized wallet enabling secure fund management, token staking, and seamless interaction with the Fantom blockchain. Ensured compliance with industry security standards and delivered an intuitive user experience."
                },
                {
                    title: "FoodClub",
                    link: "https://foodclub.com/",
                    logo: "https://foodclub.com/_next/static/media/food-club-logo.d2e87072.svg",
                    desc: "Worked on mobile applications at Innow8 Apps Pvt Ltd, focusing on enhancing user engagement and streamlining order management processes. Leveraged React Native for cross-platform compatibility and performance optimization."
                },
                {
                    title: "Phantom Wallet Mobile App",
                    link: "https://play.google.com/store/apps/details?id=app.phantom&hl=en_IN",
                    logo: "https://phantom.com/favicon/favicon-32x32.png",
                    desc: "Developed a mobile app for Phantom Wallet using React Native at Innow8 Apps Pvt Ltd. Enabled secure crypto transactions, wallet management, and integration with Solana blockchain, ensuring a smooth user experience."
                },
                {
                    title: "Poptikr",
                    link: "https://www.poptikr.com/",
                    logo: "https://www.poptikr.com/favicon.ico",
                    desc: "Freelance project involving full-stack development of a dynamic e-commerce platform. Built scalable APIs, optimized database queries, and implemented responsive UI/UX designs to enhance customer satisfaction."
                }
            ]
        },
        {
            text: "Cryptocurrency Exchanges",
            arr: [
                {
                    title: "Agencia RXE",
                    link: "https://agenciarxe.com/",
                    logo: "https://agenciarxe.com/wp-content/uploads/2023/09/logo-1.svg",
                    desc: "Worked on Agencia RXE, a cryptocurrency exchange platform ensuring secure and scalable trading solutions."
                }
            ]
        },
        {
            text: "E-commerce & Business Solutions",
            arr: [
                {
                    title: "Holland & Barrett PIM Services",
                    link: "https://www.hollandandbarrett.com/",
                    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAxlBMVEUHV0z///8AVkoOSkL0+fkZWE8AU0cARTj6//+2x8VJdmwARzv8//uawzYAWEvT4N6Co5/K1NNuj4gAT0gATUEAUEEASTgATkwAVU0AVUWYr6qgtbIAUj6Cs0ifxTIASkF6mpVGfj5tmkGFtkOCrUY6eECMoqBUjEORwkekz0EtaUPA0tFdgnwAUjdmnURDekZfkjkaXzxpgn1spUQmXU4tbkFnl0yYzUgAQUEgYUSXvkF2qU7l7+40Y1tSiEdRhjQAOSyBvlJcecaZAAADuElEQVRoge2WfXOiOhTGY9oGhQ29NqSEFYIUvYCtWsul3vrS3f3+X2pPEHxZwTvemZ3ZP/J0OiMM+eXw5DkhCGlpaWlpaWlpaWn94fIQshH+LWhMXBY6nvs/R1uG4RzfcAzD2l8wP3oK4tHTmImTIZaSAU9aDrnAvuv3+w/EPrD/7vd7rL5IUprFT7M0iyeixmPW6+/1PHgxvDY4MTudTs86wI17uOGUHovpLJN0zgh3X2m6sEVdz23nWPcmb4d/AfjhBsC7nZsS7n1SmkWOh4WwUvnEBcJYLW4J/7JTiX/j9tXwMKUy9m075MLNaczFdMIE3sG7x7V3/2lO0wW4KCiV7wwt0uX430AG4XiZpR8V/FYtJ0TBfFb0Xng1fEwpTTCbSbrKM5nf5JLKNangd6UTmBg9gG+aI/OfcMJGwATzCzWLXPoncIS9rSp92+jLJc+nK0pzx/0EtMxmBH2sR9+WvkDHcGR/78KA6+FsBiV/eDxJ02DOERbuTbLkp3BhW7C23evhwg8kXXNMwjD0BHFIkWc59NcJnL8pz50mdtVEBnFqfT94jjxnTYEOzUO8IhmlS0kLUXlePf64VaEfPLbDn98e9nrZwI3Klo8oiWWWOz6L4kyClt9YHcXBV6WBykrnlrfmvEEAx8L5hCaCxaTv4XtGVWRWY1ect3/ntq3/W+HIUcuZxaOAUj+lQR6rIEaufQ7fmM2uNMJLz8U8g3AnnIXFj+mPImT8Hd5iWZxXDmkZWo2bSwm/H/6117Dy3IF+pHFYhgb+gOnEkPdZ3aHDSj2VxI7Z2KJVWvhedVq8FFCJGmNX/+RVTccqOOQLniZ8F5dnowXemHPhQ3vSCB+9LlGtujrdW0DOi/KmMeitTcRhAWly/LYMTJfBGRz5qvRGX1rhrvI8OBqCGeRGvrIzOFer9HIVHBeQFtWQe03gmk7wGZxcXzligXLh4GV5veboV7gxVJ5bTT3aCvfsRQq0pPo82mwMXZou/BrOjcedHtQX795oCnp75b4AY6SMdscMvzRljr3all6lTdlFjZZfgNvCjVawAcwZ8hGbLFUyy4nO2h92RauJfXE/98kYnAEkdouVlGnkItEI/9rc/Yhsf5nY6sN7huV+Diepaa6+cIsE6g4WzBMNlW8GW6ftnEpM0zw+xGLbNLe1gx52xgGcurIsjg57trc1D7ozLpwWbQ+T04kJwYfTn3D5IslfC5/tz4owhOzltR4Uy0obZzz5KVwgH9/6Pad1LS0tLS0tLS0trT9XPwFWGWMDkfv9XwAAAABJRU5ErkJggg==",
                    desc: "Worked on Product Information Management (PIM) services using Node.js at Innow8 Apps Pvt Ltd. Implemented unit testing and automated workflows to improve data accuracy and operational efficiency."
                },
                {
                    title: "Seven Store",
                    link: "https://www.sevenstore.com/",
                    logo: "https://www.sevenstore.com/favicon.ico",
                    desc: "Freelance project focused on integrating Stripe payment gateway for a seamless checkout experience. Enhanced payment processing speed and ensured PCI compliance for secure transactions."
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
                    desc: "Developed a browser extension for the 5ireChain ecosystem, enabling users to manage assets, perform transactions, and interact with decentralized applications directly from their web browsers. Prioritized security and ease of use."
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
                    desc: "Developed backend and frontend for the Nexa Explorer using Node.js and Next.js. Implemented features like real-time block tracking, transaction history, and network analytics to enhance transparency and usability."
                },
                {
                    title: "GetCalculators",
                    link: "https://getcalculators.com/",
                    logo: "https://getcalculators.com/static/media/x-large-logo.ed398091.png",
                    desc: "Worked on a React and Node.js-based tool at eNest Technologies Pvt Ltd. Designed and implemented calculators for various use cases, ensuring accurate results and an intuitive user interface."
                }
            ]
        }
    ];

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