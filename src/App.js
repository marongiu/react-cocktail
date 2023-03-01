import React,{useState} from 'react';
import CocktailList from './components/CocktailList';
import SearchBar from './components/SearchBar';


function App() {

  const [data, setData] = useState([]);

  const handleCocktailSearch = (cocktail) => {
    const fetchData = async () => {
      await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then((response) => response.json())
        .then((data) => setData(data.drinks));
      
    }

    fetchData();

  }

  console.log(data);

  
  return (
    <div className="App">  
       <header className='text-center bg-orange-300 py-5 text-2xl'>     
        <h1>APP</h1>
        <SearchBar/>
       </header>
      <CocktailList />
    </div>
  );
}

export default App;
