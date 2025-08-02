const siteConfig = {
    // SEO and Meta Settings
    seo: {
        title: "IntegriStruct | Home",
        description: "To simplify the path to construction by delivering permit-ready design solutions with accuracy, speed, and compliance at the core of everything we do.",
        ogTitle: "Integrity Meets Engineering Excellence",
        ogImage: "assets/img/opengraph.png",
        ogUrl: "https://integristruct.com/",
        siteName: "IntegriStruct"
    },

    // Header Settings
    header: {
        logo: "assets/img/logo.png",
        menuItems: [
            { text: "Home", link: "#hero", active: true },
            { text: "About", link: "#about" },
            { text: "Services", link: "#services" },
            { text: "Portfolio", link: "#portfolio" },
            { text: "Team", link: "#team" },
            { text: "Contact", link: "#contact" }
        ],
        ctaButton: {
            text: "Let's Talk",
            link: "https://integristruct.zohobookings.eu/#/integristruct"
        }
    },

    // Hero Section
    hero: {
        backgroundImage: "assets/img/hero-bg.jpg",
        heading: "Design • Approve • Build",
        description: "To simplify the path to construction by delivering permit-ready design solutions with accuracy, speed, and compliance at the core of everything we do.",
        ctaButton: {
            text: "Let's Talk",
            link: "https://integristruct.zohobookings.eu/#/integristruct"
        }
    },

    // Vision & Mission Section
    visionMission: {
        sectionTitle: "Our Vision & Mission",
        subTitle: "What drives IntegriStruct forward",
        vision: {
            title: "✨ Vision",
            text: "Our vision is to deliver industry-grade designs and permit-ready packages at affordable prices — empowering homeowners, builders, and small businesses to move confidently through the permitting process. We believe that professional engineering should be a gateway, not a barrier, to safe and successful construction."
        },
        mission: {
            title: "🚀 Mission",
            text: "We're dedicated engineers who are driven by a mission to make high-quality engineering accessible to everyone. We deliver industry-grade engineering services with speed, accuracy, and full code compliance — enabling seamless permitting and project execution across the United States and Canada."
        }
    },

    // About Section
    about: {
        title: "Engineering Simplicity into Every Structure",
        mainImage: "assets/img/about.jpg",
        paragraphs: [
            "At IntegriStruct, we believe great engineering isn't just about calculations — it's about clarity, compliance, and collaboration. We are a dedicated civil and structural engineering firm that provides complete, permit-ready drawing packages for residential, commercial, and light industrial projects across the U.S. and Canada. With a network of licensed professionals in every state and province, we ensure that every set of drawings we deliver is stamped, code-compliant, and ready for submission.",
            "Our team combines technical expertise with a client-first mindset to make the permitting process seamless and stress-free. Whether it's a deck addition, a full-scale new build, or a renovation requiring structural assessment, we bring precision, responsiveness, and regulatory insight to every project."
        ],
        italicText: "We help homeowners, contractors, architects, and developers save time and reduce risk by handling the most complex part of construction: getting approved.",
        specialties: {
            title: "We specialize in:",
            items: [
                "Permit-ready drawing sets, tailored to local codes and jurisdictions.",
                "Licensed engineering stamps for all U.S. states and Canadian provinces.",
                "Responsive revisions and support during permit review and plan checks."
            ]
        },
        additionalText: "At IntegriStruct, we see every project as a partnership. Whether you're building your dream home or managing dozens of developments, our goal is the same: to help you move forward with confidence, compliance, and clarity — every step of the way.",
        secondaryImage: "assets/img/about-2.jpg"
    },

    // Stats Section
    stats: {
        items: [
            {
                icon: "bi bi-emoji-smile color-blue",
                count: 232,
                label: "Happy Clients"
            },
            {
                icon: "bi bi-journal-richtext color-orange",
                count: 521,
                label: "Projects"
            },
            {
                icon: "bi bi-headset color-green",
                count: 1463,
                label: "Hours Of Support"
            },
            {
                icon: "bi bi-people color-pink",
                count: 35,
                label: "Engineers"
            }
        ]
    },

    // Services Section
    services: {
        title: "Services",
        subtitle: "Featured Services",
        items: [
            {
                image: "assets/img/services-1.webp",
                icon: "bi bi-diagram-3",
                title: "Structural Engineering",
                description: "From beam sizing to foundation detailing, we provide structural engineering services tailored for residential, commercial, and renovation projects. Our licensed engineers ensure every drawing is safe, code-compliant, and optimized for both strength and efficiency. Whether it's a new home, multi-story structure, or load-bearing wall removal, we've got you covered."
            },
            {
                image: "assets/img/services-2.jpg",
                icon: "bi bi-layout-text-window",
                title: "Architectural & Permit Drafting",
                description: "Our team delivers complete architectural drawing sets designed to meet local zoning and building code requirements. We create detailed, clean, and submission-ready plans — including site layouts, floor plans, elevations, and sections — ensuring a smoother path to approval for any project."
            },
            {
                image: "assets/img/services-3.jpg",
                icon: "bi bi-plug",
                title: "MEP Coordination",
                description: "We offer coordinated Mechanical, Electrical, and Plumbing (MEP) drawings to support efficient, code-compliant building systems. Whether as part of a full permit package or standalone service, our MEP designs help avoid clashes, reduce construction delays, and ensure seamless integration with architectural and structural plans."
            }
        ]
    },

    // Clients Section
    clients: {
        logos: [
            "assets/img/clients/client-1.png",
            "assets/img/clients/client-2.png",
            "assets/img/clients/client-3.png",
            "assets/img/clients/client-4.png",
            "assets/img/clients/client-5.png",
            "assets/img/clients/client-6.png"
        ]
    },

    // Features Section
    features: {
        tabs: [
            {
                id: "features-tab-1",
                icon: "bi bi-binoculars",
                title: "Proven Structural Logic",
                heading: "Built for Strength. Signed with Confidence.",
                description: "We design with both performance and practicality in mind — ensuring your structures pass review, stand the test of time, and are economically built.",
                image: "assets/img/working-1.jpg",
                lists: {
                    "Why it matters:": [
                        "Our engineers blend deep code knowledge with constructability insight.",
                        "Every drawing is optimized for material efficiency and inspection approval.",
                        "You get fast, accurate solutions backed by engineers licensed in your region."
                    ],
                    "What sets us apart:": [
                        "Code-compliant designs in all U.S. states and Canada",
                        "Expert analysis for load removal, additions, retrofits",
                        "Revisions handled quickly and with engineer oversight"
                    ]
                }
            },
            {
                id: "features-tab-2",
                icon: "bi bi-box-seam",
                title: "Drafting with Purpose",
                heading: "Plans That Speak Permit Language.",
                description: "We don't just draw — we communicate clearly with building officials, helping you avoid delays and win approvals faster.",
                image: "assets/img/working-2.jpg",
                lists: {
                    "Why it matters:": [
                        "Our drawings are clean, compliant, and complete — every line has a purpose.",
                        "We stay up to date with local zoning and permitting codes across regions.",
                        "From initial layouts to final sets, your plans reflect your vision and the code."
                    ],
                    "Why choose us:": [
                        "We adapt to both residential and commercial scopes.",
                        "Fast turnaround and collaborative revision process.",
                        "Consistent formatting and detail across all drawing sets."
                    ]
                }
            },
            {
                id: "features-tab-3",
                icon: "bi bi-brightness-high",
                title: "Integrated MEP Support",
                heading: "No Clashes. No Confusion. Just Clear MEP Design.",
                description: "Our coordinated Mechanical, Electrical, and Plumbing designs streamline construction and avoid last-minute delays in the field or at the city desk.",
                image: "assets/img/working-3.jpg",
                lists: {
                    "Why it matters:": [
                        "Many permits stall due to missing or misaligned MEP info. We fix that.",
                        "We align all MEP systems with your structural and architectural plans.",
                        "You save time, reduce RFIs, and avoid rework."
                    ],
                    "Your advantage:": [
                        "One point of contact for full-scope MEP coordination.",
                        "Permit-ready and stamped by licensed professionals.",
                        "Smart system design that supports long-term building performance."
                    ]
                }
            },
            {
                id: "features-tab-4",
                icon: "bi bi-command",
                title: "Permit-Focused Delivery",
                heading: "Code-Ready. Stamp-Ready. Stress-Free.",
                description: "Every drawing we deliver is shaped by what cities look for and what builders need — making us your best partner for a smooth permit process.",
                image: "assets/img/working-4.jpg",
                lists: {
                    "Why it matters:": [
                        "We speak permit language fluently and stay current with evolving regulations.",
                        "We've helped countless clients avoid rejections and save weeks on reviews.",
                        "With us, it's not just engineering — it's approval strategy."
                    ],
                    "Why it works:": [
                        "Every set stamped by an appropriately licensed engineer.",
                        "Fast, professional responses to city comments.",
                        "Drawings formatted for your jurisdiction's submittal guidelines."
                    ]
                }
            }
        ]
    },

    // Portfolio Section
    portfolio: {
        title: "Portfolio",
        subtitle: "FEATURED PORTFOLIO",
        filters: ["All", "Structural Engineering", "Civil Engineering", "Architectural Plans", "MEP"],
        items: [
            {
                category: "structural",
                image: "assets/img/portfolio/structural-1.png",
                title: "University of Houston RAD Center",
                location: "Houston, Texas",
                description: "Foundation plan, floor framing plan, roof framing plan, structural sections and details, elevations, lateral load resisting system, column layout and schedule, beam schedule, equipment support framing"
            },
            {
                category: "civil",
                image: "assets/img/portfolio/civil-1.png",
                title: "Boy Scouts of America New Camp Strake",
                location: "San Jacinto County, Texas",
                description: "Site plan, grading plan, Drainage and stormwater plan, utility plan, foundation and structural site details"
            },
            {
                category: "architectural",
                image: "assets/img/portfolio/branding-1.png",
                title: "NEW DWELLING DESIGN",
                location: "7709 Lakeview Circle, Lot 5R, Block 2, Of Eagle Mountain Lake Estates, TX, 76179",
                description: "NEW DWELLING DESIGN"
            },
            {
                category: "mep",
                image: "assets/img/portfolio/mep-1.png",
                title: "University Basketball Training Facility",
                location: "Manhattan, Kansas",
                description: "HVAC system layout, Equipment schedules, Lighting and power distribution, Fire alarm system, Plumbing fixtures and piping, Data and communication outlets"
            },
            {
                category: "structural",
                image: "assets/img/portfolio/app-2.png",
                title: "Private Lake House",
                location: "10630 Sunset Grove Brighton, Michigan 48116",
                description: "Private Lake House"
            },
            {
                category: "civil",
                image: "assets/img/portfolio/product-2.png",
                title: "YASI'S FALLBROOK",
                location: "RAINBOW CRUST RD, CALIFORNIA",
                description: "YASI'S FALLBROOK"
            },
            {
                category: "architectural",
                image: "assets/img/portfolio/architectural-1.png",
                title: "555 Grand Rim Concept Design",
                location: "San Jose, California",
                description: "House Renovation"
            },
            {
                category: "mep",
                image: "assets/img/portfolio/mep-3.png",
                title: "Household MEP",
                location: "Philadelphia, PA",
                description: "Lighting Layout, Power Layout, Communication Layout, Fire Alarm Layout, Water Supply Layout, Drainage, Mechanical Layout, Technical Details"
            },
            {
                category: "structural",
                image: "assets/img/portfolio/structural-2.png",
                title: "Investigation Field Office",
                location: "Tampa, Florida",
                description: "Foundation plan, Floor framing plan, Roof framing plan, Structural sections, Wall elevations, Column layout and schedule, Beam layout and schedule, Stair and ramp details, Door and window lintel schedules, Structural connection details, Wind and seismic bracing details, Coordination notes for MEP penetration and loads, Structural general specifications"
            },
            {
                category: "civil",
                image: "assets/img/portfolio/civil-2.png",
                title: "Houston Botanic Garden",
                location: "Houston, Texas",
                description: "Site Plan, Grading & Drainage Plan, Utility Plan, Landscape Planting Plan, Hardscape Plan, Irrigation Plan, Lighting Plan, Accessibility Plan, Construction Details"
            },
            {
                category: "architectural",
                image: "assets/img/portfolio/branding-3.png",
                title: "House Plan Zone",
                location: "",
                description: "Site Plan, Floor Plans, Roof Plan, Elevations, Building Sections, Window and Door Schedule"
            },
            {
                category: "mep",
                image: "assets/img/portfolio/mep-2.png",
                title: "University Parking Garage",
                location: "Atlanta, Georgia",
                description: "Mechanical Ventilation Plan, Fire Suppression Plan, Electrical Lighting Plan, Power Distribution Plan, Fire Alarm System Plan, Security System Layout, EV Charging Station Layout, Plumbing Drainage Plan, Water Supply Plan."
            }
        ],
        driveLink: "https://drive.google.com/drive/folders/1L7d4qA4_1c_NcA-lliU_edWBvhc6zLOD"
    },

    // Team Section
    team: {
        title: "Team",
        subtitle: "CHECK OUR TEAM",
        members: [
            {
                image: "assets/img/team/joseph_ceo.jpg",
                name: "Joseph A Martore",
                position: "Founder/CEO",
                license: "MA licesned S.E",
                profileLink: "https://elicensing21.mass.gov/CitizenAccess/GeneralProperty/LicenseeDetail.aspx?LicenseeNumber=31994&LicenseeType=Structural+Engineer"
            },
            {
                image: "assets/img/team/karyna.jpg",
                name: "Karyna Uhlova",
                position: "Finance & Operations Manager",
                license: null,
                profileLink: null
            },
            {
                image: "assets/img/team/david.jpg",
                name: "David Bonifacic",
                position: "Senior Structural Engineer",
                license: "Licensed in Indiana",
                profileLink: "https://mylicense.in.gov/everification/Details.aspx?result=1b1fd9e5-b747-4e6e-9677-48e4486d2e02"
            },
            {
                image: "assets/img/team/niles.jpg",
                name: "Niles Daughtry",
                position: "Project Manager",
                license: null,
                profileLink: "https://www.upwork.com/freelancers/~01d9b4ac1fd659b91f"
            },
            {
                image: "assets/img/team/hunter.jpg",
                name: "Hunter Parish",
                position: "Project Manager",
                license: null,
                profileLink: "https://www.upwork.com/freelancers/~01b1c99daefbe19af4"
            },
            {
                image: "assets/img/team/william.jpg",
                name: "William Bird",
                position: "Senior Civl Engineer",
                license: "Licensed in 20+ states",
                profileLink: "https://search.dca.ca.gov/details/7500/C/53093/210b663481477cdbfd393a28b145206a"
            },
            {
                image: "assets/img/team/yurii.jpg",
                name: "Yurii Shafran",
                position: "Professional Engineer",
                license: null,
                profileLink: "https://www.freelancer.com/u/YuriiShafran"
            },
            {
                image: "assets/img/team/elizabeth.jpg",
                name: "Elizabeth Balderas",
                position: "Senior Architect",
                license: "Licensed in Texas",
                profileLink: "https://indreg.tbae.texas.gov/Reports/IndividualSearch"
            },
            {
                image: "assets/img/team/Krishnendu.jpg",
                name: "Krishnendu Mukherjee",
                position: "Senior Professional Engineer",
                license: "Licesned in RI",
                profileLink: "https://elicensing.ri.gov/Lookup/LicenseLookup.aspx"
            },
            {
                image: "assets/img/team/travis.jpg",
                name: "Travis James Arnzen",
                position: "Senior Electrical Engineer",
                license: "Licensed in California",
                profileLink: "https://search.dca.ca.gov/details/7500/E/23431/d3523cb8796d9bae3f1f2a6c9329dace"
            },
            {
                image: "assets/img/team/jesse.jpg",
                name: "Jesse Castro",
                position: "Senior Mechanical Engineer",
                license: "Licensed in California",
                profileLink: "https://search.dca.ca.gov/details/7500/M/35300/29e91b7cbfe30a65b1f44d5fe7728f56"
            }
        ]
    },

    // Contact Section
    contact: {
        title: "Contact",
        subtitle: "Let's Talk — Book Your Free Discovery Call Now",
        schedule: {
            icon: "bi bi-calendar-event",
            title: "Schedule a Meeting",
            hours: "We're available Monday to Friday, 9AM - 8PM EST.",
            buttonText: "Schedule a time with us",
            buttonLink: "https://integristruct.zohobookings.eu/#/integristruct"
        },
        phone: {
            number: "+1 830 300 8741"
        },
        email: {
            address: "support@integristruct.com"
        },
        address: {
            mapEmbed: "https://www.google.com/maps?q=3148+36th+Street,+Astoria,+NY+11106&z=14&output=embed",
            text: "3148 36th Street, Astoria, NY 11106"
        }
    },

    // Footer
    footer: {
        logo: "assets/img/logo.png",
        contact: {
            address: "3148 36th Street\nAstoria, NY 11106",
            phone: "+1 830 300 8741",
            email: "support@integristruct.com"
        },
        social: {
            twitter: "",
            facebook: "",
            instagram: "",
            linkedin: ""
        },
        newsletter: {
            title: "Our Newsletter",
            description: "Subscribe to our newsletter and receive the latest news about our products and services!",
            buttonText: "Subscribe",
            successMessage: "Your subscription request has been sent. Thank you!",
            loadingMessage: "Loading",
            errorMessage: "An error has occurred. Please try again."
        },
        copyright: {
            sitename: "IntegriStruct",
            year: "2025",
            designer: {
                name: "Vasyl Nazarchuk",
                url: "https://vasylnazarchuk.vercel.app"
            }
        }
    }
};

// Export the configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
} 