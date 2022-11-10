import type {BasicInfo} from './types/basic';
import type {UserDetails} from './types/details';
export interface User {
  basic: BasicInfo;
  details?: UserDetails;
}

// example usage
const user: User = {
  basic: {
    id: '123213',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '085213245344',
  },
  details: {
    club: {
      level: 1,
      xp: 100,
      status: 'active',
    },
    type: 'driver',
  },
};
