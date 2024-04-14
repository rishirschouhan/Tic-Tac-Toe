import { useState } from "react";

export default function Board() {

  const [ squares, setSquares ]= useState(Array(9).fill(null));
  const [ lastIdx, setLastIdx ]= useState(null)

    function handleClick(idx) {
      console.log({lastIdx, idx})
      const nextSquares = squares.slice();
      if ((lastIdx === null || squares[lastIdx] === 'O')  &&nextSquares[idx] === null) {
        nextSquares[idx] = 'X'
      } else if (squares[lastIdx] === 'X' &&nextSquares[idx] === null){
        nextSquares[idx] = 'O'
      }
      setSquares(nextSquares)
      setLastIdx( idx);
    } 

return (
      <>
      <div className="board-row">
      <Square onSquareClick={() =>handleClick(0)} value = {squares[0]}/>
      <Square onSquareClick={() =>handleClick(1)} value = {squares[1]}/>
      <Square onSquareClick={() =>handleClick(2)} value = {squares[2]}/>
      </div>
      <div className="board-row">
      <Square onSquareClick={() =>handleClick(3)} value = {squares[3]}/>
      <Square onSquareClick={() =>handleClick(4)} value = {squares[4]}/>
      <Square onSquareClick={() =>handleClick(5)} value = {squares[5]}/>
      </div>
      <div className="board-row">
      <Square onSquareClick={() =>handleClick(6)} value = {squares[6]}/>
      <Square onSquareClick={() =>handleClick(7)} value = {squares[7]}/>
      <Square onSquareClick={() =>handleClick(8)} value = {squares[8]}/>
      </div>

      </>
    );
  

  }
  

  function Square({value, onSquareClick}) {
    // function handleClick() {
    //   if (value === null || value === 'O') {
    //     setSquares("X")
    //   } else if (value === "X") {
    //     setSquares("O")
    //   }
    // } 
    return <button className="square" onClick={onSquareClick}> {value}</button>
  }
  