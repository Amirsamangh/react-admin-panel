import { getUserService } from "../../services/auth"
import { RECIEVE_USER_ERROR, RECIEVE_USER_RESPONSE, SEND_USER_REQUEST } from "./userType"

export const sendUserRequest = () => {
    return {
        type: SEND_USER_REQUEST
    }
}

export const recieveUserResponse = (data) => {
    return {
        type: RECIEVE_USER_RESPONSE,
        payload: data,
    }
}

export const recieveUserError = (error) => {
    return {
        type: RECIEVE_USER_ERROR,
        payload: error,
    }
}

// export const getUserActionRedux = () => {
//     return (dispatch, state) => {
//         dispatch(sendUserRequest())
//         getUserService()
//             .then(res => {
//                 dispatch(recieveUserResponse(res.data.user))
//             }).catch(error => {
//                 dispatch(recieveUserError(error.message))
//             })
//     }
// }