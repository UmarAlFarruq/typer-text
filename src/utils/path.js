import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import RaceGame from "../pages/raceGame";
import SiginInPage from "../pages/siginIn";
import SecketPage from "../pages/socket";


export const path = [
    {
        id: 1,
        path: 'home',
        component: <HomePage />,
        hidden: false,
        search:'?'
    },
    {
        id: 2,
        path: 'profile',
        component: <ProfilePage />,
        hidden: false,
        search:'?'
    },
    {
        id: 3,
        path: 'raceGame',
        component: <RaceGame />,
        hidden: false,
        search:'?'
    },
    {
        id: 4,
        path: 'siginin',
        component: <SiginInPage />,
        hidden: true,
        search:'?'
    },
    {
        id: 5,
        path: 'socket',
        component: <SecketPage />,
        hidden: false,
        search:'?'
    },
]