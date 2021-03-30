import React, { Component } from "react";
// import aboutService from "./service/aboutService";
import { addLineBreak } from "./utils/formatString";
import axios from "axios";
class About extends Component {
  state = {
    abouts: [],
  };
  async componentDidMount() {
    // const abouts = [...aboutService];
    const abouts = await axios.get("/api/v1/abouts");
    this.setState({ abouts: abouts.data.data });
  }

  render() {
    const { abouts } = this.state;
    let i = 1;
    return (
      <section className="About section" id="section-about">
        <div className="container page">
          <h2>We do _</h2>
          {abouts.map((about) => (
            <div key={about._id} className="single-content">
              <img
                src={`/img/about-${i++}.jpg`}
                alt=""
                className="single-img"
              />
              <h3>{about.title}</h3>
              <p className="text">{addLineBreak(about.description)}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default About;
