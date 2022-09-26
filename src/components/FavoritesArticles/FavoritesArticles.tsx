import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { StyledSignIn } from "./styles";

export const FavoritesArticles = () => {
  return (
    <StyledSignIn>
      <Link to={ROUTE.FAVORITES_ARTICLES}> 🧡Articles</Link>
    </StyledSignIn>
  );
};