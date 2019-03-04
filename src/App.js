import React, { Component } from 'react';
import TodoLists from "./component/todosList/TodosList"
import {connect} from 'react-redux'
import {add ,del, search, edit} from './redux/actions/actions';
import ReactPaginate from "react-paginate";

class App extends Component {
  state={
    todo:"",
    error: "",
    offset: 0,
    pageCount:0,
    data: []
  }
  onChangeTodo=(e)=>{
    let todo = e.target.value
    this.setState({
      todo
    })
  }

  addTodo=(e)=>{
    if (this.state.todo ===""){
      this.setState({
        error:"Enter name"
      })
      return false
    }
    this.props.addTodo(this.state.todo)
    this.setState({
      todo:"",
      error:''
    })
    setTimeout(()=>{
      this.loadCommentsFromServer();
    })
  }

  onChangeSearch=(e)=>{
    let search = e.target.value
    this.props.earchToto(search)
    this.setState({
      offset:0
    })
    setTimeout(()=>{
      this.loadCommentsFromServer();
    })
  }

  editTod=(id ,name)=>{
    this.props.editTodo(id, name)
    setTimeout(()=>{
      this.loadCommentsFromServer();
    })
  }

  loadCommentsFromServer=()=>{
    this.setState({
      pageCount: Math.ceil(Number(this.props.todos.length) / 5),
      data:this.getPaginatedItems(this.props.todos, this.state.offset)
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 5);

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer();
    });

  };

  getPaginatedItems=(items, offset)=> {
    return items.reverse().slice(offset, offset + 5);
  }
  delTod=(id)=>{
    this.props.delTodo(id)
    setTimeout(()=>{
      this.loadCommentsFromServer();
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>
              Todo list
            </h1>
            <label htmlFor="add">
              Add todo
            </label>
            <input type="text" id='add' value={this.state.todo} onKeyPress = {(e) => {
            if(e.key === 'Enter'){
            this.addTodo()
          }
          }} onChange={(e)=> this.onChangeTodo(e)} className="form-control"/>
            {(this.state.error !=="")?<div className="alert alert-danger" >{this.state.error} </div>:null}

            <button onClick={()=> this.addTodo()} className='btn btn-primary'>
              Add todo
            </button>
            <br/>
            <label htmlFor="search">
              Search todo
            </label>
            <input type="text" id='search' onChange={(e)=> this.onChangeSearch(e)} className="form-control"/>
            <TodoLists edit={this.editTod} del={this.delTod} todos={this.state.data}/>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageClassName='page-item"'
                pageLinkClassName="page-link"
                previousClassName="page-link"
                nextLinkClassName="page-link"
                breakClassName='page-item'
                breakLinkClassName="page-link"
                pageCount={this.state.pageCount}
                marginPagesDisplayed={5}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName='pagination justify-content-center'
                activeClassName='page-item active'
            />
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    todos: state.todos.todos.filter(todo=>todo.name.includes(state.todos.filterSer))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo:text=>dispatch(add(text)),
    delTodo: id=> dispatch(del(id)),
    earchToto: text => dispatch(search(text)),
    editTodo: (id, name) =>dispatch(edit(id, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
