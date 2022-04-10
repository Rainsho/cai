export const COOKIE_NAME = process.env.COOKIE_NAME!;
export const USER_CODE = process.env.USER_CODE!;
export const JSW_SECRET_KEY = new TextEncoder().encode(process.env.JSW_SECRET_KEY);
export const DB_FILE = process.env.DB_FILE || 'database.sqlite';
