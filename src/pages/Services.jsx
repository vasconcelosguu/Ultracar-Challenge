import Header from "../components/Header";
import Product from "../components/Product";
import { useContext } from "react";
import { MyContext } from "../context";
import ButtonCheckout from "../components/ButtonCheckout";
import Checkoout from "../components/Checkout";


export default function Services() {
  const { isInWork } = useContext(MyContext)

  return(
    <>
      <Header />
            {!isInWork ? (
              <main className="bg-white dark:bg-gray-900">
              <Product />
              <ButtonCheckout />
              </main>
            ):(
              <main className="bg-white dark:bg-gray-900">
                <Checkoout />
              </main>
            )}
    </>
  )
}