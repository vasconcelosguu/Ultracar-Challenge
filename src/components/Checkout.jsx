import { useContext } from "react"
import { MyContext } from "../context"

export default function Checkoout() {
  const { isInWork, userInformations, initialDate, initialHour } = useContext(MyContext)

  console.log(initialHour)

  return(
    <div className="container px-6 mt-6 py-10 mx-auto">
    <section className="flex flex-col min-h-screen w-full items-center justify-center">
      <p className="mt-3 text-xl text-gray-500 dark:text-gray-300 md:text-xl">A manutenção do carro começou em {initialDate} as {initialHour} e estara pronto em um prazo de até {isInWork} dias!!</p>
      <p className="mt-3 text-xl text-gray-500 dark:text-gray-300 md:text-xl">Toda manutenção e serviços serão prestados pelo {userInformations.employeName}</p>
      <p className="mt-3 text-xl text-gray-500 dark:text-gray-300 md:text-xl">Agradecemos a preferencia 😁</p>
</section>
</div>
  )
}