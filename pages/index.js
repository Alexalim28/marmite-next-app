import { createClient } from "contentful";
import RecipieCard from "../components/RecipeCard";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESSKEY,
});

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: items,
      revalidate: 10,
    },
  };
}

export default function Recipes({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipieCard key={recipe.sys.id} recipe={recipe} />
      ))}
      <style jsx>
        {`
          .recipe-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
          }
        `}
      </style>
    </div>
  );
}
