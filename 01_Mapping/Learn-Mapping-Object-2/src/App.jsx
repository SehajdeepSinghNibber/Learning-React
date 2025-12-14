  const App=()=> {

    const userInfo=[
      {
        name:"Sehajdeep Singh",
        email:"ssingh28_be24@thapar.edu",
        location:"India"
      },
      {
        name:"Sehajdeep Singh Nibber",
        email:"sehajdeepsdsn@gmail.com",
        location:"Punjab"
      },
      {
        name:"Sehajdeep Singh",
        email:"sehajdeepsinghsdsn@gmail.com",
        location:"Mohali"
      }
    ]

    return (
      <main>
        <ul>
          {userInfo.map(({name,email,location},index)=>(
            <li key={index}>My name is {name} and my email is {email} and my location is {location}</li>
          ))}
        </ul>
      </main>
    )
  }

  export default App