import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
  
const LandingPage = () => {

    const [longURL, setLongURL] = useState()
    const navigate = useNavigate()

    const handleShorten = (e) => {
        e.preventDefault()
        if (longURL) navigate(`/auth?createNew=${longURL}`)
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
                The only URL Shortener <br /> you'll ever need 👇🏽
            </h2>
            <form 
                className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
                onSubmit={handleShorten}
            >
                <Input 
                    type="url" 
                    value = {longURL}
                    placeholder="Enter your loooong URL"
                    onChange={(e) => setLongURL(e.target.value)}
                    className="h-full flex-1 py-4 px-4"
                />
                <Button 
                    type="submit" 
                    className="h-full" 
                    variant="destructive"
                >
                    Shorten
                </Button>
            </form>
            <img src="/banner.png" alt="banner" className="w-full my-11  md:px-11"/>

            <Accordion type="multiple" collapsible className="w-full md:px-11">
                <AccordionItem value="item-1">
                    <AccordionTrigger>How does the Cutzy URL shortener works?</AccordionTrigger>
                    <AccordionContent>
                        When you enter a long URL, our system generates a shorter version of that URL. This shortened url redirects you to the original long URL when accessed.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Do I need an account to use the app?</AccordionTrigger>
                    <AccordionContent>
                        Yes. Creating an account allows you to manage your URLs, view analytics and customize your short URLs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What analytics are available for my shortened URLs?</AccordionTrigger>
                    <AccordionContent>
                        You can view the number of clicks, geolocation data of the clicks and device types (mobile/desktop) for each of your shortened URLs.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default LandingPage