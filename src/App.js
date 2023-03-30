import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Menulist from './Components/Menulist';

const AllCate = [ ...new Set(Menu.map((curEle) => { return curEle.category })), "All"];
console.log(AllCate);

function App() {

const[itemData, setItemData]= useState(Menu)
const[catItem, setCatItem] = useState(AllCate);

const filterItem = (type) => {

  if(type === 'All'){
      setItemData(Menu)
      return;
  }

  const latestItem = Menu.filter((curEle) => {
      return curEle.category === type;
  });
  setItemData(latestItem);

}

  return (
    <div className="App">
     <div className="main-div">
      <h1>OorderMee:- Order Ur Fav Item</h1>
            <hr/>

            <div className='btn-div'>
            {
                catItem.map((btnEle, index) => {
                    return <button className="category-btn" key={index} onClick={() => filterItem(btnEle)}>{btnEle}</button>
                })
            }
               {/* <button onClick={() => filterItem('Breakfast')}>Breakfast</button>
                <button onClick={() => filterItem('Lunch')}>Lunch</button>
                <button onClick={() => filterItem('Snacks')}>Snacks</button>
                <button onClick={() => filterItem('Dinner')}>Dinner</button>
                <button onClick={() => setItemData(Menu)}>All</button>*/}
            </div>

            <div className='main-item-div'>
            
    {
      itemData.map((elem) => (
         <Menulist
          key={elem.id}
          list={elem}
          setItemData={setItemData}
        />
      ))
    }
  
    </div>
    </div>
      
    </div>
  );
}

export default App;
