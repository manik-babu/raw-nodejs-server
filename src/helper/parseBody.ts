import { IncomingMessage } from "http";

const parseBody = async (req: IncomingMessage): Promise<any> => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        })

        req.on("end", () => {
            try {
                if (!body) {
                    resolve({});
                }
                resolve(JSON.parse(body));
            } catch (error) {
                reject(error);
            }
        })
        req.on('error', () => {
            reject;
        })
    })
}
export default parseBody;