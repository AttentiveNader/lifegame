import React, { Component } from 'react';
import Cell from './cell.js'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {}
    this.state.all = []
    this.state.subArr= []
    this.state.alive = []
    this.state.dead = []
    this.state.startArr= [71,72,73,83,92]
    this.addAlive = this.addAlive.bind(this)
    this.getStatus = this.getStatus.bind(this)
    for(let i = 0 ; i<100 ; i++){
     this.state.all.push(<Cell  ref={"c"+String(i+1)} cells={this.state.all} id={'c'+String(i)} no={i+1} getStatus={this.getStatus} addLife={this.addAlive}  key={'c'+String(i)} />)
    }
  }
  render() {
    let cells = this.state.all.map(function(e){
      return e
    })
    return (
      <div>
      <div className="buttongroup">
      <div>Generation: {this.state.alive.length}</div>
      <button onClick={this.start.bind(this)}>start</button>
      <button onClick={this.stop.bind(this)}>stop</button>
      <button onClick={this.clear.bind(this)}>clear</button>
      </div>
      <div className="App">
       {cells}
       </div>
      </div>
    );
  }
  componentDidMount(){
    for(let ke in this.state.startArr){
      this.refs['c'+String(this.state.startArr[ke])].status = true
      this.refs['c'+String(this.state.startArr[ke])].forceUpdate()
    }
  }
  addAlive(index){
    this.state.alive.push(index)
  }
  stop(){
    window.clearInterval(this.state.intern)
  }
    getStatus(index){
    let self = this
    if(this.state.alive.indexOf(index) !== -1){
      return true
    }else {
      return false
    }
  //  return self.refs["c"+String(index)].status
  }
  start(){
    let self  = this

    this.state.intern = setInterval(function(){
      self.state.alive = []
      self.state.dead = []
      for(let i = 0 ;i <100; i++){
        if(self.refs["c"+String(i+1)].status){
          self.state.alive.push(i+1)
        }else{
          self.state.dead.push(i+1)
        }
      }
      for(let i = 0 ;i <100; i++){
        self.refs["c"+String(i+1)].calcul()
      }
    self.forceUpdate()
    },200)
  }
  clear(){
  window.clearInterval(this.state.intern)
    for(let i = 0 ;i <100; i++){

      this.refs["c"+String(i+1)].status = false

      this.refs["c"+String(i+1)].forceUpdate()
    }
  }
}

export default App;
