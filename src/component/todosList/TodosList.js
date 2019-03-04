import React from 'react'
import TodoIten from '../totoItem/todoItem'

class TodosList extends React.Component{
    render() {
        return (

            <ul className='list-group'>
                {this.props.todos.map((item, index)=>{
                        return(
                            <TodoIten key={index} del={this.props.del}  edit={this.props.edit} todos={item} />
                        )
                    }
                )}
            </ul>
        )
    }


}

export default TodosList
