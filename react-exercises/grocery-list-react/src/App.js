//import React from 'react';
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    "Coriander", "Saunf", "Oregano"
  ]);
  return (
    <div id="list-container">

      <h1 className="title-heading">Grocery List</h1>

      {/*Displaying and removing items on click of that item*/} 
      <ListDisplay items={items} handleClick={(item) => {
        setItems(items.slice().filter((i) => i !== item));
      }}/>

      {/*Adding Items to the list*/}
      <InputText handleSubmit={(item) => {
          setItems(items.concat(item));
        }}
      />

      <button>Remove All</button>

    </div>
  )
}

const ListItem = (props) => (
<li onClick={()=> props.handleClick(props.name)}>{props.name}</li>
)

const ListDisplay = (props) => {
  const items = props.items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
      handleClick={props.handleClick}
    />
  ))
  return (
    <ul>
      {items}
    </ul>
  )
}

const InputText = (props) => {
  const [value, setValue] = useState('')
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit(value);
      setValue('');
    }}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

export default App;
