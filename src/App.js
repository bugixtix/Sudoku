import { useEffect } from 'react';
import './App.css';
import { notdo$, shuffle$ } from './lainy';

export default function App() {
  var x = 0;
  var outDiv_ = {
    display:'flex',flexWrap:'wrap',
    width:'498px'
  }
  var inDiv_ = {
    display:'flex',flexWrap:'wrap',
    width:'166px',margin:'4px 0px'
  }
  let nums = [1,2,3,4,5,6,7,8,9]
  let nums_ = [1,2,3,4,5,6,7,8,9]

  useEffect(()=>{
    var items = document.querySelectorAll('.value_');
    items.forEach((i)=>{if(i.id==1||i.id==2||i.id==3)console.log(i)})
  },[x])
  return (
    <div className="App">


      <div style={outDiv_}>

      <div style={inDiv_}>
      {     shuffle$(nums).map((value,index)=><SQUARE value={`${value}`} id_={`${index+1}`} key={`${index}`} theme={'#aaa'} row={index==0?0:index==1?0:index==2?0:index==3?1:index==4?1:index==5?1:2}  col={index==0?0:index==3?0:index==6?0:index==1?1:index==4?1:index==7?1:2}/>)    }   
      </div>
      <div style={inDiv_}>
      {     shuffle$(nums).map((value,index)=><SQUARE value={`${value}`} id_={`${index+1}`} key={`${index}`} theme={'#aaa'} row={index==0?0:index==1?0:index==2?0:index==3?1:index==4?1:index==5?1:2}  col={index==0?0:index==3?0:index==6?0:index==1?1:index==4?1:index==7?1:2}/>)    }   
      </div>
      <div style={inDiv_}>
      {     shuffle$(nums).map((value,index)=><SQUARE value={`${value}`} id_={`${index+1}`} key={`${index}`} theme={'#aaa'} row={index==0?0:index==1?0:index==2?0:index==3?1:index==4?1:index==5?1:2}  col={index==0?0:index==3?0:index==6?0:index==1?1:index==4?1:index==7?1:2}/>)    }   
      </div>
      <div style={inDiv_}>
      {     shuffle$(nums).map((value,index)=><SQUARE value={`${value}`} id_={`${index+1}`} key={`${index}`} theme={'#aaa'} row={index==0?3:index==1?3:index==2?3:index==3?4:index==4?4:index==5?4:5}  col={index==0?3:index==3?3:index==6?3:index==1?4:index==4?4:index==7?4:5}/>)    }   
      </div>
      <div style={inDiv_}>
      {     shuffle$(nums).map((value,index)=><SQUARE value={`${value}`} id_={`${index+1}`} key={`${index}`} theme={'#aaa'} row={index==0?3:index==1?3:index==2?3:index==3?4:index==4?4:index==5?4:5}  col={index==0?3:index==3?3:index==6?3:index==1?4:index==4?4:index==7?4:5}/>)    }   
      </div>
      <div style={inDiv_}>
      {     shuffle$(nums).map((value,index)=><SQUARE value={`${value}`} id_={`${index+1}`} key={`${index}`} theme={'#aaa'} row={index==0?3:index==1?3:index==2?3:index==3?4:index==4?4:index==5?4:5}  col={index==0?3:index==3?3:index==6?3:index==1?4:index==4?4:index==7?4:5}/>)    }   
      </div>
      <div style={inDiv_}>
      {     shuffle$(nums).map((value,index)=><SQUARE value={`${value}`} id_={`${index+1}`} key={`${index}`} theme={'#aaa'} row={index==0?6:index==1?6:index==2?6:index==3?7:index==4?7:index==5?7:8}  col={index==0?6:index==3?6:index==6?6:index==1?7:index==4?7:index==7?7:8}/>)    }   
      </div>
      <div style={inDiv_}>
      {     shuffle$(nums).map((value,index)=><SQUARE value={`${value}`} id_={`${index+1}`} key={`${index}`} theme={'#aaa'} row={index==0?6:index==1?6:index==2?6:index==3?7:index==4?7:index==5?7:8}  col={index==0?6:index==3?6:index==6?6:index==1?7:index==4?7:index==7?7:8}/>)    }   
      </div>
      <div style={inDiv_}>
      {     shuffle$(nums).map((value,index)=><SQUARE value={`${value}`} id_={`${index+1}`} key={`${index}`} theme={'#aaa'} row={index==0?6:index==1?6:index==2?6:index==3?7:index==4?7:index==5?7:8}  col={index==0?6:index==3?6:index==6?6:index==1?7:index==4?7:index==7?7:8}/>)    }   
      </div>

      </div>


    </div>
  );
}

function SQUARE(prop){
  var outDiv_={
    width:'50px', height:'50px',
    background:prop.theme, border:'2px solid #000',
    display:'flex',flexWrap:'wrap',
  }
  var p_2 = {
    fontSize:'24px',fontWeight:'600'
  }
  var p_1 = {
    color:'rgba(200,200,200,0.8)'
  }


  return(

    <div style={outDiv_}>
      <p style={p_1}>
      id{prop.id_}
      </p>

      <p style={p_2} id={prop.id_} className={'value_'} label={prop.row} name={prop.col}>
        {prop.value}
      </p>
    </div>
  )
}