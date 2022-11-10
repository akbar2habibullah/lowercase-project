import type {Transaction} from './types/transaction';
export interface UserTransaction {
  active?: Transaction;
  history?: Transaction[];
}

// example usage
const userTransaction: UserTransaction = {
  active: {
    id: '123213',
    type: 'topup',
    amount: 100000,
    status: 'active',
    date: '2021-01-01',
    driver: {
      basic: {
        id: '123213',
        name: 'John Doe',
        email: 'adad@asd.com',
        phone: '085213245344',
      },
    },
  },
  history: [
    {
      id: '123213',
      type: 'food',
      amount: 100000,
      status: 'done',
      date: '2021-01-01',
      driver: {
        basic: {
          id: '123213',
          name: 'John Doe',
          email: 'adad@asd.com',
          phone: '085213245344',
        },
      },
      merchant: {
        id: '123213',
        name: 'Geprek',
        phone: '085213245344',
        category: 'chicken',
        address: 'Jl. Jalan',
      },
    },
  ],
};
