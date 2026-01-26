import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css"

const App = () => {

  const [meal, setMeal] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(res => {
        setMeal(res.data.meals)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const filteredMeals = meal.filter(item =>
    item.strMeal.toLowerCase().includes(search.toLowerCase())
  )

  const Meals=filteredMeals.map(({ strMeal, strMealThumb, idMeal }) => (
            <section className="card" key={idMeal}>
              <img src={strMealThumb} alt={strMeal} />
              <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
              </section>
            </section>
          ))

  return (
    <div className="app-wrapper">

      <div className="search-box">
        <input
          type="text"
          placeholder="Search meals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="app-box">
        <div className="items-container">
          {Meals}
        </div>
      </div>

    </div>
  )
}

export default App
