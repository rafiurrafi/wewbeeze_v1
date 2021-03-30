import axios from "axios";
import React, { Component } from "react";
import Input from "./common/input";
import "./styles/contact.css";
class Contact extends Component {
  state = {
    accounts: {
      email: "",
      subject: "",
      description: "",
    },
    feedBack: "",
  };
  handleChange = (e) => {
    const accounts = { ...this.state.accounts };
    accounts[e.target.name] = e.target.value;
    this.setState({ accounts });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ feedBack: "Thanks for your ideas" });
    const res = await axios.post(
      "http://localhost:2021/api/v1/contacts",
      this.state.accounts
    );
    const accounts = {
      email: "",
      subject: "",
      description: "",
    };
    this.setState({ accounts });
    setTimeout(() => {
      this.setState({ feedBack: "" });
    }, 3000);
  };
  render() {
    const { accounts } = this.state;
    return (
      <section className="Contact section" id="section-contact">
        <div className="container page">
          <h2>Tell your ideas _</h2>
          <form onSubmit={this.handleSubmit}>
            <Input
              placeholder="Enter your email"
              onChange={this.handleChange}
              value={accounts.email}
              name="email"
            />
            <Input
              placeholder="Project name, ideas ..."
              onChange={this.handleChange}
              value={accounts.subject}
              name="subject"
            />
            <Input
              placeholder="Project details ..."
              onChange={this.handleChange}
              value={accounts.description}
              name="description"
            />
            <button>Let's do it</button>
            <div className="feedback">{this.state.feedBack}</div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
