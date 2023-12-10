import express from 'express'
import axios from 'axios'

// Create an Express application
const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle the API call
app.post('/create-room', async (req, res) => {
    try {
        const apiResponse = await axios.post(
            'https://api.huddle01.com/api/v1/create-room',
            {
                title: 'Huddle01-Test',
                hostWallets: ['0xf7eD5AEd83921E1e1e19adb506954bE031D0E4b3'],

            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'WRK7aHhUs6KwyWR534VDkTyTq1rUG-rT', // Replace with your actual API key
                },
            }
        );

        res.json(apiResponse.data);
    } catch (error) {
        console.error('Error in API call:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/get-room' , async(req,res)=>{
    try {
        const apiResponse = await axios.get(
            'https://api.huddle01.com/api/v1/get-rooms',
            
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'WRK7aHhUs6KwyWR534VDkTyTq1rUG-rT', // Replace with your actual API key
                },
            }
        );

        res.json(apiResponse.data);
    } catch (error) {
        console.error('Error in API call:', error);
        res.status(500).send('Internal Server Error');
    }

})

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// project id: E7MsNFLXDJTdwCL4UZpqn48pD_i6-m-M