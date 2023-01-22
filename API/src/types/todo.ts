import { Document } from "mongoose"

export interface ITodo extends Document {
    name: string
    description: string
    status: boolean
}

//this is an interface that extends Document type provided by Mongoose which will be used to interact with MongoDB