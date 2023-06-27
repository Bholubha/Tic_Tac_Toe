
import './App.css';

import React, { useState, useEffect } from 'react'

function App() {

  // const [pos1, setpos1] = useState(0);
  // const [pos2, setpos2] = useState(0);
  // const [pos3, setpos3] = useState(0);
  // const [pos4, setpos4] = useState(0);
  // const [pos5, setpos5] = useState(0);
  // const [pos6, setpos6] = useState(0);
  // const [pos7, setpos7] = useState(0);
  // const [pos8, setpos8] = useState(0);
  // const [pos9, setpos9] = useState(0);

  const [positions, setPositions] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [turn, setTurn] = useState(2);
  const [ischange, setisChange] = useState(0);
  const [istouch, setIstouch] = useState(0);
  const [dashText, setdashText] = useState("Turn");
  const [isDraw, setisDraw] = useState(false)

  const updatePosition = (index) => {
    setIstouch(istouch + 1);
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = turn

      return newPositions;
    });
  };

  useEffect(() => {
    var isWon = false;
    if (positions[1] === positions[2] && positions[2] === positions[3] && positions[1] !== 0) {
      isWon = true;
      setisChange(ischange + 1);

      if (positions[1] === 1) {
        setScore1(score1 + 1);
      } else {
        setScore2(score2 + 1);
      }
    }

    if (positions[4] === positions[5] && positions[5] === positions[6] && positions[4] !== 0) {
      isWon = true;
      setisChange(ischange + 1);
      if (positions[4] === 1) {
        setScore1(score1 + 1);
      } else {
        setScore2(score2 + 1);
      }
    }

    if (positions[7] === positions[8] && positions[8] === positions[9] && positions[7] !== 0) {
      isWon = true;
      setisChange(ischange + 1);
      if (positions[7] === 1) {
        setScore1(score1 + 1);
      } else {
        setScore2(score2 + 1);
      }
    }

    if (positions[1] === positions[4] && positions[4] === positions[7] && positions[1] !== 0) {
      isWon = true;
      setisChange(ischange + 1);
      if (positions[1] === 1) {
        setScore1(score1 + 1);
      } else {
        setScore2(score2 + 1);
      }
    }

    if (positions[2] === positions[5] && positions[5] === positions[8] && positions[2] !== 0) {
      isWon = true;
      setisChange(ischange + 1);
      if (positions[2] === 1) {
        setScore1(score1 + 1);
      } else {
        setScore2(score2 + 1);
      }
    }

    if (positions[3] === positions[6] && positions[6] === positions[9] && positions[6] !== 0) {
      isWon = true;
      setisChange(ischange + 1);
      if (positions[3] === 1) {
        setScore1(score1 + 1);
      } else {
        setScore2(score2 + 1);
      }
    }

    if (positions[1] === positions[5] && positions[5] === positions[9] && positions[1] !== 0) {
      isWon = true;
      setisChange(ischange + 1);
      if (positions[1] === 1) {
        setScore1(score1 + 1);
      } else {
        setScore2(score2 + 1);
      }
    }

    if (positions[3] === positions[5] && positions[5] === positions[7] && positions[3] !== 0) {
      isWon = true;
      setisChange(ischange + 1);
      if (positions[3] === 1) {
        setScore1(score1 + 1);
      } else {
        setScore2(score2 + 1);
      }
    }

    let allSet = true;
    console.log(allSet)
    for (let i = 1; i < 10; i++) {
      console.log(positions[i])
      if (positions[i] === 0) allSet = false;
    }
    console.log(allSet)
    if (allSet) {
      console.log("in set")
      async function temp() {

        setisDraw(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setisDraw(false);
        for (let index = 0; index < 10; index++) {
          setPositions((prevPositions) => {
            const newPositions = [...prevPositions];
            newPositions[index] = 0;

            return newPositions;
          });
        }
        setdashText("Turn")
        setTurn(1);
      }
      temp();


    }

    if (isWon) {
      isWon = false;
    } else {
      if (turn === 1) {
        setTurn(2);
      } else {
        setTurn(1);
      }
    }


  }, [istouch])


  useEffect(() => {

    if (ischange > 0) {


      async function temp() {


        setdashText("Won");
        await new Promise(resolve => setTimeout(resolve, 1500));
        for (let index = 0; index < 10; index++) {
          setPositions((prevPositions) => {
            const newPositions = [...prevPositions];
            newPositions[index] = 0;

            return newPositions;
          });
        }
        setdashText("Turn")
        setTurn(1);
      }
      temp();
    }
  }, [ischange])


  const tttbsvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510" width="510" height="510">
    <rect x="170" y="0" width="4" height="510" fill="yellow" />
    <rect x="340" y="0" width="4" height="510" fill="yellow" />
    <rect x="0" y="170" width="510" height="4" fill="yellow" />
    <rect x="0" y="340" width="510" height="4" fill="yellow" />
  </svg>
`;

  const svgBackground = `url("data:image/svg+xml;utf8,${encodeURIComponent(tttbsvg)}")`;

  const containerStyle = {
    width: '500px',
    height: '200px',
    backgroundColor: 'red',
  };

  const divisionStyle = {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: 'white',
  };


  return (
    <div>

      <div className='header' style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }} >

        <div className='title'>
          <h1 style={{ color: "white", fontFamily: "revert-layer", fontSize: "60px", marginTop: "20px", backgroundColor: "red", clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)", width: "550px", textAlign: "center" }}>Tic Tac Toe</h1>
        </div>

        <div className='scoreboard'>
          {/* <h1 style={{ color: "white", fontFamily: "revert-layer", fontSize: "60px", marginTop: "20px", backgroundColor: "red", clipPath: "polygon(0 0, 80% 0, 100% 100%, 20% 100%)", width: "500px", textAlign: "center" }} >scoreboard</h1> */}

          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "80px", width: "500px", backgroundColor: "red", borderBottomLeftRadius: "20px" }}>
            <div style={divisionStyle}>
              <h4>Player 1 Score : {score1} </h4>
            </div>

            <div style={{}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="30" viewBox="0 0 7 30">
                <line x1="3.5" y1="0" x2="3.5" y2="30" stroke="white" strokeWidth="7" />
              </svg>

            </div>

            <div style={divisionStyle}>
              <h4>Player 2 Score : {score2} </h4>
            </div>
          </div>


        </div>
      </div>

      <div className="Tic" style={{ display: "flex", justifyContent: "space-around" }}>
        <div>


        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignContent: "flex-start", background: svgBackground, backgroundSize: "contain", width: "510px", backgroundRepeat: "no-repeat", height: "510px" }}>

          {/* <img src="/dia1.svg" alt="" /> */}
          <div onClick={() => { updatePosition(1) }} id='1' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "170px", height: "170px", marginTop: "0px" }}>

            {positions[1] === 1 ? <img src="/zero.svg" alt="" /> : ""}
            {positions[1] === 2 ? <img src="/chokdi.svg" alt="" /> : ""}


          </div>

          <div onClick={() => { updatePosition(2) }} id='2' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "170px", height: "170px", marginTop: "0px" }}>
            <div>
              {positions[2] === 1 ? <img src="/zero.svg" alt="" /> : ""}
              {positions[2] === 2 ? <img src="/chokdi.svg" alt="" /> : ""}
            </div>
          </div>

          <div onClick={() => { updatePosition(3) }} id='3' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "170px", height: "170px", marginTop: "0px" }}>
            <div>
              {positions[3] === 1 ? <img src="/zero.svg" alt="" /> : ""}
              {positions[3] === 2 ? <img src="/chokdi.svg" alt="" /> : ""}
            </div>
          </div>

          <div onClick={() => { updatePosition(4) }} id='4' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "170px", height: "170px", marginTop: "0px" }}>
            <div>
              {positions[4] === 1 ? <img src="/zero.svg" alt="" /> : ""}
              {positions[4] === 2 ? <img src="/chokdi.svg" alt="" /> : ""}
            </div>
          </div>

          <div onClick={() => { updatePosition(5) }} id='5' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "170px", height: "170px", marginTop: "0px" }}>
            <div>
              {positions[5] === 1 ? <img src="/zero.svg" alt="" /> : ""}
              {positions[5] === 2 ? <img src="/chokdi.svg" alt="" /> : ""}
            </div>
          </div>

          <div onClick={() => { updatePosition(6) }} id='6' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "170px", height: "170px", marginTop: "0px" }}>
            <div>
              {positions[6] === 1 ? <img src="/zero.svg" alt="" /> : ""}
              {positions[6] === 2 ? <img src="/chokdi.svg" alt="" /> : ""}
            </div>
          </div>

          <div onClick={() => { updatePosition(7) }} id='7' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "170px", height: "170px", marginTop: "0px" }}>
            <div>
              {positions[7] === 1 ? <img src="/zero.svg" alt="" /> : ""}
              {positions[7] === 2 ? <img src="/chokdi.svg" alt="" /> : ""}
            </div>
          </div>

          <div onClick={() => { updatePosition(8) }} id='8' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "170px", height: "170px", marginTop: "0px" }}>
            <div>
              {positions[8] === 1 ? <img src="/zero.svg" alt="" /> : ""}
              {positions[8] === 2 ? <img src="/chokdi.svg" alt="" /> : ""}
            </div>
          </div>

          <div onClick={() => { updatePosition(9) }} id='9' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", width: "170px", height: "170px", marginTop: "0px" }}>
            <div>
              {positions[9] === 1 ? <img src="/zero.svg" alt="" /> : ""}
              {positions[9] === 2 ? <img src="/chokdi.svg" alt="" /> : ""}
            </div>
          </div>

        </div>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", width: "600px" }}>

          <div style={{ width: "500px", height: "200px" }}>

            {dashText === "Won" && <div className="dashBoard" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "50px", marginTop: "50px", backgroundColor: "whitesmoke", width: "500px", height: "50px", borderRadius: "10px" }}>
              <h1 style={{ fontSize: "40px" }}>
                <span>Player </span>
                <span> {turn} </span>
                <span> {dashText} </span>
              </h1>
            </div>}
            {
              isDraw &&  <div className="dashBoard" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "50px", marginTop: "50px", backgroundColor: "whitesmoke", width: "500px", height: "50px", borderRadius: "10px" }}>
              <h1 style={{ fontSize: "40px" }}>
                Draw
              </h1>
            </div> 
            }
          </div>


          <div className="dashBoard" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "0px", marginTop: "50px", backgroundColor: "whitesmoke", width: "300px", height: "100px", borderRadius: "10px" }}>
            <h1 style={{ fontSize: "40px" }}>
              <span>Player </span>
              <span> {turn} </span>
              <span> {dashText} </span>
            </h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App