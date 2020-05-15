const initialState = {
    counter: 0
}

export default (state = initialState, action) => {
    var { number, type } = action;
    var { counter } = state;
    switch(type){
        case "INCREMENT_BY":
            return { counter: counter + number };
        case "DECREMENT_BY":
            return { counter: counter - number };
        default:
            return state;
    }  
}