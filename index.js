const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const st = require("http-status-codes");
const contacts = require("./contacts");

const app = express();

app.use(morgan("dev"));
app.use(cors());

// For parsing JSON body
app.use(express.json());

app.get("/contacts/:id", (req, res) => {
  const id = Number(req.params.id);

  const contact = contacts.getContactById(id);

  if (contact) {
    res.json({ contacts: contact });
  } else {
    res.sendStatus(st.StatusCodes.NOT_FOUND);
  }
});

app.get("/contacts", (req, res) => {
  res.json({ contacts: contacts.getContacts() });
});

app.post("/contacts", (req, res) => {
  console.log(req.body);

  const contact = contacts.createContact(req.body);

  if (contact) {
    res.json({ contact: contact });
  } else {
    res.status(st.StatusCodes.BAD_REQUEST).json({
      body: req.body,
    });
  }
});

app.get("*", (req, res) => {
  console.log("GET /");
  res.status(st.StatusCodes.NOT_FOUND).json({
    error: `We don't do '${req.originalUrl}', SORRY`,
  });
});

// Time to start
const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
