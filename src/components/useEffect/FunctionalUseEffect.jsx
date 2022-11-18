import React, {useState, useEffect} from 'react'

const App = () => {

  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name;
  });

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
  
    <section>

      <h1>useEffect react</h1>
      <input 
      type="text" 
      name="" 
      id=""
      value={name}
      onChange={handleNameChange}
      />
    </section>
    )
}

export default App