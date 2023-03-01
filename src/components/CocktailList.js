import CocktailCard from './CocktailCard';

function CocktailList({data}) {
  return (
    <div className="cocktail-list">
        <ul>
          <li>
            {
              data.map((cocktail) => {
               return <CocktailCard cocktail={cocktail}/>
              })
            }
          </li>
        </ul>
    </div>
  );
}

export default CocktailList;
