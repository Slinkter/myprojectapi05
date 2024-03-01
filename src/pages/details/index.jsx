import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import Favorites from "../favorites";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailData,
    setRecipeDetailData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data && data?.data) {
        setRecipeDetailData(data?.data);
        console.log(data.data);
      }
    }

    getRecipeDetails();

    return () => {};
  }, [id]);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailData?.recipe.image_url}
            alt="hola"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm  text-cyan-700  font-medium">
          {recipeDetailData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailData?.recipe?.title}
        </h3>

        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailData?.recipe)}
            className={
              favoritesList.findIndex(
                (item) => item.id === recipeDetailData?.recipe?.id
              ) !== -1
                ? "bg-red-700 text-white  p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block  shadow-md"
                : "bg-black text-white  p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block  shadow-md"
            }
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailData?.recipe?.id
            ) !== -1
              ? "Remove from favorite"
              : "ADD to favorite"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients :
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailData?.recipe?.ingredients.map((ingrediente) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {ingrediente.quantity} {ingrediente.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingrediente.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
