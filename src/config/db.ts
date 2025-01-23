import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config({ path: ".env.local" });

const db = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: Number(process.env.DB_PORT) || 3306,
	connectionLimit: 10,
});

db.getConnection()
	.then(() => {
		console.log("Database connected successfully.");
	})
	.catch((err) => {
		console.error("Failed to connect to the database: ", err);
		process.exit(1);
	});

export default db;
