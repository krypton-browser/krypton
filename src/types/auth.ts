export type IPassword = {
  password: string;
};

export interface IStoredPassword {
  domain: string;
  password: string | null;
}
