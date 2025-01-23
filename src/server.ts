// import the 'express' module along with 'Requests' and 'Response' types from express
import express, { Request, Response } from "express";
import serverStatusRoutes from "./routes/serverStatusRoute";

// create an Express application
const app = express();

app.use(express.json());

// Set the port number for the server
const port: number = 3000;

app.use("/api", serverStatusRoutes);

// Define a route for the root path ('/')
app.get("/", (req: Request, res: Response) => {
	// Send a response to the client
	res.send("Hello, Typescript + Node.js + Express!");
});

// Start the server and listen on the specified port
app.listen(port, () => {
	// Log a message when the server is successfully running
	console.log(`Server is running on http://localhost:${port}`);
});
