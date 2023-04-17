import { useContext } from "react"
import { MyContext } from "../context"
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { userInformations } = useContext(MyContext);
  console.log(userInformations);
  return(
    <>
      <Header />
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
          <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="min-w-[340px]flex flex-col group">
                            <div
                                className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative rounded-xl">

                                <img src={` ../images/${userInformations.carModel}.jpg`}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                    alt=""/>

                                <div
                                    className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                </div>
                            </div>
                            <a href="./single_post.html"
                                className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                                { userInformations.carModel }</a>
                            <div className="flex justify-center gap-x-3">
                                <Link to='/services'
                                    className=" px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold rounded-lg">
                                    Ver Reparos</Link>
                            </div>

                        </div>
          </div>
       </div>
    </>
  )
}