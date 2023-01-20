function ContactCard() {
    return (
        <section className="bg-gray-50 opacity-90 p-5 w-full gap-3 flex flex-col text-xl text-left md:rounded-md text-black md:opacity-100 md:w-max lg:p-20 md:p-10 md:mb-8 md:shadow-lg md:text-4xl">
            <img className="w-8"src="800blk.png" alt="" />
            <address className="">Elias Gonzalez</address>
            <address className="">210-373-9322</address>
            <address className="">elias@eliasgonzalez.dev</address>
        </section>
    )
}

export default ContactCard;