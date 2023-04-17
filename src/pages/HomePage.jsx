import { useContext } from "react"
import { MyContext } from "../context"
import Header from "../components/Header";

export default function HomePage() {
  const { userInformations } = useContext(MyContext);
  console.log(userInformations);
  return(
    <Header />
  )
}