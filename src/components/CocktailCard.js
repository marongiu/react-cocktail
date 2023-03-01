

function Cocktail({cocktail}) {
  console.log(cocktail);
  return (
    <div className="cocktail bg-orange-300 py-5 mt-2">
      <p>{cocktail.strDrink}</p>
    </div>
  );
}

export default Cocktail;
