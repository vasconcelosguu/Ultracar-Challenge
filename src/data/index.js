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
          price: 1.399
        },
         {
          name: 'Faróis',
          price: 557.52
        }
      ],
    },
    {
      name: 'Rafael',
      lastName: 'Oliveira',
      email: 'rafael@gmail.com',
      password: 'rafaelpassword',
      id: rafaelId,
      carModel: 'Volkswagen Fox',
      parts: [{
          name: 'Correia dentada',
          price: 628.11
        },
        {
          name: 'Pneus',
          price: 460.90
        }
      ]
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
          price: 645.67
        },
         {
          name: 'Parabrisa',
          price:  667.11
        }
      ]
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
          price: 1.442
        },
        {
          name: 'Radiador',
          price: 777.99,
        }
      ]
    }
  ]
}