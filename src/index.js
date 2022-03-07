import React from "react";
import ReactDOM from "react-dom";
import Name from "./Components/NameComponent";
import Message from "./Components/MessageComponent";
import Gender from "./Components/GenderComponent";
import Location from "./Components/LocationComponent";
import Job from "./Components/JobComponent";
import WelcomeBanner from "./Components/WelcomeBanner";
import FormComponent from "./Components/FormComponent";
import "./styles.css";

const RenderHowdy = (props) => {
  return (
    <div>
      <h1>{props.something}</h1>
    </div>
  );
};

class App extends React.Component {
  // "C" declare your 'CLASS'
  constructor() {
    // "C" build out your "CONSTRUCTOR"
    super();
    this.state = {
      first: "This is the first message!",
      howdy: "This will trigger a message saying 'Howdy'!",
      name: "Max",
      jobStatus: "Unemployed",
      message: "Hello from props!",
      location: "Buffalo, NY",
      gender: "Male",
      surprise: "",
      message2: "This is another message",
      welcomeMessage: "World"
    };
  }

  handleChangeFunction = (event) => {
    this.setState({ message: event.target.value });
  };

  updateStateMessage = (event) => {
    this.setState({ WelcomeMessage: event.target.value });
  };

  render() {
    // "R" don't forget to call "RENDER"
    return (
      <div className="App">
        <h1>{this.state.first}</h1>
        <Message propsMessage={this.state.message} />
        <Name propsName={this.state.name} />
        <Job propsJob={this.state.jobStatus} />
        <Location locationProps={this.state.location} />
        <Gender genderProps={this.state.gender} />
        <RenderHowdy something={this.state.howdy} />
        <input
          placeholder="Add your own title"
          onChange={this.handleChangeFunction}
        />
        <WelcomeBanner new={this.state.welcomeMessage} />
        <FormComponent updateStateMessage={this.updateStateMessage} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
