import { useContext } from "react"
import { MyContext } from "../context"
import Header from "../components/Header";
import { TbUser } from "react-icons/tb";
import { Link } from "react-router-dom";
import QRCodeGenerate from "../components/QrCode";

export default function HomePage() {
  const { userInformations } = useContext(MyContext);
  return(
    <>
    <Header />
    <main className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={` ../images/${userInformations.carModel}.jpg`} alt=""/>

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                    { userInformations.carModel }
                    </p>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <Link to="/services" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Ver Reparos</button></Link>

                    <div className="flex items-center mt-6">
                        <TbUser className="object-cover object-center w-10 h-10 rounded-full" />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">{userInformations.name}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Responsavel</p>
                        </div>
                    </div>
                </div>
                <QRCodeGenerate/>
            </div>
        </div>
    </main>
    </>
  )
}