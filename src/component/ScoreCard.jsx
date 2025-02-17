import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/ScoreCard.css";

function ScoreCard() {
  const [cardInfo, setCardInfo] = useState({});
  const [run,setRun] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://crickbuzz-sever.onrender.com/api/cardInfoShow");
        setCardInfo(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://crickbuzz-sever.onrender.com/api/score");
        return setRun(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 20000); // 20 seconds
    return () => clearInterval(interval); 
  }, []);

  const [matches, setMatches] = useState([
    {
      id: 2,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bat",
      result: "Brisbane Heat Women won by 9 wkts"
    },
    {
      id: 3,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bat",
      result: "Brisbane Heat Women won by 9 wkts"
    },
    {
      id: 4,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bat",
      result: "Brisbane Heat Women won by 9 wkts"
    },
    {
      id: 5,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bat",
      result: "Brisbane Heat Women won by 9 wkts"
    },
    {
      id: 1,
      title: "1st Test * India tour of Pakistan, 2024",
      status: "Live",
      session: "Day 2: 2nd Session - India trail by 360 runs",
      indiaScore: "370/7",
      pakistanScore: "Yet to Bat",
      result: "Brisbane Heat Women won by 9 wkts"
    },
  ]);
console.log(run?.data || 0)
  return (
    <>
      <div className="score-card slider">
        <div className="card">
          <div className="box-1">
            <p>{cardInfo?.data?.session}</p>
            <label className={cardInfo?.data?.status}>Live</label>
          </div>
          <h4>{cardInfo?.data?.title}</h4>
          <div className="flag">
            <div className="india">
              <img src={cardInfo?.data?.img1} alt="india" />
              <p>{cardInfo?.data?.country1}</p>
              {/*  20s after auto update */}
              <p className="number">{`${run?.data || 0}`}</p> 
            </div>
            <div className="pakistan">
              <img src={cardInfo?.data?.img2} alt={cardInfo?.data?.img2} />
              <p>{cardInfo?.data?.country2}</p>
              <p className="number">Yet to Bat</p>
            </div>
          </div>
          <p className="red">Brisbane Heat Women won by 9 wkts</p>
        </div>

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
