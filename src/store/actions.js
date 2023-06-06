import { ON_ADD, ON_EDIT, ON_REMOVE } from "./const";
import { rand4 } from "../../helpers";


export function onRemove(id) {
    return {
        type: ON_REMOVE,
        payload: id,
    }
}

export function onEdit(deal) {
    return {
        type: ON_EDIT,
        payload: deal,
    }
}

export function onAdd(text) {
    return {
        type: ON_ADD,
        payload: {text, status: false, id: rand4()},
    }
}