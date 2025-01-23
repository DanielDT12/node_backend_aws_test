import db from "../config/db";
import { RowDataPacket } from "mysql2";

export interface ServerStatus {
	id: number;
	server_status: string;
}

export const getAllStatuses = async (): Promise<ServerStatus[]> => {
	try {
		const [rows] = await db.query<RowDataPacket[] & ServerStatus[]>(
			"SELECT * FROM aws_server_test_table"
		);
		return rows as ServerStatus[];
	} catch (err) {
		console.error("Error fetching statuses: ", err);
		throw err;
	}
};

export const insertStatus = async (serverStatus: string): Promise<void> => {
	try {
		await db.query(
			"INSERT INTO aws_server_test_table (server_status) VALUES (?)",
			[serverStatus]
		);
	} catch (err) {
		console.error("Error inserting status: ", err);
		throw err;
	}
};

export const deleteStatusById = async (id: number): Promise<void> => {
	try {
		await db.query("DELETE FROM aws_server_test_table WHERE id = ?", [id]);
	} catch (err) {
		console.error("Error deleting status: ", err);
		throw err;
	}
};
