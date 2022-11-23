export interface UserInfo {
    user_id: number;
    username: string;
    name?: any;
    email: string;
    phone?: any;
    roles: Role[];
  }

  export interface Role {
    role_id: number;
    name: string;
    description: string;
  }
