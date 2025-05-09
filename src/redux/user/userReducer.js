import { RECIEVE_USER_ERROR, RECIEVE_USER_RESPONSE, SEND_USER_REQUEST } from "./userType";

const initialState = {
        loading: false,
        data: [],
        error: '',
}

const userReducer = (state = initialState, action) => {
        switch (action.type) {
                case SEND_USER_REQUEST:
                        return { ...state, loading: true }

                case RECIEVE_USER_RESPONSE:
                        return { loading: false, data: action.payload, error: '' }

                case RECIEVE_USER_ERROR:
                        return { loading: false, data: [], error: action.payload }

                default:
                        return state;
        }
}

export default userReducer;