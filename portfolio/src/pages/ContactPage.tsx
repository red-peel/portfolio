import ContactCard from "../components/ContactCard";


function ContactPage() {
    return (
        <section className="flex-1 flex flex-col text-center gap-10 items-center md:pt-48 bg-hero-pattern text-white">
            <h1 className="font-bold text-7xl md:text-9xl bg-black py-5 w-full">HI! LETS TALK.</h1>
            <ContactCard/>
        </section>
    )
}

export default ContactPage;