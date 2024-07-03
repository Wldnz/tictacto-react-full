import { useState } from 'react';
import Header from './components/Header';
import Challange from './components/Challange';
import Tictactoe from './components/Tictactoe';


function App() {
  let [challanges,setChallenges] = useState(false);
  // player X = True, Player O = False
  let [isPlayer,setPlayer] = useState(true);


  function challangeHandle(isDoChallange){
    isDoChallange? setChallenges(challanges = true) : setChallenges(challanges = false);
  }


  const displayPostionElement = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],
    ["1","5","9"],
    ["3","5","7"]
  ]

  function mencariKubu(kubu){
    let isFound = false;
    for(let i = 0; i < displayPostionElement.length; i++){
      const [a,b,c] = displayPostionElement[i];
      kubu.map(elements => {
       kubu.map(elements2 =>  {
        kubu.map(elements3 => {
          if (elements.classList[1] === a && elements2.classList[1] === b && elements3.classList[1] === c){
            console.log({
              message : `Pemenangnya Adalah ${elements.textContent}`,
              pemenang : elements.textContent,
              Posisi1 : elements.classList[1],
              Posisi2 : elements2.classList[1],
              Posisi3 : elements3.classList[1],
            });
            isFound = true;
            console.log('Aku Di Bawahh Return True');
          }
        })
       })
      })
    }
    if(isFound){
      return true;
    }else{
      return false;
    }
  }
  function addContentIntoDisplay(e){
    const x =  '✖';
    const o = '⭕';
    let displayContent = e.target;
    const displayPostion = e.target.classList[1];
    const displayParentElement =[... e.target.parentElement.children];

    isPlayer? displayContent.textContent = '✖' : displayContent.textContent = '⭕';
    setPlayer(isPlayer? isPlayer = false : isPlayer = true)

    // filter 2 kubu
    let kubuX = displayParentElement.filter((elementX) => elementX.textContent === x);
    let kubuO = displayParentElement.filter((elementX) => elementX.textContent === o);
   
    let countKubux = 0;
    

    // mencari kubuX ada yng sama gak
    kubuX = mencariKubu(kubuX)
    // mencari kubuY ada yng sama gak
    kubuO = kubuO.length <= 0? 'Blm Bisa ini si O' : mencariKubu(kubuO)
    console.log("Kubu X : " + kubuX );
    console.log("Kubu O : " + kubuO );
    // console.log(kubuO.length <= 0? 'Blm Bisa ini si O' : (mencariKubu(kubuO)));
   if (kubuX === true){
      alert("Pemenangnya adalah Kubu X");
      resetButtonKubu(document.querySelector('.tictactoeBox'));
   }
   if (kubuO === true){
    alert("Pemenangnya adalah Kubu X");
    resetButtonKubu(document.querySelector('.tictactoeBox'));
   }
}
  
  function resetButton(e){
    const displayParentElement = [...e.target.parentElement.children[1].children];
    displayParentElement.map(element => element.textContent = '');
    setPlayer(isPlayer);
  }
  function resetButtonKubu(e){
    const displayParentElement = [...e.children];
    console.log(displayParentElement)
    displayParentElement.map(element => element.textContent = '');
    setPlayer(isPlayer);
  }

  return (
    <>
      <Header/>
      <Challange doChallange={challangeHandle}/>
      {challanges?  <Tictactoe putContent={addContentIntoDisplay} resetButton={resetButton}/> : false }
     
    </>
  )
}

export default App
