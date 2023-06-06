import { ON_ADD, ON_EDIT, ON_REMOVE } from "./const";

const initState = [];

export function todoStore(state = initState, action) {
    if(action.type === ON_ADD){
        return [...state, action.payload]
    }else if(action.type === ON_EDIT){
        return state.map((e) => {
            if(e.id === action.payload.id){
                return {
                    ...e,
                    ...action.payload,
                }
            }
            return e;
        })
    }else if(action.type === ON_REMOVE){
        return state.filter((e) => e.id !== action.payload);
    }
    return state;
}