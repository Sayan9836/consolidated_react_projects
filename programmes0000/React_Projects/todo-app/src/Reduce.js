
export const reduce = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.payload.text, id: action.payload.id }]
        case "delete":
            return state.filter((ele) => {
                return ele.id !== action.payload.id
            })
        case "update":

    }
}
