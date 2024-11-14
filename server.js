require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const expressRateLimit = require('express-rate-limit');
const cors = require('cors');
const session = require('express-session');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies

// Session middleware
app.use(
    session({
        secret: 'your-secret-key', // Replace with a secure secret key
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } // Set `secure: true` in production with HTTPS
    })
);

// Rate limiting middleware
const limiter = expressRateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});

app.use(limiter);

// Sample route to test if server is working
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route for sending OTP to email
app.post('/api/send-otp', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    // Generate OTP (simple random 6-digit number)
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Create transporter for nodemailer (example using Gmail SMTP)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'b23me1033@iitj.ac.in',
            pass: 'epkq vlzp gnwh xbiq', // Use your secure email credentials here
        },
        secure: true,
        port: 465,
    });

    // Mail options
    const mailOptions = {
        from: 'your-email@gmail.com', // Replace with your email
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`,
    };

    // Send OTP email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending OTP:", error); // Log detailed error
            return res.status(500).json({ success: false, message: 'Failed to send OTP.', error: error });
        }

        // Store the OTP in the session
        req.session.otp = otp;
        req.session.email = email; // Store the email as well if needed for verification
        return res.status(200).json({ success: true, message: 'OTP sent to email.' });
    });
});

// Route for verifying OTP
app.post('/api/verify-otp', (req, res) => {
    const { email, otp } = req.body;

    console.log("Session OTP:", req.session.otp);  // Log the OTP stored in the session
    console.log("Received OTP:", otp);             // Log the OTP received from the client
    console.log("Received Email:", email);         // Log the email received from the client

    if (!otp || !email) {
        console.log("Missing OTP or Email");
        return res.status(400).json({ success: false, message: 'Email and OTP are required.' });
    }

    // Check if OTP and email in the session match the ones provided by the user
    if (parseInt(otp) === req.session.otp && email === req.session.email) {
        console.log("OTP verified successfully");
        // Clear the session after successful verification
        req.session.otp = null;
        req.session.email = null;
        return res.status(200).json({ success: true, message: 'OTP verified successfully!' });
    } else {
        console.log("Invalid OTP entered");
        return res.status(400).json({ success: false, message: 'Invalid OTP.' });
    }
});

// Route to handle static files (for frontend)
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
