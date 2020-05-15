export const incrementAction = (number) => {
    return {
        type: "INCREMENT_BY",
        number,
    }
}

export const decrementAction = (number) => {
    return {
        type: "DECREMENT_BY",
        number
    }
}