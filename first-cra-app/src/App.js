import { useState } from 'react';
import './App.css';
import img from "./image/logoSneakers.png"

function App() {
  const [disabled, setDisabled] = useState(false)
  const [footerButtonClass, setfooterButtonClass] = useState("activeFooterButton")
  const [textFooterButton, setTextFooterButton] = useState("Добавить в корзину")
  const [buttonBasket, setButtonBasket] = useState("")
  const [moduleWindow, setModuleWindow] = useState("")

  const handleClick = () => {
    setfooterButtonClass("notActiveFooterButton")
    setTextFooterButton("Уже в корзине")
    setButtonBasket(<button onClick={handleClickBasket} className="deleteBtn">Удалить из корзины</button>)

  }

  const handleClickBasket = () => {
    setButtonBasket("")
    setDisabled(false)
    setfooterButtonClass("activeFooterButton")
    setTextFooterButton("Добавить в корзину")
  }

  const handleClickModule = () => {
    setModuleWindow(<div className='moduleWindow'><div className='moduleWindowText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vel temporibus deleniti possimus</div><div><button className="moduleWindowButton" onClick={handleModuleWindowClick}>ⓧ</button></div></div>)
  }

  const handleModuleWindowClick = () => {
    setModuleWindow("")
  }
  return (
   <div className="container">
     <div className="headerCard">
       <img src={img} width="100%" alt="" />
     </div>

     <div className="bodyCard">
       <div className="textBodyCard">
         <h2>Nike Sneaker</h2>
         <h1>$120</h1>
       </div>

       <div className="bodyButton">
         <button type='button'  onClick={handleClickModule} className="bodyBtn">
           Детали
         </button>
         <div>{moduleWindow}</div>
         </div>
     </div>

     <div className="footerCard">
       <div className="footerText">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati </p>
       </div>

       <div className="footerButtonBlock">
       <button onClick={handleClick}
        className={footerButtonClass}
          type="button"
           disabled={disabled}>
            {textFooterButton}
            </button>
            <div>{buttonBasket}</div>
       </div>

     </div>
   </div>
  );
}

export default App;
