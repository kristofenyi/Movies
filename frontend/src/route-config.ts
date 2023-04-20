import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandingPageComponent";

const routes = [
    {path: '/genres', component: IndexGenres},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit', component: EditGenre},
    {path:'/', component: LandingPage}
];

export default routes;