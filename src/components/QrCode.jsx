import React, { useContext } from 'react';
import QRCode from 'react-qr-code';
import { MyContext } from '../context';

export default function QRCodeGenerate() {
  const { userInformations } = useContext(MyContext);
  const informationsUser = `Nome do Usuario: ${userInformations.name}, Email cadastrado: ${ userInformations.email }, e o carro é este: ${ userInformations.carModel }`

  return (
    <div class="flex flex-col justify-center items-center h-[100vh]">
        <p className='block my-4 text-sm font-semibol hover:underline dark:text-white md:text-base'>Para mais informações do usuario:</p>
        <QRCode value={informationsUser} />
    </div>
  );
}
