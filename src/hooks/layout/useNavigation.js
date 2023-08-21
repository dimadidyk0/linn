import {
  ROOT_ROUTE,
  LEVELS_ROUTE,
  PRACTICE_ROUTE,
  THEORY_ROUTE,
} from "../../constants/routeTemplates";

export const useNavigation = () => {
  return [
    { title: "Home", link: ROOT_ROUTE },
    { title: "Levels", link: LEVELS_ROUTE },
    { title: "Theory", link: THEORY_ROUTE },
    { title: "Practive", link: PRACTICE_ROUTE },
  ];
};
