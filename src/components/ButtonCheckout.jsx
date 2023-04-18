import { useContext } from "react"
import { MyContext } from "../context"

export default function ButtonCheckout() {
  const { userInformations, setWorking, setInitialDate, setInitialHour } = useContext(MyContext);
  const totalValue = userInformations.parts.reduce((acc, crr) => acc.price +  crr.price);

  const confirmateWork = () => {
    const rng = Math.floor(Math.random() * 7)
    const dateNow = new Date();
    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const seconds = dateNow.getSeconds();
    setInitialDate(dateNow.toLocaleDateString())
    setInitialHour(`${hours}:${minutes}:${seconds}`)
    setWorking(rng)
  }

  return(
    <div className="container px-6 mt-6 py-10 mx-auto">
              <section className="flex flex-col min-h-screen w-full items-center justify-center">
                <p className="mt-3 text-xl text-gray-500 dark:text-gray-300 md:text-xl">Toda manutenção e serviços serão prestados pelo {userInformations.employe}</p>
            <h3 className="mt-3 text-xl text-gray-500 dark:text-gray-300 md:text-xl">Deseja finalizar?</h3>
            <button onClick={confirmateWork} className="group rounded-2xl h-12 ml-4 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
              {`R$ ${totalValue}`}
              <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                </div>
            </button>
          </section>
          </div>
  )
}