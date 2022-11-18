import React, {useState, useEffect} from 'react'

const App = () => {
  
  // useState
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name;
  });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleRezie = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleRezie);
    return (() => {
      window.removeEventListener('resize', handleRezie);
    })
  })


  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <section>
      <h1>Belajar UseEffect ReactJS dengan Functional Component</h1>
        <input 
        type="text"
        value={name}
        onChange={handleNameChange}
        />
        <br />
        <span>
          Window Width : {width}
        </span>
    </section>
  )
}

export default App