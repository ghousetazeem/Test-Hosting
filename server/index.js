const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PNDsAP4GjSV2QimtQPskTN0QSbrEZwblH7POmAvJ6lrv7PUq1VMsmmAjK6S2HJAHCrAxmQBmFpY8RRwLej3iIsO00XC8bGMM2');

const app = express();

// Update the CORS configuration
app.use(cors({
    origin: ["http://localhost:5500", "https://test-hosting-5e4n.vercel.app"], // Allow both local and hosted origins
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
                success_url: 'http://localhost:5173/success',  // Update this to your client URL later
                cancel_url: 'http://localhost:5173/cancelled', // Update this to your client URL later
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
