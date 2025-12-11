const App=()=>{

  const numbers=[1,2,3,4,5]

  return (
      <main>
        <ul>
          {numbers.map((numbers)=>(
            <h1>
              <li key={numbers}>
                {numbers}
              </li>
            </h1>
          ))}
        </ul>
      </main>
  )
}

export default App