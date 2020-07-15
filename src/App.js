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
              <p>Gender</p>
              <div className="yesNo">
                <button type="button" onClick={this.onMaleGenderChange}>
                  Male
                </button>
                <button type="button" onClick={this.onFemaleGenderChange}>
                  Female
                </button>
              </div>
            </div>

            <div className="headerClass">
              <h3> Yay, we love dogs! Give us the basics about your pup. </h3>
            </div>
            <div className="rightInputs">
              <div className="uploadImg">
                <img
                  id="zoo"
                  src="https://i.pinimg.com/originals/be/f2/8d/bef28d8311ef02dc6a6456b5298b9709.jpg"
                ></img>
                <p>upload your image</p>
              </div>
              <label> Birthday </label>
              <form>
                <input
                  type="date"
                  placeholder="Enter birthday"
                  value={this.state.birthday}
                  onChange={this.onBirthdayChange}
                />
              </form>
              <p>Sprayed Or Neutered</p>
              <div className="yesNo">
                <button type="button" onClick={this.onYesSONChange}>
                  Yes
                </button>
                <button type="button" onClick={this.onNoSONChange}>
                  No
                </button>
              </div>
            </div>
            <div className="weightBtns">
              <p>Weight</p>
              <div className="yesNo">
                <button type="button" onClick={this.onWeight1Change}>
                  0-25 lbs
                </button>
                <button type="button" onClick={this.onWeight2Change}>
                  25-50 lbs
                </button>
                <button type="button" onClick={this.onWeight3Change}>
                  50-100 lbs
                </button>
                <button type="button" onClick={this.onWeight4Change}>
                  100+ lbs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
