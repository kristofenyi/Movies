import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovieTheaters from "./movieTheaters/CreateMovieTheaters";
import EditMovieTheaters from "./movieTheaters/EditMovieTheaters";
import IndexMovieTheaters from "./movieTheaters/IndexMovieTheaters";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovie";
import LandingPage from "./movies/LandingPageComponent";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    {path: '/genres', component: IndexGenres},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id', component: EditGenre},

    {path: '/actors', component: IndexActors},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit', component: EditActor },

    {path: '/movietheaters', component: IndexMovieTheaters},
    {path: '/movietheaters/create', component: CreateMovieTheaters},
    {path: '/movietheaters/edit/:id', component: EditMovieTheaters },

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id', component: EditMovie},
    {path: '/movies/filter', component: FilterMovies },


    {path:'/', component: LandingPage},
    
    {path: '*', component:RedirectToLandingPage }
];

export default routes;