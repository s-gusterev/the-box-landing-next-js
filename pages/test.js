import { useState, useEffect } from "react";


const Test = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setContacts(json))
  }, [])


  return (
    <div style={{ margin: '0 auto', width: 300 }}>{contacts.slice(0, 5).map((item, index) => (

      <div style={{ marginBottom: index === 4 ? 0 : 20 }} key={item.id}>{item.name}{console.log(contacts.length)}</div>

    ))
    }</div>
  )
}

export default Test