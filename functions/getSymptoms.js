import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
  backendUrl: 'https://snkfwvcrywjolqycysxe.nhost.run'
});

module.exports = (req, res) => {
  nhost.graphql.request(`
    query {
      symptom {
        id
        name
      }
    }
  `).then(symptoms => res.status(200).send(symptoms.data));
};
