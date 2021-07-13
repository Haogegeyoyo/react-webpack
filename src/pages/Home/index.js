import React,{Component} from 'react'
import { Accordion, List } from 'antd-mobile';
import './index.less'
class Home extends Component{
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
    return <div >
              <div className="hello-world">6666</div>
              <div style={{ marginTop: 10, marginBottom: 10 }}>
                  <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="Title 1">
                      <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                      </List>
                    </Accordion.Panel>
                    <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
                    <Accordion.Panel header="Title 3" className="pad">
                      text text text text text text text text text text text text text text text
                    </Accordion.Panel>
                  </Accordion>
                </div>
      </div>
  }
}

export default Home