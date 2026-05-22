import http, { createServer, IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
import { dynamicRoute, routes } from './helper/routeHandler';
import './routes';

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const methodeMap = routes.get(req.method || "");
    const handler = methodeMap?.get(req.url || "");
    const dynamicRoutes = dynamicRoute(req);
    if (handler) {
        handler(req, res);
    }
    else if (dynamicRoutes) {
        const match = dynamicRoute(req);
        (req as any).params = match?.params;
        match?.handler(req, res);
    }
    else {
        res.writeHead(404, { "content-type": 'application/json' });
        res.end(JSON.stringify({
            success: false,
            message: `${req.method}: path not found`,
            path: req.url
        }))
    }
});


server.listen(config.port, () => {
    console.log("Server running...");
})