import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";
import { updateListingRoute } from "./updateListing";
import { staticFilesRoute, filesRoutes } from './files';

export default [
    addViewToListingRoute,
    createNewListingRoute,
    deleteListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute,
    updateListingRoute,
    staticFilesRoute,
    ...filesRoutes,
];