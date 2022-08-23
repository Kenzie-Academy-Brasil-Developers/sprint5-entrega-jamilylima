interface IUserRequest {
    name: string
    email: string
    password?: string
    age: number
}

interface IUserResponse extends IUserRequest {
    id: string
    created_at: Date
    updated_at:Date
}

export { IUserRequest, IUserResponse }