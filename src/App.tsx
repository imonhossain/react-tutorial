import { useState } from 'react';
import './App.css';
const list = [
  {
    name: 'Apple',
    id: '1'
  },
  {
    name: 'Orange',
    id: '2'
  },
  {
    name: 'Banana',
    id: '3'
  },
  {
    name: 'Lemon',
    id: '4'
  },
]
export function App() {
  const [sortedList, setSortedList] = useState(list);
  const [isAscending, setIsAscending] = useState(true);
  const toggleSort = () => {
    const sorted = [...sortedList].sort((a, b) => {
      if (isAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortedList(sorted);
    setIsAscending(!isAscending);
  };
  return (
    <div className="App">
      <button type="button" onClick={toggleSort}>
        Toggle
      </button>
     {
      sortedList?.map((item, index) => 
        <div key={item.id}>
          {item.name}
          <input type="text" />
        </div>
      )
     }
    </div>
  );
}