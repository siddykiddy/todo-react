import React,{Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  updateInput(key,value){
    this.setState({
      [key]:value
    })
  }
  addItem(){
    const newItem ={
      id: 1+ Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    const list=[...this.state.list];
    const updatedList = list.filter(item=>item.id !== id);
    this.setState({list:updatedList});
  }
  render() {
    return(
      <div className="App">
        <div>
          <br/>
          <input type="text" placeholder="type item here"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem",e.target.value)}/>
          <button onClick={()=> this.addItem()}> add</button>
          <br/>
          <ul>
            {this.state.list.map(item =>{
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={()=> this.deleteItem(item.id)}>
                    X
                    </button>
                    </li>
              )
            }
            )

            }
          </ul>

        </div>
      </div>
    )
  }
}


// JSX -> It helps you to write JS and HTML in a single place

// Functional Component
// Rules
// 1. You Must have a function
// 2. That function must return some value(object,variable,or HTML)




export default App;

// Class Component
// Rules
// 1. You must have a class that extends Component Class from React package
// 2. must have constructor accepting props with calling super constructor
// 3. render method and it must return the (value,object or HTML)