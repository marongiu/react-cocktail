import React, {useState} from 'react';

function SearchBar({handleCocktailSearch}) {
  

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCocktailSearch(inputValue);
        setInputValue('');
    }


    return (
      <form className="searchbar mt-5" onSubmit={handleSubmit}>
        <input 
        className="p-2"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value )}
        placeholder="Cerca..."
        />
      </form>
    );
  }
  
  export default SearchBar;
  