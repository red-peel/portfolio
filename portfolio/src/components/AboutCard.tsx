function AboutCard() {
    return (
        <section className="bg-red-50 md:mt-5 p-10">
            <div className="flex flex-col md:flex-row gap-10 ">
                <img className="rounded-full max-w-min md:max-h-80" src="https://pbs.twimg.com/profile_images/1610840568933875715/0d5o43cy_400x400.jpg" alt="" />
                
                <div className="my-auto text-left flex flex-col gap-3">
                    <h2 className="text-7xl flex-none">Elias Gonzalez</h2>
                    <h1 className="text-5xl font-bold">About</h1>
                    <h1 className="flex-1 text-xl max-w-7xl">
                        Ever since I learned to use a computer, I wanted to learn all I could about the digital world and how to make new things with it. 
                        Since then I have worked with several individuals and companies get started with a variety of digital products. 
                        I am naturally curious, continuously inventive, and always working to improve my skills.
                    </h1>
                </div>
            </div>

        </section>
    )
}

export default AboutCard;