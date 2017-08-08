import React, { Component } from 'react';



class App extends Component {
  constructor(props){
    super(props)
    this.state ={}
    this.status = false
    this.calcul = this.calcul.bind(this)
    this.handleC = this.handleC.bind(this)
    this.state.live = 0
  }
  render() {
    return (
      <div onClick={this.handClick.bind(this)} className={this.status? "cell active" : 'cell'}>

      </div>
    );
  }
  intern(){

  }
  handClick(){
  this.calcul(true)
    console.log(this.state.live,this.props.no)
    this.status = !this.status
    this.props.addLife(this.props.no)
    this.forceUpdate()
  }
  handleC(){
    if(!this.status){
      if(this.state.live == 3){
        this.status = true
      }

    }else{
      if(this.state.live >3){
        this.status = false
      } else if(this.state.live < 2 ){
        this.status = false
      }
    }
    this.forceUpdate()
  }
  calcul(cond){
    let self =  this
    this.state.live = 0
      for(let ke in this.state.arr){
        if(self.state.arr[ke] >=1 ){
          if( self.state.arr[ke] <= 100){
            if(parseInt(this.props.no) % 10 === 0|| parseInt(this.props.no) % 10 == 1){
              if(parseInt(this.props.no) % 10 == 1){
                if(parseInt(ke) === 0 || parseInt(ke) == 5){
                }else{
                  if(this.props.getStatus(this.state.arr[ke])){
                    this.state.live++
                    }
                }
              }else if(parseInt(this.props.no) % 10 === 0){
                if(parseInt(ke) == 1 || parseInt(ke) == 2){
                }else{
                  if(this.props.getStatus(this.state.arr[ke])){
                    this.state.live++
                    }
                }
              }
            }else{
        if(this.props.getStatus(this.state.arr[ke])){
          this.state.live++
          }
        }
      }
    }
  }
if(cond){

}else{
  this.handleC()
  }
}
  componentDidMount(){
    console.log(this.props)
    let self = this
   this.state.arr = [this.props.no-1, this.props.no+1, this.props.no-9,this.props.no-10,this.props.no-11,this.props.no+9,this.props.no+10,this.props.no+11]
  }
}

export default App;
