import React, { useContext } from 'react';
import QRCode from 'react-qr-code';
import { MyContext } from '../context';

export default function QRCodeGenerate() {
  const { userInformations } = useContext(MyContext);
  const informationsUser = `Nome do Usuario: ${userInformations.name}, Email cadastrado: ${ userInformations.email }, e o carro é este: ${ userInformations.carModel }`

  return (
    <div>
      <br />
      <QRCode value={informationsUser} />
    </div>
  );
}
