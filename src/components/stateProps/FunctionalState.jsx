import React, {useState} from 'react'

// react hooks 
// or use state in class Component
const App = () => {

  /**
   * useState adalah sebuah Hook, dan akan mengembalikan nilai dari state (pada contoh dibawah: name) dan fungsi yang bisa kita gunakan untuk mengubah nilai tersebut (setName). Fungsi setName disini mirip dengan cara kerja this.setState.
   * 
   * isi dari useState bisa juga object 
   * useState({
   *   product: 'teko',
   *   price: 100
   * });
   */

  // menggunakan State
  const [nama, setNama] = useState('');

  const handleChangeName = (e) => {
    setNama(e.target.value);
  }

  return (
    <section>
      <h1>Belajar React Hooks</h1>
      <p>
        {nama}
      </p>
      <label htmlFor="nama">
        Silahkan Masukan Text
      </label><br/>
      <input 
      placeholder='Masukan nama cui'
      name="nama"
      id="nama"
      type="text"
      value={nama}
      onChange={handleChangeName}
       />
    </section>
  )
}

export default App