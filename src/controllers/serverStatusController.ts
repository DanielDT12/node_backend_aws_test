import { Request, Response } from "express";
import {
	fetchAllStatuses,
	addServerStatus,
	removeServerStatus,
} from "../services/serverStatusService";

export const getAllStatusesController = async (req: Request, res: Response) => {
	try {
		const statuses = await fetchAllStatuses();
		res.json(statuses);
	} catch (error) {
		res.status(500).json({ message: "Error fetching statuses" });
	}
};

export const addStatusController = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { server_status } = req.body;
		if (!server_status) {
			res.status(400).json({ message: "server_status is required" });
			return;
		}

		await addServerStatus(server_status);
		res.status(201).json({ message: "Status added successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error adding status" });
	}
};

export const deleteStatusController = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: "ID is required" });
		}

		await removeServerStatus(Number(id));
		res.json({ message: "Status deleted successfully." });
	} catch (error) {
		res.status(500).json({ message: "Error deleting status" });
	}
};
