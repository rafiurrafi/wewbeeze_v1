import axios from "axios";
import React, { Component } from "react";
// import teamService from "./service/teamService";
import { addLineBreak } from "./utils/formatString";
class Team extends Component {
  state = {
    teams: [],
  };
  async componentDidMount() {
    // const teams = [...teamService];
    const teams = await axios.get("/api/v1/members");
    console.log(teams);
    this.setState({ teams: teams.data.data });
  }
  render() {
    const { teams } = this.state;
    let i = 1;
    return (
      <section className="Team" id="section-team">
        <div className="container page">
          <h2>Our team _</h2>
          {teams.map((team) => (
            <div key={team._id} className="single-content">
              <img
                src={`/img/team/team-${i++}.png`}
                alt=""
                className="single-img"
              />
              <h3>{team.name}</h3>
              <p className="text">{addLineBreak(team.description)}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Team;
