import { CommandLineIcon } from "@heroicons/react/24/solid"
import { WindowIcon } from "@heroicons/react/24/solid"
import { ComputerDesktopIcon } from "@heroicons/react/24/solid"
function SkillsCards() {
    const cards = [
        [
            "Frontend Development",
            <WindowIcon/>,
            "I enjoy making websites with clean designs and responsive interactions, on mobile or desktop.",
            "Languages and Frameworks",
            "HTML, CSS, JavaScript, React.js, TailwindCSS, Bootstrap, Jest, Node.js"
        ], [
            "Backend Development",
            <CommandLineIcon/>,
            "I value reusable, sustainable, and clean code, and being able to modularize programs and functionality. ",
            "Skills",
            "Core Java, Spring Boot, Docker, Git, RESTful API Construction, JUnit, Firebase, AWS"
        ], [
            "Material",
            <ComputerDesktopIcon/>,
            "I love creating fresh and beautiful branding and marketing materials that leave a lasting impact.",
            "Media",
            "Photography, film editing, and graphic design using Adobe Creative Suite"
        ]
    ];
    return (

        <div className="pt-20 flex gap-10 flex-col md:flex-row md:flex-wrap justify-center px-10">
            {cards.map(([skillGroup, link, description, skills, skillsList]) => {
                return (
                    <div className="flex-1 md:flex-initial lg:w-1/4 rounded-lg flex flex-col">
                        <div className="w-20 self-center">{link}</div>
                        <h3 className="p-8 text-3xl font-bold text-center">{skillGroup}</h3>
                        <div className="text-lg text-center">
                            <div className=" border-grey-light border-b border-solid pb-4">
                                {description}
                            </div>
                            <div className=" font-bold border-grey-light border-b border-solid py-4">
                                {skills}
                            </div>
                            <div className="py-4">
                                {skillsList}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default SkillsCards;