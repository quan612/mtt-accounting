const mailgun = require("mailgun-js")

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

const mg = mailgun({
  apiKey: process.env.GATSBY_MAILGUN_API_KEY,
  domain: process.env.GATSBY_MAILGUN_DOMAIN,
})

const successCode = 200
const errorCode = 412

exports.handler = function(event, context, callback) {
  let data = JSON.parse(event.body)

  let { name, email, phone, message } = data

  let mailOptions = {
    from: `Excited User <me@samples.mailgun.org>`,
    to: "neverlate612@gmail.com, quan612@yahoo.com",
    subject: "Hello",
    text: `From ${name} - ${email} - ${phone}: ${message}`,
  }

  mg.messages().send(mailOptions, function(error, body) {
    if (error) {
      callback(null, {
        errorCode,
        headers,
        body: JSON.stringify(error),
      })
    } else {
      callback(null, {
        successCode,
        headers,
        body: JSON.stringify(body),
      })
    }
  })
}
