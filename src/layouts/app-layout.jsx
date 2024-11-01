import { Outlet } from "react-router-dom"
import Header from "../components/header"

const AppLayout = () => {
    return (
        <div>
            <main className="min-h-screen min-w-full container px-10">

                {/* Header */}
                <Header />

                {/* body */}
                <Outlet /> 

            </main>

            {/* footer */}
            <div className="p-10 text-center bg-gray-800 mt-10">
                Made with 💖 by Chidera
            </div>
        </div>
    )
}

export default AppLayout