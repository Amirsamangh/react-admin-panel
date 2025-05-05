import { getUserService } from "../../services/auth"
import { RECIEVE_ROLES_ERROR, RECIEVE_ROLES_RESPONSE, SEND_ROLES_REQUEST } from "./rolesType"

export const sendRolesRequest = () => {
    return {
        type: SEND_ROLES_REQUEST
    }
}

export const recieveRolesResponse = (data) => {
    return {
        type: RECIEVE_ROLES_RESPONSE,
        payload: data,
    }
}

export const recieveRolesError = (error) => {
    return {
        type: RECIEVE_ROLES_ERROR,
        payload: error,
    }
}

// export const getRolesActionRedux = () => {
//     return (dispatch, state) => {
//         dispatch(sendRolesRequest())
//         getUserService()
//             .then(res => {
//                 dispatch(recieveRolesResponse(res.data.roles))
//             }).catch(error => {
//                 dispatch(recieveRolesError(error.message))
//             })
//     }
// }