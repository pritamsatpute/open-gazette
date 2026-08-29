// Open Gazette article data
const articles = [
    {
        id: "technology-shaping-life-work-think",
        slug: "technology-shaping-life-work-think",
        title: "How technology is shaping the way we live, work and think",
        excerpt: "Explore the ideas, innovations and digital transformations shaping the future around us.",
        category: {
            name: "Technology",
            slug: "technology"
        },
        image: {
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
            alt: "Digital network and technology visualization"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-25",
        updatedAt: "2026-08-25",
        readingTime: 6,
        tags: [
            "Technology"
        ],
        featured: true,
        trending: false,
        latest: true
    },

    {
        id: "modern-businesses-grow",
        slug: "modern-businesses-grow",
        title: "The ideas changing the way modern businesses grow",
        excerpt: "New approaches to creativity, technology and collaboration are changing how businesses build for the future.",
        category: {
            name: "Business",
            slug: "business"
        },
        image: {
            src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
            alt: "Team discussing ideas in a modern workspace"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-24",
        updatedAt: "2026-08-24",
        readingTime: 5,
        tags: [
            "Business"
        ],
        featured: false,
        trending: false,
        latest: true
    },

    {
        id: "artificial-intelligence-everyday-life",
        slug: "artificial-intelligence-everyday-life",
        title: "Why artificial intelligence is becoming part of everyday life",
        excerpt: "Artificial intelligence is moving beyond experimentation and becoming part of the tools people use every day.",
        category: {
            name: "AI",
            slug: "ai"
        },
        image: {
            src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
            alt: "Artificial intelligence visualization"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-23",
        updatedAt: "2026-08-23",
        readingTime: 7,
        tags: [
            "AI",
            "Technology"
        ],
        featured: false,
        trending: false,
        latest: true
    },

    {
        id: "intentional-everyday-life",
        slug: "intentional-everyday-life",
        title: "Small changes that can make everyday life feel more intentional",
        excerpt: "A collection of simple ideas for creating a more balanced and meaningful daily routine.",
        category: {
            name: "Lifestyle",
            slug: "lifestyle"
        },
        image: {
            src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
            alt: "Person writing at a desk near a window"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-20",
        updatedAt: "2026-08-20",
        readingTime: 4,
        tags: [
            "Lifestyle"
        ],
        featured: false,
        trending: false,
        latest: true
    },

    {
        id: "technology-next-generation-digital-experiences",
        slug: "technology-next-generation-digital-experiences",
        title: "The technology trends shaping the next generation of digital experiences",
        excerpt: "From artificial intelligence to connected devices, technology continues to influence how people interact with the world.",
        category: {
            name: "Technology",
            slug: "technology"
        },
        image: {
            src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            alt: "Computer circuit board and modern technology"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-19",
        updatedAt: "2026-08-19",
        readingTime: 8,
        tags: [
            "Technology",
            "AI"
        ],
        featured: false,
        trending: false,
        latest: true
    },

    {
        id: "software-modern-work",
        slug: "software-modern-work",
        title: "Why software continues to shape the future of modern work",
        excerpt: "Software continues to influence how people collaborate, communicate and create across modern workplaces.",
        category: {
            name: "Technology",
            slug: "technology"
        },
        image: {
            src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
            alt: "Laptop displaying computer code"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-18",
        updatedAt: "2026-08-18",
        readingTime: 5,
        tags: [
            "Technology",
            "Software"
        ],
        featured: false,
        trending: false,
        latest: true
    },

    {
        id: "tools-work-smarter-stay-connected",
        slug: "tools-work-smarter-stay-connected",
        title: "The tools helping people work smarter and stay connected",
        excerpt: "A closer look at the digital tools helping people stay productive, connected and focused.",
        category: {
            name: "Technology",
            slug: "technology"
        },
        image: {
            src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
            alt: "Laptop and workspace"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-17",
        updatedAt: "2026-08-17",
        readingTime: 4,
        tags: [
            "Technology",
            "Productivity"
        ],
        featured: false,
        trending: false,
        latest: true
    },

    {
        id: "future-of-artificial-intelligence",
        slug: "future-of-artificial-intelligence",
        title: "The future of artificial intelligence is arriving faster than expected",
        excerpt: "Artificial intelligence is moving from experimentation into everyday products, workplaces and creative tools at an extraordinary pace.",
        category: {
            name: "Artificial Intelligence",
            slug: "artificial-intelligence"
        },
        image: {
            src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
            alt: "Artificial intelligence visualization"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-26",
        updatedAt: "2026-08-26",
        readingTime: 8,
        tags: [
            "Artificial Intelligence",
            "Technology"
        ],
        featured: false,
        trending: true,
        latest: false
    },

    {
        id: "next-generation-technology-personal",
        slug: "next-generation-technology-personal",
        title: "Why the next generation of technology will feel more personal",
        excerpt: "Technology is becoming increasingly adaptive as digital experiences respond more closely to the people using them.",
        category: {
            name: "Technology",
            slug: "technology"
        },
        image: {
            src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
            alt: "Technology and computer circuit board"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-25",
        updatedAt: "2026-08-25",
        readingTime: 6,
        tags: [
            "Technology"
        ],
        featured: false,
        trending: true,
        latest: false
    },

    {
        id: "changing-ideas-modern-businesses",
        slug: "changing-ideas-modern-businesses",
        title: "The changing ideas behind how modern businesses are built",
        excerpt: "Modern businesses are evolving as new ideas about technology, collaboration and growth reshape the way companies operate.",
        category: {
            name: "Business",
            slug: "business"
        },
        image: {
            src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
            alt: "Team collaborating in a modern workspace"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-24",
        updatedAt: "2026-08-24",
        readingTime: 5,
        tags: [
            "Business"
        ],
        featured: false,
        trending: true,
        latest: false
    },

    {
        id: "quiet-changes-digital-life",
        slug: "quiet-changes-digital-life",
        title: "The quiet changes transforming everyday digital life",
        excerpt: "Small but meaningful changes in technology are quietly reshaping how people interact with the digital world every day.",
        category: {
            name: "Digital Life",
            slug: "digital-life"
        },
        image: {
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
            alt: "Digital network visualization"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-23",
        updatedAt: "2026-08-23",
        readingTime: 7,
        tags: [
            "Digital Life",
            "Technology"
        ],
        featured: false,
        trending: true,
        latest: false
    },

    {
        id: "rethinking-how-people-spend-time",
        slug: "rethinking-how-people-spend-time",
        title: "Why people are rethinking the way they spend their time",
        excerpt: "Changing priorities are encouraging people to reconsider how they organize their time, work and everyday lives.",
        category: {
            name: "Lifestyle",
            slug: "lifestyle"
        },
        image: {
            src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
            alt: "Person working thoughtfully at a desk"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-22",
        updatedAt: "2026-08-22",
        readingTime: 4,
        tags: [
            "Lifestyle"
        ],
        featured: false,
        trending: true,
        latest: false
    },

    {
        id: "tools-modern-teams-collaborate",
        slug: "tools-modern-teams-collaborate",
        title: "The tools changing how modern teams collaborate",
        excerpt: "New digital tools are changing the way teams communicate, create and work together.",
        category: {
            name: "Technology",
            slug: "technology"
        },
        image: {
            src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
            alt: "Modern laptop workspace"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-21",
        updatedAt: "2026-08-21",
        readingTime: 5,
        tags: [
            "Technology",
            "Productivity"
        ],
        featured: false,
        trending: true,
        latest: false
    },

    {
        id: "future-of-work",
        slug: "future-of-work",
        title: "What the future of work could look like",
        excerpt: "Workplaces continue to evolve as technology and changing expectations reshape everyday professional life.",
        category: {
            name: "Work",
            slug: "work"
        },
        image: {
            src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
            alt: "People collaborating around a table"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-20",
        updatedAt: "2026-08-20",
        readingTime: 6,
        tags: [
            "Work",
            "Technology"
        ],
        featured: false,
        trending: true,
        latest: false
    },

    {
        id: "habits-shaping-life-online",
        slug: "habits-shaping-life-online",
        title: "The habits that are shaping life online",
        excerpt: "The way people consume information and connect with each other continues to change rapidly.",
        category: {
            name: "Digital Life",
            slug: "digital-life"
        },
        image: {
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
            alt: "Person using a laptop"
        },
        author: {
            name: "Open Gazette"
        },
        publishedAt: "2026-08-19",
        updatedAt: "2026-08-19",
        readingTime: 4,
        tags: [
            "Digital Life",
            "Technology"
        ],
        featured: false,
        trending: true,
        latest: false
    }
];

