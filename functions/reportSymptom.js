module.exports = (req, res) => {
  // const [ userId, symptomId, serviceUserId ] = req.query;
  // res.status(200).send(`User: ${userId} - Reporting symptom ${symptomId} - For service user ${serviceUserId}!`);
  res.status(200).send(`${JSON.stringify(req)}`);
  // res.status(200).send(`${JSON.stringify(res)}`);
};
