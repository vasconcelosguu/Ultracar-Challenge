import Header from "../components/Header";
import Product from "../components/Product";
import { useContext } from "react";
import { MyContext } from "../context";


export default function Services() {
  const { userInformations } = useContext(MyContext);
  const totalValue = userInformations.parts.reduce((acc, crr) => acc.price +  crr.price);

  return(
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <div className="container px-6 mt-6 py-10 mx-auto">
          <Product />
          <section class="flex flex-col min-h-screen w-full items-center justify-center">
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-300 md:text-xl">Toda manutenção e serviços serão prestados pelo {userInformations.employe}</p>
            <h3 className="mt-3 text-xl text-gray-500 dark:text-gray-300 md:text-xl">Deseja finalizar?</h3>
            <button class="group rounded-2xl h-12 ml-4 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
              {`R$ ${totalValue}`}
              <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                </div>
            </button>
          </section>
        </div>
      </main>
    </>
  )
}