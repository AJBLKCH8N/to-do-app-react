//create a todo model

import { ITodo } from "./../types/todo" //this imports the interface we made in types/todo
import { model, Schema } from "mongoose" //import some utilities from mongoose to help define a schema

const todoSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema)