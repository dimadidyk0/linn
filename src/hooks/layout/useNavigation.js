import {
  LEVEL_ROUTE,
  TESTS_CREATE_ROUTE,
  TESTS_ROUTE,
} from "../../constants/routeTemplates";

export const useNavigation = () => {
  return [
    { title: "Levels", link: LEVEL_ROUTE },
    { title: "Tests", link: TESTS_ROUTE },
    { title: "Create Test", link: TESTS_CREATE_ROUTE },
  ];
};
