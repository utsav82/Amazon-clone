const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51LdwHfSISE5qAaajwxagwwWiWiufpLOMnQZ2WGyKaR8gw8F7wIS9Meso4NufZcFn2mpAh9MzUDx2VvI0P89GpESR00om6FwTCP"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("Hello from cloud");
});
app.get("/payments/create", async (request, response) => {
  const total = request.query.total;
  const payment = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: payment.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
