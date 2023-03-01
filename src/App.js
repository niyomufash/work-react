import './App.css';
import React, {Component} from 'react'

class App extends Component{

  constructor () {
    super()
    this.state = {
      users: [{}],
      latter:'',
      loading: true

    }
  }
 

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then((result)=> this.setState({users: result, loading: false}))
    
  }
  searchfunction = (e)=>{
    this.setState({latter: e.target.value}); };
 

  render () {
    
    if(this.state.loading){
      return(
        <h1>
          loading....
        </h1>
      )
    }
    return(
      <div className='App'>
        <h1 id='hd'><u>Our Users</u></h1>
        <div className='input'>
        <input type='text' onChange={this.searchfunction}
           placeholder='type here!!'  
           
           /></div>
     <div className='contain'><b>{
      this.state.users.filter(user=> user.name.toLowerCase().includes(this.state.latter)).map(user =>{
        return(
        <div key={user.id} className='list'>
          <b>{user.name}</b>
           {/* <h1>{user.}</h1>  */}
        </div>
        )
      })
      }</b></div>
      <div class="downbtn">
      <button id='buto'>click</button>
      </div>
      </div>
    )
  }
}

export default App

