import {
  LEVEL_ROUTE,
  TESTS_ROUTE,
  // PRACTICE_ROUTE,
  // THEORY_ROUTE,
} from "../../constants/routeTemplates";

export const useNavigation = () => {
  return [
    { title: "Levels", link: LEVEL_ROUTE },
    { title: "Tests", link: TESTS_ROUTE },
    // { title: "Practive", link: PRACTICE_ROUTE },
  ];
};
