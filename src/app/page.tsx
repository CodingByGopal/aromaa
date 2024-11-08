import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { RecipesService } from "@/services/recipes.service";
import Link from "next/link";

export default async function Home() {
  const data = await RecipesService.getAllRecipes();
  return (
    <div>
      Test
      <ThemeToggle />
      <Button>Button</Button>

      {data?.recipes?.map((recipe: {
        id: string;
        name: string;
      }) => {
        return (
          <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
            <h2>{recipe.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
