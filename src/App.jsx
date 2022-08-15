import { useState,useEffect } from 'react'
import style from './App.module.css'


function App() {
  const [X, setX] = useState(0)
  const [O, setO] = useState(0)
  const [partida, setPartida] = useState("")
  const [comparador,setComparador] = useState({signo:"O",ganador:false})
  const [block, setBlock] = useState(
    {
      c1:"",
      c2:"",
      c3:"",
      c4:"",
      c5:"",
      c6:"",
      c7:"", 
      c8:"",
      c9:""
    })
  const [animacion,setAnimacion]= useState([false,false,false,false,false,false,false,false,false])

  const animacionFunction= (a,b,c)=>{
      const filtradoDeEstadoDeAnimacion= animacion.map((e,i)=>{
        if(i===a || i === b || i ===c){
          e = true
          return e
        }
      })
      setComparador({...comparador,signo:""})
      setAnimacion(filtradoDeEstadoDeAnimacion)
      setPartida("GANADOR")

  }

const handleResultadoDePartida= ()=>{
     setTimeout(function(){
        setBlock({
      c1:"",
      c2:"",
      c3:"",
      c4:"",
      c5:"",
      c6:"",
      c7:"", 
      c8:"",
      c9:""
        })
      setAnimacion([false,false,false,false,false,false,false,false,false])
      setComparador({...comparador,signo:"O"})
      setPartida("")

  }, 4000);
  
}
  useEffect(()=>{
    //!comparador.ganador
    const valores = Object.values(block)
    const filterValoresVacios = valores.includes("") 
    console.log(filterValoresVacios)
     if(valores.includes("") || valores.includes("X")){
      if(block.c1=== "X" && block.c2 === "X" && block.c3 === "X"){
        animacionFunction(0,1,2)
        setX(X + 1)
        
        return  handleResultadoDePartida()
      }
      if(block.c1=== "O" && block.c2 === "O" && block.c3 === "O"){
        animacionFunction(0,1,2)

        setO(O + 1)
     
        
       return  handleResultadoDePartida()
      }
      if(block.c3=== "X" && block.c5 === "X" && block.c7 === "X"){
        animacionFunction(2,4,6)

        setX(X + 1)
     
        
       return  handleResultadoDePartida()
      }
      if(block.c3=== "O" && block.c5 === "O" && block.c7 === "O"){
        animacionFunction(2,4,6)

        setO(O + 1)
     
        
       return  handleResultadoDePartida()
      }
      if(block.c1=== "X" && block.c4 === "X" && block.c7 === "X"){
        animacionFunction(0,3,6)
        setX(X + 1)
   
        
       return  handleResultadoDePartida()
      }
      if(block.c1=== "O" && block.c4 === "O" && block.c7 === "O"){
        animacionFunction(0,3,6)
        setO(O + 1)
      
        
       return  handleResultadoDePartida()
      }
      if(block.c1=== "X" && block.c5 === "X" && block.c9=== "X"){
        animacionFunction(0,4,8)
        setX(X + 1)
       
        
       return  handleResultadoDePartida()
      }
      if(block.c1=== "O" && block.c5 === "O" && block.c9 === "O"){
        animacionFunction(0,4,8)
        setO(O + 1)
      
        
        return handleResultadoDePartida()
      }

      if(block.c4=== "X" && block.c5 === "X" && block.c6 === "X"){
        animacionFunction(3,4,5)
        setX(X + 1)
      
        
       return handleResultadoDePartida()
      }
      if(block.c4=== "O" && block.c5 === "O" && block.c6 === "O"){
        animacionFunction(3,4,5)
        setO(O + 1)
        
        
        return handleResultadoDePartida()
      }

      if(block.c7=== "X" && block.c8 === "X" && block.c9 === "X"){
        animacionFunction(6,7,8)
        setX(X + 1)
      
        
       return  handleResultadoDePartida()
      }
      if(block.c7=== "O" && block.c8 === "O" && block.c9 === "O"){
        animacionFunction(6,7,8)
        setO(O + 1)
      
        setPartida("WINNER")
       return handleResultadoDePartida()
      }

      if(block.c2=== "X" && block.c5 === "X" && block.c8 === "X"){
        animacionFunction(1,4,7)
        setX(X + 1)
       
        
       return handleResultadoDePartida()
      }
      if(block.c2=== "O" && block.c5 === "O" && block.c8 === "O"){
        animacionFunction(1,4,7)
        setO(O + 1)
       
        
       return  handleResultadoDePartida()
      }

      if(block.c3=== "X" && block.c6 === "X" && block.c9 === "X"){
        animacionFunction(2,5,8)
        setX(X + 1)
    
        
       return handleResultadoDePartida()
      }
      if(block.c3 === "O" && block.c6 === "O" && block.c9 === "O"){
        animacionFunction(2,5,8)
        setO(O + 1)
      
        
       return  handleResultadoDePartida()
      }

      if(block.c7=== "X" && block.c8 === "X" && block.c9 === "X"){
        animacionFunction(6,7,8)
        setX(X + 1)
      
        
       return handleResultadoDePartida()
      }
      if(block.c7 === "O" && block.c8 === "O" && block.c9 === "O"){
        animacionFunction(6,7,8)
        setO(O + 1)
        
       return handleResultadoDePartida()
      }
      // if(block1.mostrar  && block2.mostrar && block3.mostrar && block4.mostrar && block5.mostrar && block6.mostrar && block7.mostrar && block8.mostrar && block9.mostrar)   setPartida("EMPATE")
     if(!valores.includes("")){
       setPartida("Empate")
       return handleResultadoDePartida()

     }
     }
  },[block])
  

const handleXOrO = (e)=>{
  if(comparador.signo === "O" ){
    if(!e.target.value){
      setComparador({...comparador,signo:"X"})
        setBlock({
          ...block,
          [e.target.id] :"X"
        })
    }
}
  if(comparador.signo === "X" ){
    if(!e.target.value){
    setComparador({...comparador,signo:"O"})
    setBlock({
      ...block,
      [e.target.id] :"O"
    })
  }
}

}
  return (
    <main className={style.containerPrincipal}>

      <div className={style.cartel}> <h1>{partida}</h1></div>
      <section className={style.container}>
        <div onClick={handleXOrO} id="c1" name="c1" value={block.c1} className={animacion[0] ? style.blockActive :style.block}>{block.c1 && <p className={block.c1 ==="X" ? style.pX : style.pO} >{block.c1}</p>}</div>
        <div onClick={handleXOrO} id="c2" name="c2" value={block.c2} className={animacion[1] ? style.blockActive :style.block}>{block.c2 && <p className={block.c2 ==="X" ? style.pX : style.pO}>{block.c2}</p>}</div>
        <div onClick={handleXOrO} id="c3" name="c3" calue={block.c3} className={animacion[2] ? style.blockActive :style.block}>{block.c3 && <p className={block.c3 ==="X" ? style.pX : style.pO}>{block.c3}</p>}</div>

        <div onClick={handleXOrO} id="c4" name="c4" value={block.c4} className={animacion[3] ? style.blockActive :style.block}>{block.c4 && <p className={block.c4 ==="X" ? style.pX : style.pO}>{block.c4}</p>}</div>
        <div onClick={handleXOrO} id="c5" name="c5" value={block.c5} className={animacion[4] ? style.blockActive :style.block}>{block.c5 && <p className={block.c5 ==="X" ? style.pX : style.pO}>{block.c5}</p>}</div>
        <div onClick={handleXOrO} id="c6" name="c6" value={block.c6} className={animacion[5] ? style.blockActive :style.block}>{block.c6 && <p className={block.c6 ==="X" ? style.pX : style.pO}>{block.c6}</p>}</div>

        <div onClick={handleXOrO} id="c7" name="c7" value={block.c7} className={animacion[6] ? style.blockActive :style.block}>{block.c7 && <p className={block.c7 ==="X" ? style.pX : style.pO}>{block.c7}</p>}</div>
        <div onClick={handleXOrO} id="c8" name="c8" value={block.c8} className={animacion[7] ? style.blockActive :style.block}>{block.c8 && <p className={block.c8 ==="X" ? style.pX : style.pO}>{block.c8}</p>}</div>
        <div onClick={handleXOrO} id="c9" name="c9" value={block.c9} className={animacion[8] ? style.blockActive :style.block}>{block.c9 && <p className={block.c9 ==="X" ? style.pX: style.pO}>{block.c9}</p>}</div>
      <div className={style.contador}>
        <h2  style={{backgroundColor:"red", color:"black"}}>{X}</h2>
        <h2 style={{backgroundColor:"blue",color:"white"}}>{O}</h2>
      </div>
      </section>
    </main>
  )
}

export default App
