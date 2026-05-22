import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), './src/data/users.json');

export const readDb = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}
export const writeDb = (user: any) => {
    const data = readDb();
    data.push(user);
    fs.writeFileSync(filePath, JSON.stringify(data));
}