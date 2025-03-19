// We use express to create our servers endpoints, and listen for & respond to requests from the frontend
import express from "express";

// We use dotenv so that we can access our environment variables
import "dotenv/config";

// We import our index.js so that we can query our database
import * as db from "./db/index.js";

// Create an instance of express
const requestHandler = express();

// Storing our port value from the .env file
const port = process.env.PORT || 3001;

// The middleware express.json() parses incoming JSON requests and puts the parsed data in req.body
requestHandler.use(express.json());

// Get career changes data
requestHandler.get("/api/v1/career-info", async (req, res) => {
	const dbResponse = await db.query("select * from career_main_info");
	console.log(dbResponse);
	res.send(dbResponse);
  res.send("hello world");
  console.log("get career-info")
});

requestHandler.get("/api/v1/MechanicalEngineers", async (req, res) => {
  try {
    const dbResponse = await db.query(`
      SELECT 
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Mechanical Engineering%') AS total_me,
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Mechanical Engineering%' 
                         AND current_occupation = 'Mechanical Engineer') AS actual_me
      FROM career_main_info
    `);
    
    console.log(dbResponse);
    res.json(dbResponse.rows[0]);
  } catch (error) {
    console.error("Error fetching Mechanical Engineers data:", error);
    res.status(404).send("Internal Server Error");
  }
});

requestHandler.get("/api/v1/MechanicalEngineers", async (req, res) => {
  try {
    const dbResponse = await db.query(`
      SELECT 
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Mechanical Engineering%') AS total_me,
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Mechanical Engineering%' 
                         AND current_occupation = 'Mechanical Engineer') AS actual_me
      FROM career_main_info
    `);
    
    console.log(dbResponse);
    res.json(dbResponse.rows[0]);
  } catch (error) {
    console.error("Error fetching Mechanical Engineers data:", error);
    res.status(404).send("Internal Server Error");
  }
});




  // GET template
requestHandler.get("/api/v1/get-template", (req, res) => {
  res.send("Hello World!");
});



// Starting our http server and listening for requests!
requestHandler.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
  





