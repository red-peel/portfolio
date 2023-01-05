function ContactCard() {
    return (
        <div className="bg-gray-50 opacity-90 p-5 w-full gap-3 flex flex-col text-xl text-left md:rounded-md text-black md:opacity-100 md:w-max md:p-20 md:shadow-lg md:text-4xl">
            <img className="w-5 md:w-10"src="800blk.png" alt="" />
            <p className="">Elias Gonzalez</p>
            <p className="">210-373-9322</p>
            <p className="">elim.5927@gmail.com</p>
        </div>
    )
}

export default ContactCard;