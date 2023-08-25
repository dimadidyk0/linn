import { LEVEL_DETAIL_ROUTE } from "../constants/routeTemplates";

export const buildLevelDtailRoute = (id) =>
  LEVEL_DETAIL_ROUTE.replace(":id", id);
