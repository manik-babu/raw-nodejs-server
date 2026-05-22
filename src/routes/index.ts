import { writeDb } from "../helper/manageDb";
import parseBody from "../helper/parseBody";
import addRoute, { dynamicRoute } from "../helper/routeHandler";
import { sendResponse } from "../helper/sendResponse";

addRoute('GET', '/api/test-route', (req, res) => {
    res.writeHead(200, { "content-type": 'application/json' });
    res.end(JSON.stringify({
        message: "I made it!"
    }))
})
addRoute("POST", '/api/login', async (req, res) => {
    try {
        const body = await parseBody(req);
        sendResponse(res, 201, { success: true, message: "Login successfull", data: body });
    } catch (error: any) {
        sendResponse(res, 200, error.message);
    }
});
addRoute("POST", '/api/signup', async (req, res) => {
    const body = await parseBody(req);
    console.log(body)
    writeDb(body);
    sendResponse(res, 201, { message: "Account created successfull!", user: body });
})
addRoute("GET", '/api/user/:id', (req, res) => {
    const params = (req as any).params;
    console.log(params);
    sendResponse(res, 200, { message: params });
})