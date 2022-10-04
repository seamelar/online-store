import { ADMIN_ROUTE, BASKET_ROUTE, ENTITY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, PLAYER_ROUTE, WELCOME_ROUTE } from "./utils/consts";
import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import Player from "./pages/Player"
import Shop from "./pages/Shop"
import WelcomePage from "./pages/WelcomePage"
import EntityPage from "./pages/EntityPage"
import Auth from "./pages/Auth"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PLAYER_ROUTE,
        Component: Player
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ENTITY_ROUTE + '/:id',
        Component: EntityPage
    },
]

export const publicRoutes = [
    {
        path: WELCOME_ROUTE,
        Component: WelcomePage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]