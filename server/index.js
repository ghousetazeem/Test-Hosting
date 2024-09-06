const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PNDsAP4GjSV2QimtQPskTN0QSbrEZwblH7POmAvJ6lrv7PUq1VMsmmAjK6S2HJAHCrAxmQBmFpY8RRwLej3iIsO00XC8bGMM2')

const app = express();

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.post('/payment', async (req, res) => {

    const product = await stripe.products.create({
        name: "KOKO AI Demo",
        description: "You will receive an email with your payment confirmation. Your demo will be delivered within 24 hours. If you have any questions or need assistance, please feel free to contact our team",
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
        })
    }
    res.json(session)
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});