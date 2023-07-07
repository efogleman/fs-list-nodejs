const staticPath = 'dist/list-angular';

const angularRoutePaths = [
    '/',
    '/listings',
    '/contact/{id}',
    '/edit-listing/{id}',
    '/listings/{id}',
    '/my-listings',
    '/new-listing',
];

export const filesRoutes = angularRoutePaths.map(path => ({
    method: 'GET',
    path,
    handler: (req, h) => {
        return h.file(staticPath + '/index.html');
    }
}));

export const staticFilesRoute = {
    method: 'GET',
    path: '/{params*}',
    handler: {
        directory: {
            path: staticPath
        }
    }
}