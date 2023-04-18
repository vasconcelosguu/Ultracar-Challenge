const jessicaId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const rafaelId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
const franciscoId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const yagoId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';

module.exports = {
  clients: [
    {
      name: 'Jessica',
      lastName: 'Silva',
      email: 'jessica@gmail.com',
      password: 'jessicapassword',
      id: jessicaId,
      carModel: 'Peugeot',
      parts: [
         {
          name: 'Kit Suspensão',
          desc: 'Durabilidade e qualidade segue padrões originais',
          price: 1399.00
        },
         {
          name: 'Faróis',
          desc: 'Durabilidade e qualidade segue padrões originais',
          price: 557.52
        }
      ],
      employeName: 'Trevor',
    },
    {
      name: 'Rafael',
      lastName: 'França',
      email: 'rafael@gmail.com',
      password: 'rafaelpassword',
      id: rafaelId,
      carModel: 'Volkswagen Fox',
      parts: [
        {
          name: 'Correia dentada',
          desc: 'Durabilidade e qualidade segue padrões originais',
          price: 628.11
        },
        {
          name: 'Pneus',
          desc: 'Durabilidade e qualidade segue padrões originais',
          price: 460.90
        }
      ],
      employeName: 'Pedro',
    },
    {
      name: 'Francisco',
      lastName: 'Gonçalves',
      email: 'francisco@gmail.com',
      password: 'franciscopassword',
      id: franciscoId,
      carModel: 'Hyundai HB20',
      parts: [
        {
          name: 'Amortecedor',
          desc: 'Durabilidade e qualidade segue padrões originais',
          price: 645.67
        },
         {
          name: 'Parabrisa',
          desc: 'Durabilidade e qualidade segue padrões originais',
          price:  667.11
        }
      ],
      employeName: 'Thauan',
    },
    {
      name: 'Yago',
      lastName: 'Henrique',
      email: 'yago@gmail.com',
      password: 'yagopassword',
      id: yagoId,
      carModel: 'Nissan GT-R',
      parts: [
        {
          name: 'Pistão',
          desc: 'Durabilidade e qualidade segue padrões originais',
          price: 1442.99
        },
        {
          name: 'Radiador',
          desc: 'Durabilidade e qualidade segue padrões originais',
          price: 777.99,
        }
      ],
      employeName: 'João Pedro',
    }
  ]
}