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
    from: `${name} <me@info.xbaccountax.ca>`,
    to:
      "info@xbaccountax.ca, neverlate612@gmail.com, minhtrangtran713@gmail.com",
    subject: "Contact for xbaccountax",
    html: `<table>
    <tbody>
      <tr>
        <td>Name</td>
        <td><b>${name}</b></td>
      </tr>
      <tr>
        <td>Email</td>
        <td><b>${email}</b></td>
      </tr>
      <tr>
        <td>Phone</td>
        <td><b>${phone}</b></td>
      </tr>
      <tr>
        <td>Message</td>
        <td><b>${message}</b></td>
      </tr>
    </tbody>
    </table>`,
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
