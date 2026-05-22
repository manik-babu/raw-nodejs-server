import http, { ServerResponse } from 'http'
export const sendResponse = (res: ServerResponse, status: number, data: string | object) => {
    res.writeHead(status, { "content-type": 'application/json' });
    res.end(JSON.stringify(data));
}