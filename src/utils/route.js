import {
  LEVEL_DETAIL_ROUTE,
  RADICAL_DETAIL_ROUTE,
} from "../constants/routeTemplates";

export const buildLevelDtailRoute = (id) =>
  LEVEL_DETAIL_ROUTE.replace(":id", id);
export const buildRadicalDtailRoute = (id) =>
  RADICAL_DETAIL_ROUTE.replace(":id", id);
