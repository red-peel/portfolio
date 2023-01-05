
function ProjectPreviewSection() {
    //https://imgur.com/a/f2BrARK
    const projectPreviewItems = [
        ["Employee Reimbursement System", 
            "A RESTful API used to create and authenticate users, as well as allow them to manage and create reimbursement tickets.", 
            "https://i.imgur.com/9CK0sA4.png",
            "https://github.com/221114-Java-React/Elias-Gonzalez-P1"
        ],
        ["Sylvester Social", 
            "Full stack social media Single Page Application (SPA). Includes React.js front-end using TypeScript, and Java Spring Boot backend.", 
            "https://i.imgur.com/1MsBoEC.png",
            "https://github.com/221114-Java-React/PrimaryKeys-P2-Frontend"
        ],
        ["React Bad Bank", 
            "A banking web app used for the sole purpose of studying front end development with React.js and learn advanced context techniques.", 
            "https://i.imgur.com/XCAQkkh.png", 
            "https://github.com/red-peel/ReactBadBank"
        ],
        ["Portfolio Site", 
            "THIS portfolio SPA was made to practice and solidify TypeScript and React.js knowledge. TailwindCSS is also added for aesthetics.", 
            "https://i.imgur.com/PwwwMAs.png",
            "https://github.com/red-peel/portfolio"
        ],
        ["Library CLI", 
            "A command line program used to manage a library of different media types. Used to cement basics of Core Java.", 
            "https://i.imgur.com/MdcuUbt.png",
            "https://github.com/red-peel/librarySearch"
        ]
    ]

    return (
        <div className="flex flex-col pt-10 md:pt-20 ">
            <h2 className="font-thin text-center text-xl md:text-5xl pb-5 md:pb-10">PROJECTS</h2>
            <div className="grid grid-cols-1 p-5 md:grid-cols-2 gap-7 md:mx-40 ">
                {projectPreviewItems.map(([title, description, img, link]) => {
                    return (
                        <a href={link} className="flex flex-col text-center rounded shadow-lg p-5 bg-slate-100">
                            <img className="rounded border-2 border-gray-200" src={img} alt={"picture of " + title} />
                            <p className="text-lg font-thin">{title.toUpperCase()}</p>
                            <p>{description}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectPreviewSection;