import { useEffect, useState } from 'react';
import './App.css';
import { notdo$, shuffle$ } from './lainy';

export default function App() {
  var x = 0;
  
  var initial_ = [
    [-1,-1,2,1,-1,-1,5,9,7],
    [5,8,-1,-1,-1,-1,6,3,1],
    [-1,-1,6,-1,3,-1,4,2,8],
    [-1,-1,-1,8,-1,-1,1,6,9],
    [-1,6,-1,4,-1,2,-1,5,-1],
    [-1,5,8,-1,-1,-1,-1,4,2],
    [7,-1,5,-1,9,-1,-1,8,4],
    [8,-1,3,5,-1,-1,-1,7,-1],
    [-1,-1,4,-1,-1,-1,9,-1,5],
  ]
  
  var [sudokuArr, setSudokuArr] = useState(initial_)
  
  var outDiv_ = {
    display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'
  }

  var cellInput = {
    width:'50px',height:'50px',padding:'0px',
    border:'1px solid #000',
    fontSize:'20px',
    textAlign:'center',
    background:'transparent'
  }

  var table_s = {
    borderCollapse:'collapse',
  }

  var tbody_s = {
    display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',flexDirection:'column',
    margin:'8vh 0px',
    border:'3px solid bisque',
    background:'bisque'
  }

  var td_s = {
    padding:'0',
  }

  var outDiv_1 = {
    display:'flex',alignItems:'center',justifyContent:'center'
  }
  
  var btn_1={
    padding:'8px 12px',
    background:'#f33',
    color:'#fff',
    borderRadius:'8px',border:'none',
    cursor:'pointer',
    fontWeight:'bolder',
    textShadow:'2px 2px 5px #000',
  }
  var btn_2={
    padding:'8px 12px',margin:'0px 20px',
    background:'#3f3',
    color:'#fff',
    borderRadius:'8px',border:'none',
    cursor:'pointer',
    fontWeight:'bolder',
    textShadow:'2px 2px 5px #000',

  }
  var btn_3={
    padding:'8px 12px',
    background:'#33f',
    color:'#fff',
    borderRadius:'8px',border:'none',
    cursor:'pointer',
    fontWeight:'bolder',
    textShadow:'2px 2px 5px #000',

  }

  // - - - - - - - - - - --  -- - - - - --  

  function getDeepCopy(arr){
    return JSON.parse(JSON.stringify(arr))
  }
  var INPUTCHANGE = (e,row,col)=>{
    var val = parseInt(e.target.value) || -1 , grid = getDeepCopy(sudokuArr)
    if(val===-1 || val >=1 && val<=9){
        grid[row][col] = val
    }
    setSudokuArr(grid)
  }

  var resetSudoku = () => {
    
  } 
  var solveSudoku = () => {
    let board = getDeepCopy(sudokuArr);
    for(let i =0; i<9 ; i++){
      for (let j=0; j<9; j++){
        
      }
    }


  }
  
  var checkSudoku = () => {
    let board = getDeepCopy(sudokuArr);
    for (let i = 0 ; i<9 ; i++){
      // console.log(board[i].filter((item,index)=>board[i].indexOf(item)!==index))
    }
    let array_ = [];
    for (let j = 0 ; j<9; j++){
      for (let x = 0; x<9; x++){
        // board[x].filter((item,index)=>board[x].indexOf(item)!==index)
        array_.push(board[x][j])
        if(x===8){
          console.log(array_.filter((item,index)=>array_.indexOf(item)!==index))
          array_=[]
        }
      }
    }
  } 
  return(

    <div style={outDiv_}>

      <table style={table_s}>
        <tbody style={tbody_s}>
      {
        [0,1,2,3,4,5,6,7,8].map((row,rIndex)=>{
        return(
          <tr key={rIndex} className={rIndex!=8&&(row + 1) %3 === 0 ? 'bottomBorder' : ''}>
              {[0,1,2,3,4,5,6,7,8].map((col,cIndex)=>{
                return <td key={rIndex+cIndex} style={td_s} className={cIndex!=8&&(col+1)%3 === 0 ? 'rightBorder' : ''}>
                <input 
                onChange={(e)=>INPUTCHANGE(e,row,col)} 
                value={sudokuArr[row][col]===-1?'':sudokuArr[row][col]} 
                style={cellInput}
                disabled={initial_[row][col]!==-1}/>
                </td>
              })}          
          </tr>
        )
        })
      }
      </tbody>
      </table>

      <div style={outDiv_1}>
        <button style={btn_1} onClick={resetSudoku}>reset</button>
        <button style={btn_2} onClick={solveSudoku}>solve</button>
        <button style={btn_3} onClick={checkSudoku}>check</button>
      </div>

    </div>
  )
}