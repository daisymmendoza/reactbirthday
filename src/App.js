import React, {useState} from 'react'
import Data from './Data'
import List from './List'

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <div className="birthdaySection">
      <h3>There are {people.length} birthdays today!</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;