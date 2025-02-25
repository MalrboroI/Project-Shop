import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  CARD_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  PRODUCT_ROUTE,
} from "../utils/constans";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import ProductCard from "../pages/ProductCard";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import ProductPage from "../pages/ProductPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: CARD_ROUTE + "/:id",
    Component: ProductCard,
  },
  {
    path: PRODUCT_ROUTE + "/:types",
    Component: ProductPage,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];
