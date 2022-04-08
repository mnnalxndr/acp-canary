import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
  backendUrl: 'https://snkfwvcrywjolqycysxe.nhost.run'
});

module.exports = (req, res) => {
  (async () => {
    const symptoms = await nhost.graphql.request(`
      query {
        symptom {
          id
          name
        }
      }
    `)
  
    res.status(200).send(symptoms.data);
  })();
};
