import { useState, useEffect, useRef } from 'react'


function ItemList({list, clickFunction, selectedFunction}) {

    const hovered = useRef();

    return (
    <ul>
        {list.map((list, i) => (
          <li 
          ref={hovered}
          className={`${selectedFunction(i)} hovered`}
          key={`radio ${i}`}
          onClick={clickFunction}
          >
            {list.radio}
          </li>
        ))}
    </ul>
)}

export default ItemList;