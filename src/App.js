import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // email: '',
      // password: '',
      name: "",
      breed: "",
      birthday: "",
      gender: "",
      sprayedOrNeutered: "",
      weight: "",

      formCompleted: false,
    };
  }

  onWeight1Change = (event) => {
    this.setState({
      weight: "0-25",
    });
  };
  onWeight2Change = (event) => {
    this.setState({
      weight: "25-50",
    });
  };
  onWeight3Change = (event) => {
    this.setState({
      weight: "50-100",
    });
  };
  onWeight4Change = (event) => {
    this.setState({
      weight: "100+",
    });
  };
  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  onBreedChange = (event) => {
    this.setState({
      breed: event.target.value,
    });
  };
  onBirthdayChange = (event) => {
    this.setState({
      birthday: event.target.value,
    });
  };

  //
  // ─── GENDER BUTTON FUNCS ──────────────────────────────────────────────────────────────
  //

  onMaleGenderChange = (event) => {
    this.setState({
      gender: "Male",
    });
  };
  onFemaleGenderChange = (event) => {
    this.setState({
      gender: "Female",
    });
  };

  //
  // ─── Sprayed or Neutered Funcs. ──────────────────────────────────────────────────────────────
  //
  onYesSONChange = (event) => {
    this.setState({
      sprayedOrNeutered: "Yes",
    });
  };

  onNoSONChange = (event) => {
    this.setState({
      sprayedOrNeutered: "No",
    });
  };

  handleFormSubmission = (e) => {
    e.preventDefault(); // preventing submit from refreshing page and clearing from. instead it will do this.state
    this.setState({
      formCompleted: true,
    });
    console.log("Form is submitted");
  };
  render() {
    return (
      <div>
        <div className="parent">
          <div className="rightSide">
            <h1> PAWTASTIC </h1>
          </div>

          <div className="leftSide">
            <div className="leftInputs">
            <label> Name </label>
              <form className="login-form">
                {/* <label> Name </label> */}
                <input
                  type="text"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.onNameChange}
                />
              </form>
              <label> Breed </label>
              <form className="login-form">
                {/* <label> Breed </label> */}
                <input
                  type="text"
                  placeholder="Enter breed"
                  value={this.state.breed}
                  onChange={this.onBreedChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
