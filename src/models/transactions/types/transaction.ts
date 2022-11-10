import type {User} from '../../account';
import type {Merchant} from '../../account/types/merchant';

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  status: 'active' | 'ongoing' | 'done' | 'cancelled';
  type:
    | 'food'
    | 'bike'
    | 'car'
    | 'mart'
    | 'med'
    | 'transfer'
    | 'topup'
    | 'withdraw'
    | 'other';
  driver: User;
  merchant?: Merchant;
}
