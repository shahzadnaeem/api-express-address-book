const data = {
  contacts: [
    {
      id: 1,
      firstName: "John",
      lastName: "Carmack",
      street: "10 Keen Street",
      city: "London",
      type: "work",
      email: "test@test.com",
      linkedin: "https://www.linkedin.com/school/boolean-uk/",
      twitter: "https://twitter.com/booleanuk",
    },
    {
      id: 2,
      firstName: "Grace",
      lastName: "Hopper",
      street: "32 Deebug Road",
      city: "London",
      type: "personal",
      email: "test@test.com",
      linkedin: "https://www.linkedin.com/school/boolean-uk/",
      twitter: "https://twitter.com/booleanuk",
    },
  ],
};

const getContacts = () => data.contacts;
const getContactById = (id) => data.contacts.find((c) => c.id === id);
const createContact = (body) => {
  console.log(`createContact: ${body}`);
  return null;
};

module.exports = {
  data,
  getContacts,
  getContactById,
  createContact,
};
