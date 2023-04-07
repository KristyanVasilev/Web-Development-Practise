
import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState();
  const [occupation, setOccupation] = useState('doctor');

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`The username you entered was: ${username}, age: ${age} and occupation: ${occupation}!`)
  }

  const onUsernameChange = (e) => {

    setUsername(e.target.value);
  }

  const onAgeChange = (e) => {

    setAge(Number(e.target.value));
  }

  const onOccupationChange = (e) => {

    setOccupation(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>

      <div>
        <label htmlFor='username'>Enter your username:
          <input
            type='text'
            name='username'
            id='username'
            value={username}
            onChange={onUsernameChange}
          />
        </label>
      </div>

      <div>
        <label htmlFor='age'>Enter your age:
          <input
            type='number'
            name='age'
            id='age'
            value={age ?? ''}
            onChange={onAgeChange}
          />
        </label>
      </div>

      {age >= 18 ? <div>
        <label htmlFor='occupation'>Select occupation:
          <select name='occupation' id='occupation' value={occupation} onChange={onOccupationChange}>
            <option value='it'>IT</option>
            <option value='engenering'>Engenering</option>
            <option value='doctor'>Doctor</option>
          </select>
        </label>
      </div> : null}

      <input type="submit" />
    </form>
  )
}

export default App;
