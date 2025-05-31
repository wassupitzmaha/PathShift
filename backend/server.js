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
        COUNT(*) FILTER (
          WHERE field_of_study LIKE '%Mechanical Engineering%' 
          AND current_occupation IN ('Mechanical Engineer', 'Software Developer')
        ) AS actual_me,
        CASE 
          WHEN COUNT(*) FILTER (WHERE field_of_study LIKE '%Mechanical Engineering%') = 0 THEN 0
          ELSE
            ROUND(
              100.0 * 
              COUNT(*) FILTER (
                WHERE field_of_study LIKE '%Mechanical Engineering%' 
                AND current_occupation IN ('Mechanical Engineer', 'Software Developer')
              )
              /
              COUNT(*) FILTER (WHERE field_of_study LIKE '%Mechanical Engineering%')
            , 2)
        END AS percent_mechanical_or_software_developers
      FROM career_main_info;
    `);

    
    // Step 1: Get the first (and only) row
    const row = dbResponse.rows[0];

    // Step 2: Format the result (optional: rename keys for clarity)
    const result = {
      mechanical_engineering_graduates: Number(row.total_me),
      currently_mechanical_engineers: Number(row.actual_me),
      percent_in_field: Number(row.percent_mechanical_engineers) // Ensures it's a number, not string
    };

    // Step 3: Send the formatted result as JSON
    res.json(result);

  } catch (error) {
    // Step 4: Error handling
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//GET Business
requestHandler.get("/api/v1/Business", async (req, res) => {
  try {
    const dbResponse = await db.query(`
      SELECT 
  COUNT(*) FILTER (WHERE field_of_study LIKE '%Business%') AS total_business,
  COUNT(*) FILTER (WHERE field_of_study LIKE '%Business%' 
                   AND current_occupation = 'Business Analyst') AS actual_business,
  CASE 
    WHEN COUNT(*) FILTER (WHERE field_of_study LIKE '%Business%') = 0 THEN 0
    ELSE
      ROUND(
        100.0 * 
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Business%' 
                         AND current_occupation = 'Business Analyst')
        /
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Business%')
      , 2)
  END AS percent_business_analysts
FROM career_main_info;
    `);

    
    // Step 1: Get the first (and only) row
    const row = dbResponse.rows[0];

    // Step 2: Format the result (optional: rename keys for clarity)
    const result = {
      major_business: Number(row.total_business),
      currently_business_analyst: Number(row.actual_business),
      percent_in_field: Number(row.percent_business_analysts) // Ensures it's a number, not string
    };

    // Step 3: Send the formatted result as JSON
    res.json(result);

  } catch (error) {
    // Step 4: Error handling
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



//GET Education
requestHandler.get("/api/v1/Education", async (req, res) => {
  try {
    const dbResponse = await db.query(`
      SELECT 
  COUNT(*) FILTER (WHERE field_of_study LIKE '%Education%') AS total_education,
  COUNT(*) FILTER (WHERE field_of_study LIKE '%Education%' 
                   AND current_occupation = 'Teacher') AS actual_education,
  CASE 
    WHEN COUNT(*) FILTER (WHERE field_of_study LIKE '%Education%') = 0 THEN 0
    ELSE
      ROUND(
        100.0 * 
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Education%' 
                         AND current_occupation = 'Teacher')
        /
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Education%')
      , 2)
  END AS percent_teacher
FROM career_main_info;
    `);

    
    // Step 1: Get the first (and only) row
    const row = dbResponse.rows[0];

    // Step 2: Format the result (optional: rename keys for clarity)
    const result = {
      major_education: Number(row.total_education),
      currently_teachers: Number(row.actual_education),
      percent_in_field: Number(row.percent_teacher) // Ensures it's a number, not string
    };

    // Step 3: Send the formatted result as JSON
    res.json(result);

  } catch (error) {
    // Step 4: Error handling
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

requestHandler.get("/api/v1/Biology", async (req, res) => {
  try {
    const dbResponse = await db.query(`
      SELECT 
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Biology%') AS total_biology,
        COUNT(*) FILTER (WHERE field_of_study LIKE '%Biology%' 
                         AND current_occupation = 'Biologist') AS actual_biology,
        CASE 
          WHEN COUNT(*) FILTER (WHERE field_of_study LIKE '%Biology%') = 0 THEN 0
          ELSE
            ROUND(
              100.0 * 
              COUNT(*) FILTER (WHERE field_of_study LIKE '%Biology%' 
                               AND current_occupation = 'Biologist') 
              /  -- Added division operator here
              COUNT(*) FILTER (WHERE field_of_study LIKE '%Biology%')
            , 2)
        END AS percent_biology
      FROM career_main_info;
    `);
   
        // Step 1: Get the first (and only) row
        const row = dbResponse.rows[0];

        // Step 2: Format the result (optional: rename keys for clarity)
        const result = {
          major_biology: Number(row.total_biology),
          currently_biologist: Number(row.actual_biology),
          percent_in_field: Number(row.percent_biology) // Ensures it's a number, not string
        };
    
        // Step 3: Send the formatted result as JSON
        res.json(result);
    
      } catch (error) {
        // Step 4: Error handling
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
    
//GET Medicine
    requestHandler.get("/api/v1/Medicine", async (req, res) => {
      try {
        const dbResponse = await db.query(`
          SELECT 
            COUNT(*) FILTER (WHERE field_of_study LIKE '%Medicine%') AS total_medicine,
            COUNT(*) FILTER (WHERE field_of_study LIKE '%Medicine%' 
                             AND current_occupation = 'Doctor') AS actual_medicine,
            CASE 
              WHEN COUNT(*) FILTER (WHERE field_of_study LIKE '%Medicine%') = 0 THEN 0
              ELSE
                ROUND(
                  100.0 * 
                  COUNT(*) FILTER (WHERE field_of_study LIKE '%Medicine%' 
                                   AND current_occupation = 'Doctor') 
                  /  
                  COUNT(*) FILTER (WHERE field_of_study LIKE '%Medicine%')
                , 2)
            END AS percent_medicine
          FROM career_main_info;
        `);
       
            // Step 1: Get the first (and only) row
            const row = dbResponse.rows[0];
    
            // Step 2: Format the result (optional: rename keys for clarity)
            const result = {
              major_medicine: Number(row.total_medicine),
              currently_medicine: Number(row.actual_medicine),
              percent_in_field: Number(row.percent_medicine) // Ensures it's a number, not string
            };
        
            // Step 3: Send the formatted result as JSON
            res.json(result);
        
          } catch (error) {
            // Step 4: Error handling
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
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




