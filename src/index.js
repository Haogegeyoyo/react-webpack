import React,{Component} from 'react'
import ReactDom from 'react-dom'
class HomePage extends Component{
  constructor(props){
    super(props)
    this.state={
      hello:"hello world"
    }
  }
  componentDidMount(){
    console.log("hello world ")
  }
  render(){
    return <div>{this.state.hello}</div>
  }
}

ReactDom.render(<HomePage></HomePage>,document.getElementById('app'))