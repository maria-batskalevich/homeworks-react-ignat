import axios from "axios";
export const requestAPI = async (success: boolean) => {
    try {
        let response = await axios.post<{ success: boolean }, ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
        console.log(response)
        return response.data.info
    } catch (error:any) {
        console.dir({...error})
        console.log(error);
        console.log(error.response ? error.response.data.errorText : error.message);
        return (error.response ? error.response.data.errorText : error.message)
    }
}

type ResponseType = {
    data: {
        errorText: string
        info: string
        yourBody: {
            success: boolean
        }
    }
    status: number
}
