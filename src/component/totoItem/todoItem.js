import React from "react"

class TotoItem extends React.Component{
    state={
        flag:false,
        name:this.props.todos.name,
        error:'',
    }

    onchangeNaame=(e)=> {
        let name = e.target.value
        this.setState({
            name
        })
    }
    saveTodo=(id,)=>{
        if (this.state.name ===""){
            this.setState({
                error:"Enter name todo"
            })
            return false
        }
        this.props.edit(id, this.state.name)
        this.setState({
            flag:false
        })
    };



    render() {
        return (
            <React.Fragment>
                {(this.state.flag === false) ?
                    <div>
                        <li className="list-group-item">
                            {this.props.todos.name}
                        </li>

                        <div className="btn-group">
                            <button onClick={() => this.props.del(this.props.todos.id)} className="btn btn-danger">
                                Del todo
                            </button>
                            <button onClick={() => this.setState({
                                flag: true
                            })} className="btn btn-primary">
                                Edit todo
                            </button>
                        </div>
                    </div> : <div>
                        <input type="text" className="form-control" onChange={e =>this.onchangeNaame(e)} value={this.state.name}/>
                        {(this.state.error !=='')?
                            <div className="alert alert-danger">
                            {this.state.error}
                        </div>
                            :null}


                        <div className="btn-group">
                            <button onClick={() => this.props.del(this.props.todos.id)} className="btn btn-danger">
                                Del todo
                            </button>
                            <button onClick={()=>this.saveTodo(this.props.todos.id)} className="btn btn-primary">
                                Save todo
                            </button>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }


}

export default TotoItem
