import { useContext } from "react"
import { MyContext } from "../context"
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {

  const { userInformations } = useContext(MyContext)

  return(
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
				<span class="text-2xl pl-2"><i class="em em-grinning"></i>{`Bem vindo(a), ${userInformations.name}`}</span>
		</div>

		<div class="block lg:hidden">
			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>

		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 hidden" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
					<Link class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:text-underline py-2 px-4" href="#">Serviços</Link>
				</li>
				<li class="mr-3">
					<button class="inline-block text-gray-200 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Logout<BiLogOut /></button>
				</li>
			</ul>
		</div>
	</nav>
  )
}