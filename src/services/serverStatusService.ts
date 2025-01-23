import {
	getAllStatuses,
	insertStatus,
	deleteStatusById,
} from "../model/serverStatusModel";

export const fetchAllStatuses = async () => {
	return await getAllStatuses();
};

export const addServerStatus = async (status: string) => {
	return await insertStatus(status);
};

export const removeServerStatus = async (id: number) => {
	return await deleteStatusById(id);
};
