const chatbot = require("../chat/bot")

module.exports = app => {

  // ROUTES
  app.post("/api/df_text_query", async (req, res) =>
    res.status(200).json({ data: await chatbot.textQuery(req.body.text, req.body.parameters) }))

  app.post("/api/df_event_query", async (req, res) =>
    res.status(200).json({ data: await chatbot.eventQuery(req.body.event, req.body.parameters) }))
}