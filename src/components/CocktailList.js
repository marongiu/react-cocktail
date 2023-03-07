import CocktailCard from './CocktailCard';

function CocktailList({data}) {
  return (
    <div className="cocktail-list">
      <ul className="grid grid-cols-3 gap-4">
        {data.map((cocktail) => {
          return (
            <li>
              <CocktailCard cocktail={cocktail} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CocktailList;
