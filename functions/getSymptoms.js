module.exports = (req, res) => {
  const { data, error } = await nhost.graphql.request(`
    query {
      symptoms {
        id
        name
      }
    }
  `);
  res.status(200).send(data);
};
