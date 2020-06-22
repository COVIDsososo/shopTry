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
  return <h2> Now time is {this.state.date.toLocaleTimeString()} </h2>
 }
}


class Ground extends React.Component {

  render(){
  return (
    <div id='gro' >
      <button onClick={() => this.back()} />
      gro
      <div id='elem1' >
        elem1
      </div>
      <div id='clo'>
        <Clock />
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
