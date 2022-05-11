import React, { useState } from "react";
// Components
import Icon from "./components/Icon";
// Lib
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Bootstrap
import { Container, Col, Row, Button, Card, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// our Css
import "./App.css";
// Variables

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCheck(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  // const reset = () => {
  //   reloadGame();
  // };

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else {
    }
  };
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "Success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCheck ? "cross" : "circle";
      setIsCheck(!isCheck);
    } else {
      return toast("already filled", { type: "error" });
    }
    checkIsWinner();
  };

  return (
    <div>
      <Container className="p-5">
        <h1 className="text-center text-danger fw-bold display-3">
          Tic Tac Toe
        </h1>
        <ToastContainer position="bottom-right" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-primary text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button color="success" block onClick={reloadGame}>
                  {" "}
                  Reload The Game
                </Button>
              </div>
            ) : (
              <h1 className="text-center text-warning">
                {isCheck ? "Cross" : "Circle"} Turns
              </h1>
            )}
            <div className="grid">
              {itemArray.map((item, index) => {
                return (
                  <Card onClick={() => changeItem(index)} key={index}>
                    <CardBody className="box">
                      <Icon name={item}></Icon>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button className="btn btn-light my-4" onClick={reloadGame}>
                Reset Game
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
