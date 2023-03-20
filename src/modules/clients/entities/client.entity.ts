import { randomUUID } from 'crypto'

type IClient = {
    name: string
    email: string
    phone: string
}

export class Client {
    name: string
    email: string
    phone: string
    id: string
    status: boolean

    private constructor(props: IClient) {

        if(!props.name || !props.email || !props.phone) {
            throw new Error('Campo inválido não é permitido')
        }

        this.name = props.name
        this.email = props.email
        this.phone = props.phone
        this.id = randomUUID()
        this.status = false
    }  

    static async create(props: IClient) {
        if(!props.name || !props.email || !props.phone) {
            throw new Error('Campo inválido não é permitido')
        }

        const client = new Client(props)
        return client
    }
}