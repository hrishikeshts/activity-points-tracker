import React from 'react';
import Select from 'react-select';
import {Link} from "react-router-dom"
import axios from 'axios'
 
const options = [
  { value: 'college', label: 'college' },
  { value: 'state', label: 'state' },
  { value: 'international', label: 'international' },
];
 
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this);
      }
  state = {
    selectedOption: null,
    level:""
  };
  

  handleChange = selectedOption => {
    this.setState({ 

        selectedOption,
        level:selectedOption.value 

    }, () =>{
        //state store here
        console.log(this.state.level);
    });
    console.log(`Option selected:`, selectedOption.value);
   
  };

    send = event => {
        console.log(this.state.level);
    const data = new FormData();
    data.append("level", this.state.level);
    // data.append("pri", newName);
    fetch("https://localhost:8001/api/level", {
        method: "POST",
        body: data,
    })
    .then((res) => res.text())
    .then((resBody) => {
        console.log(resBody);
    });
    // axios.post('https:localhost:8001/api/level', {
    //     level:this.state.level,

    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   });
};

  render() {
    const { selectedOption } = this.state;
 
    return (
        <div>
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
            <button onClick={this.send}>Submit</button>
            <Link to='/logout'>Logout</Link>
        </div>
      

    );
  }
}

export default Home;