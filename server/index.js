const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PNDsAP4GjSV2QimtQPskTN0QSbrEZwblH7POmAvJ6lrv7PUq1VMsmmAjK6S2HJAHCrAxmQBmFpY8RRwLej3iIsO00XC8bGMM2');

const app = express();

// Update the CORS configuration
app.use(cors({
    origin: ["http://localhost:5500", "https://test-hosting-5e4n.vercel.app", "https://test-hosting-eight.vercel.app"], // Include both frontend and backend URLs
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",  // Allow necessary HTTP methods
    credentials: true,  // If your request includes cookies or authentication tokens
    allowedHeaders: "Content-Type,Authorization",  // Allow specific headers
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/payment', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "KOKO AI Demo",
            description: "You will receive an email with your payment confirmation. Your demo will be delivered within 24 hours.",
            images: ["./logo.png"]
        });

        if (product) {
            var price = await stripe.prices.create({
                product: `${product.id}`,
                unit_amount: 100 * 100,
                currency: 'eur',
            });
        }

        if (price.id) {
            var session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: `${price.id}`,
                        quantity: 1,
                    }
                ],
                mode: 'payment',
                success_url: 'https://test-hosting-5e4n.vercel.app/success',
                cancel_url: 'https://test-hosting-5e4n.vercel.app/cancelled',
            });
        }

        res.json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
