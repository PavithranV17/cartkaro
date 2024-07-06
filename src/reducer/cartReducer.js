export const cartReducer = (state, action) => {

    const { type, payload } = action;

    switch(type){
        case "ADD":
            return { ...state, cartList: payload.add };

        case "REMOVE":
            return { ...state, cartList: payload.sub};

        case "SUM":
            return { ...state, total: payload.total};

        default:
            throw new Error("No such case found");
    }
}