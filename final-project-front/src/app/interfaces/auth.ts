export interface User {
  id: string;
  nickname: string;
  email: string;
  password: string;
  niss: string;
  token: {
    value: string;
    isadmin: string;
  };
}
