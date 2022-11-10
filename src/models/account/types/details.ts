export interface Club {
  level: number;
  xp: number;
  status: 'active' | 'inactive';
}

export interface UserDetails {
  club?: Club;
  type: 'driver' | 'customer' | 'merchant';
}
