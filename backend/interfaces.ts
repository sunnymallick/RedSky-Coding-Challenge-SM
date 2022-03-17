export interface User {
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface NewUser extends User {
    id: number;
}

