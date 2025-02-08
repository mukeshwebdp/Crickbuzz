import React from "react";
import './style/ScoreCard.css'
function ScoreCard() {

  //  match info.
  const [matches, setMatches] = React.useState([
    {
      id: 1,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bet",
      result: "Brisbane Heat Women won by 9 wkts"
    },
    {
      id: 2,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bet",
      result: "Brisbane Heat Women won by 9 wkts"
    },
    {
      id: 3,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bet",
      result: "Brisbane Heat Women won by 9 wkts"
    },
    {
      id: 4,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bet",
      result: "Brisbane Heat Women won by 9 wkts"
    },
    {
      id: 5,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bet",
      result: "Brisbane Heat Women won by 9 wkts"
    },
    {
      id: 1,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bet",
      result: "Brisbane Heat Women won by 9 wkts"
    },
  ]);

  return (
    <>
      <div className="score-card slider">
        {matches.map((match) => (
          <div className="card" key={match.id}>
            <div className="box-1">
              <p>{match.title}</p> <label>{match.status}</label>
            </div>
            <h4>{match.session}</h4>
            <div className="flag">
              <div className="india">
                <img src="india-flag-icon.png" alt="india" />
                <p>India</p>
                <p className="number">{match.indiaScore}</p>
              </div>
              <div className="pakistan">
                <img src="pakistan-flag-icon.png" alt="pakistan" />
                <p>Pakistan</p>
                <p className="number">{match.pakistanScore}</p>
              </div>
            </div>
            <p className="red">{match.result}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ScoreCard;
