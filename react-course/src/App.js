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

import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route>
                    <Route element={<AllMeetupsLayout />} />
                    <Route path="/" element={<AllMeetupsPage />} />
                </Route>
                <Route>
                    <Route element={<NewMeetupLayout />} />
                    <Route path="/new-meetup" element={<NewMeetupPage />} />
                </Route>
                <Route>
                    <Route element={<FavoritesLayout />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </Layout>
    );
}

export default App;
