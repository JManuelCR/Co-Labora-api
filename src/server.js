const express = require("express");

const routerLogin = require("./routes/auth.route");
const routerUser = require("./routes/user.route");
<<<<<<< HEAD
const routerDatesNotAvailable = require("./routes/datesNotAvailable.route")
const routerReservation = require("./routes/reservation.route");
const routerProperty = require("./routes/property.route")
=======
const routerDatesNotAvailable = require("./routes/datesNotAvailable.route");
const routerReservation = require("./routes/reservation.route");
const routerStripe = require("./routes/stripe.route");
>>>>>>> develop
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/login", routerLogin); // * Endpoint funcionando
app.use("/datesNotAvailable", routerDatesNotAvailable);
app.use("/reservation", routerReservation);
<<<<<<< HEAD
app.use("/getUsers", routerUser);
app.use("/deleteUser", routerUser);
app.use("/description", routerUser);
app.use("/property", routerProperty);

=======
app.use("/Users", routerUser); // * post.Users funcionando / delete.Users funcionando / patch.Users funcionando
app.use("/stripe", routerStripe);
>>>>>>> develop
module.exports = app;
