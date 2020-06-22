import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
  return <p><b> Now time is {this.state.date.toLocaleTimeString()} </b></p>
 }
}


class ForFor extends React.Component {
  render(){
    return(
      <>
      {for (let i = 0; i < 10; i++) {
        return(
        <div id='icon'>
        icon
        </div>
      )}
      </>
    )
  }
}

class Ground extends React.Component {

  render(){
  return (
    <div id='gro' >

      <div id='clo'>
        <Clock />
      </div>

      <div id='shop'>
        <h1>tryShop</h1>
      </div>

      <div id='but'>
        <button>but 1</button>
        <button>but 2</button>
        <button>but 3</button>
      </div>

      <input id='inpu'/>

      <div id='menu'>
        <div id='elem1' >
          <p>elem1</p>
        </div>
        <div id='elem1' >
          <p>elem1</p>
        </div>
        <div id='elem1' >
          <p>elem1</p>
        </div>
        <div id='elem1' >
          <p>elem1</p>
        </div>
      </div>

      <div id='assor'>
          <ForFor />
      </div>

      <div id="buText">
        <p>  </p>
      </div>

    </div>
  )
}
}


let elem2 = <Ground />

ReactDOM.render(
  elem2,
  document.getElementById('root')
)

ReactDOM.render(
  <div id='elem2' />,
  document.getElementById('root2')
)
