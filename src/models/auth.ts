export interface User {
    user_id: number;
    username: string;
    name?: any;
    email: string;
    phone?: any;
    image?: any;
    roles: Role[];
  }

  export interface Role {
    role_id: number;
    name: string;
    description: string;
  }