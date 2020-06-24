import React from 'react';
import ReactDOM from 'react-dom';
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

      <input type='text' id='inpu'/>

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
        <Elewo />
      </div>

      <div id="buText">
        <p>  </p>
      </div>

    </div>
  )
}
}

    class Elewo extends React.Component  {
      render(){
        const elements = [1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10];
        const items = [];

        for (const [index, value] of elements.entries()){
           items.push(<div id='icon' key={index}>{index}</div>)
      }
      return <div>{items}</div>
    }
  }

let elem2 = <Ground />

ReactDOM.render(
  elem2,
  document.getElementById('root')
)
