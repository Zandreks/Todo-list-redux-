const initialState = {
    todos:[
        {
            id:1,
            name:"todo 1 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:2,
            name:"todo 2 "
        },
        {
            id:10,
            name:"todo 10 "
        },
    ],
    filterSer:""

}

export default function todos(state = initialState, action) {
    switch(action.type) {
        case "ADD":
            return {
                ...state,
               todos: [...state.todos ,action.text]
            };
        case "DEL":
            return{
                ...state,
                todos:state.todos.filter((item)=>item.id !== action.id)
            };
        case "SER":
            return{
                 ...state,
                filterSer: action.text
            };
        case 'EDIT':
            let newState = state.todos.map(todo=> {
                if (todo.id === action.id){
                    return{
                        ...todo,
                        name:action.name
                    }
                }
                else return todo

            })
            return{
                ...state,
                todos:  newState
            }
        default:
            return state
    }
}
