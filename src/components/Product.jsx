import { useContext } from "react";
import { MyContext } from "../context";


export default function Product() {
  const { userInformations } = useContext(MyContext)
  return(
        <table class="min-w-full text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Class
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Heading
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Heading
              </th>
            </tr>
          </thead>
          <tbody>
            {userInformations.parts.map((products) => (
              <tr class="border-b bg-gray-800 boder-gray-900">
              <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                {products.name}
              </td>
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                {products.desc}
              </td>
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                {`R$ ${products.price}`}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
  )
}


