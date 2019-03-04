export function add(todo) {
    return {
        type: "ADD",
        text: {
            id:new Date().getMilliseconds(),
            name:todo

        }
    }
}

export function del(id) {
    return{
        type: "DEL",
        id
    }
}

export function search(text) {
    return{
        type:"SER",
        text
    }
}

export function edit(id , name) {
    console.log(id +" " +name)
    return{
        type:"EDIT",
        id,
        name
    }
}
