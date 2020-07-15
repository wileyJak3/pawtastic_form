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
  onYesSONChange = (event) => {
    this.setState({
      sprayedOrNeutered: "Yes",
    });
  };
}