import { Route, Routes } from "react-router-dom";

// All Meetups
import AllMeetupsPage from "./pages/AllMeetups";
import AllMeetupsLayout from "./pages/AllMeetupsLayout";

// New Meetup
import NewMeetupPage from "./pages/NewMeetup";
import NewMeetupLayout from "./pages/AllMeetupsLayout";

// Favorite
import FavoritesPage from "./pages/Favorites";
import FavoritesLayout from "./pages/FavoritesLayout";

// Navigation
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <div>
            <MainNavigation/>
            <Routes>
                <Route>
                <Route element={<AllMeetupsLayout/>}/>
                    <Route path='/' element={<AllMeetupsPage/>} />
                </Route>
                <Route>
                <Route element={<NewMeetupLayout/>}/>
                    <Route path="/new-meetup" element={<NewMeetupPage/>} />
                </Route>
                <Route>
                <Route element={<FavoritesLayout/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
