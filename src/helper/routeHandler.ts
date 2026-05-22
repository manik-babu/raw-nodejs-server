import http, { IncomingMessage, ServerResponse } from 'http';
type Handler = (req: IncomingMessage, res: ServerResponse) => void;

export const routes: Map<string, Map<string, Handler>> = new Map();

const addRoute = (method: string, path: string, handler: Handler) => {
    if (!routes.has(method)) {
        routes.set(method, new Map());
    }
    routes.get(method)!.set(path, handler);
}

export const dynamicRoute = (req: IncomingMessage): null | { params: object, handler: Handler } => {
    const methodMap = routes.get(req.method || "");
    if (!methodMap) return null;

    const reqPath = req.url?.split("/");

    for (const [path, handler] of methodMap.entries()) {
        const params: any = {};
        const routerPath = path.split("/");

        if (routerPath.length != reqPath?.length) continue;

        let match = true;
        for (let i = 0; i < routerPath.length; i++) {
            if (routerPath[i]!.startsWith(":")) {
                params[routerPath[i]!.slice(1)] = reqPath[i];
            }
            else if (routerPath[i] != reqPath[i]) {
                // /api/user/:userid
                // /api/profile/:userid
                // user != profile
                match = false;
                break;
            }
        }
        if (match) return { params, handler };
    }
    return null;

}

export default addRoute;