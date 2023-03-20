import { randomUUID } from 'crypto'

type IUser = {
    name: string,
    email: string
    password: string
}

export class User {
    name: string
    email: string
    password: string
    id: string
    isAdmin: boolean

    private constructor(props: IUser) {
        if(!props.email || !props.password) {
            throw new Error('Email/password is invalid')
        }
    
        this.name = props.name
        this.email = props.email
        this.password = props.password
        this.id = randomUUID()
        this.isAdmin = false
    }

    static async create(props: IUser) {
        if(!props.password) {
            throw new Error('Email/password is invalid')
        }

        const user = new User(props)
        return user
    }
} 