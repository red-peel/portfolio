import AboutCard from "../components/AboutCard";
import SkillsCards from "../components/SkillsCards";

function AboutPage(){
    return (
        <div className="flex-1 flex flex-col gap-10">
            <AboutCard/>
            <SkillsCards/>
        </div>
    )
}

export default AboutPage;