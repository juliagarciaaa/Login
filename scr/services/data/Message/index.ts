import { api } from "../../api"
export interface IMessage {
    tittle: string
    message: string
}
export interface IresponseMessage {
    id: number
    user_id: number
    tittle: string
    message: string
    created_at: string
}

class MessageData {
    index(){
        return api.get<IresponseMessage[]>('/message')
    }
}
export default new MessageData()