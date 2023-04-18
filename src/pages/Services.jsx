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
      <Product />
      <section class="flex flex-col min-h-screen w-full items-center justify-center bg-gray-100">
        <p>Toda manutenção e serviços serão prestados pelo {userInformations.employe}</p>
          <h3 className="font-bold text-lg">Deseja finalizar?</h3>
          <button class="group rounded-2xl h-12 ml-4 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
            {`R$ ${totalValue}`}
            <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
            </div>
        </button>
      </section>
    </>
  )
}