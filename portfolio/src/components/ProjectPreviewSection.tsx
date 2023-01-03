
function ProjectPreviewSection() {
    const projectPreviewItems = [
        ["Employee Reimbursement System", "A RESTful API used to create and authenticate users, as well as allow them to manage and create reimbursement tickets.", "https://i5.walmartimages.com/dfw/4ff9c6c9-a803/k2-_0bd0aeed-88ce-49fe-93d6-dee7d0ede6b4.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"],
        ["Sylvester Social", "Full stack social media Single Page Application (SPA). Includes React.js front-end using TypeScript, and Java Spring Boot backend.", "https://i5.walmartimages.com/dfw/4ff9c6c9-a803/k2-_0bd0aeed-88ce-49fe-93d6-dee7d0ede6b4.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"],
        ["React Bad Bank", "A banking web app used for the sole purpose of studying front end development with React.js and learn advanced context techniques.", "https://i5.walmartimages.com/dfw/4ff9c6c9-a803/k2-_0bd0aeed-88ce-49fe-93d6-dee7d0ede6b4.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"],
        ["Portfolio Site", "THIS portfolio SPA was made to practice and solidify TypeScript and React.js knowledge. TailwindCSS is also added for aesthetics.", "https://i5.walmartimages.com/dfw/4ff9c6c9-a803/k2-_0bd0aeed-88ce-49fe-93d6-dee7d0ede6b4.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"],
        ["Library CLI", "A command line program used to manage a library of different media types. Used to cement basics of Core Java.", "https://i5.walmartimages.com/dfw/4ff9c6c9-a803/k2-_0bd0aeed-88ce-49fe-93d6-dee7d0ede6b4.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"]
    ]

    return (
        <div className="grid grid-cols-2 gap-7 m-5 ">
            {projectPreviewItems.map(([title, description, link]) => {
                return (
                    <div className="flex flex-col text-center">
                        <img src={link} alt={"picture of "+ title} />
                        <p className="font-mono text-lg">{title}</p>
                        <p>{description}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default ProjectPreviewSection;