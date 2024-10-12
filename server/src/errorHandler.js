export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.status === 401) {
    return res.status(500).send("Server Error!");
  }
  res.status(500).send("Unknown Error!");
};

export const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};
