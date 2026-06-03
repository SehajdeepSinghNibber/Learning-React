import useFetch from "./useFetch"

const App = () => {

  // const[data,useData]=useState([])

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then((res)=>res.json()
  //   .then(data=>setData(data)))
  // },[])
  // This is for one time

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <div>
      {data && data.map(item=>{
        return <p key={item.id}>
          {item.title}
        </p>
      })}  
    </div>
  )
}

export default App
