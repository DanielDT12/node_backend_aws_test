// import the 'express' module along with 'Requests' and 'Response' types from express
import express, { Request, Response } from "express";

// create an Express application
const app = express();

// Set the port number for the server
const port: number = 3000;

// Define a route for the root path ('/')
app.get("/", (req: Request, res: Response) => {
	// Send a response to the client
	res.send(
		"Hello, Typescript + Node.js + Express!, This is an edit when running nodemon with ts-node. This is after updating the package.json"
	);
});

// Start the server and listen on the specified port
app.listen(port, () => {
	// Log a message when the server is successfully running
	console.log(`Server is running on http://localhost:${port}`);
});
