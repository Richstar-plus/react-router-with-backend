import { useLoaderData } from "react-router-dom";

export function TestPage() {
  const recipe = useLoaderData();

  console.log(recipe);

  return (
    <>
      <div>
        {recipe.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            {/* <p><img src={recipe.thumbnail_url} alt={recipe.name} /></p> */}
            <p>{recipe.price.total}</p>
          </li>
        ))}
      </div>
    </>
  );
}

export async function TestLoader() {
  const response = await fetch(
    "https://tasty.p.rapidapi.com/recipes/list",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dfeaf6ba79mshf4a5472af01a80dp1af4aejsnc39c76c478a8",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        'Content-Type': 'application/json'
      },
    }
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch jobs." }),
      { status: 500 }
    );
  }

  const resData = await response.json();

  return resData.results; // RapidAPI returns jobs inside "hits"
}