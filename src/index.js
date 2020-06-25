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

      <div id='shopName'>
        <h1>tryShop</h1>
      </div>

      <div id='but'>
        <ButtonMy />
      </div>

      <Search />

      <div id='menu'>
        <ElemItems />
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


class ButtonMy extends React.Component {
  constructor (props){
    super(props);

    this.sayHi = this.sayHi.bind(this);
  }

  sayHi (){
    return alert('Hello');
  }

  render(){
    const elements = [1, 2, 3, 4, 5];
    const items = [];

    for (const [index, value] of elements.entries()){
       items.push(<button onClick={this.sayHi} key={index}>Button {index}</button>)
  }
  return <div>{items}</div>
  }
}



class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 'search?'};

    this.inpuText = this.inpuText.bind(this);
    this.inpuAlert = this.inpuAlert.bind(this);
  }

  inpuText(event){
    this.setState({
      value: event.target.value
    });
  }

  inpuAlert(event){
    alert(this.state.value);
    event.preventDefault();
  }

  render(){
    return(
    <form id='inpu' onSubmit={this.inpuAlert}>
    <input type='text'  value={this.state.value} onChange={this.inpuText}/>
    <Selevalue id="selevalue"/>
    </form>
  )
}
}



class Selevalue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: "Seleva"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
        this.setState({value: event.target.value});
      }

  handleSubmit(event) {
    alert('Seleva: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    const elements = [1, 2, 3, 4, 5, 6, 7];
    const items = [];

    for (const [index, value] of elements.entries()){
       items.push(<option key={index}>{index}</option>)
  }
  return <select value={this.state.value} onChange={this.handleChange}>{items}</select>
}
}


class ElemItems extends React.Component {
  render(){
    const elements = [1, 2, 3, 4, 5, 6, 7];
    const items = [];

    for (const [index, value] of elements.entries()){
       items.push(<div id='elem1' key={index}><p>elem{index}</p></div>)
  }
  return <div>{items}</div>
}
}



class Elewo extends React.Component  {
    render(){
        const elements = [1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10];
        const items = [];

        for (const [index, value] of elements.entries()){
           items.push(<div id='icon' key={index}>{index}</div>)
      }
      return <div id='elewoItems'>{items}</div>
    }
  }






let elem2 = <Ground />

ReactDOM.render(
  elem2,
  document.getElementById('root')
)
