export interface AccountState {
  user: User | null;
}

export interface User {
  username?: string;
  password?: string;
  reminderLogin?: boolean;
}
