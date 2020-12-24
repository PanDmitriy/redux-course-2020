import { DECREMENT, INCREMENT, CHANGE_THEME, ENABLE_BUTTONS, DESABLE_BUTTONS } from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function enableButtons() {
    return {
        type: ENABLE_BUTTONS
    }
}

export function desableButtons() {
    return {
        type: DESABLE_BUTTONS
    }
}

export function changeTheme(toggleTheme) {
    return {
        type: CHANGE_THEME,
        preload: toggleTheme
    }
}

export function asyncIncrement() {
    return function (dispatch){
        dispatch(desableButtons())
        setTimeout( () => {
            dispatch(increment())
            dispatch(enableButtons())
        }, 1500)
    }
}