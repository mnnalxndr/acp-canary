module.exports = (req, res) => {
  res.status(200).send(`User: ${req.query.userId} - Reporting symptom ${req.query.symptomId} - For service user ${req.query.serviceUserId}!`);
};
