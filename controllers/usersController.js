import { getAllUsernames, postUsername } from "../db/queries.js";

export const getUsernames = async (req, res, next) => {
  const data = await getAllUsernames();

  const html = `
    <html>
        <head>
            <title>Express</title>
            <link rel="stylesheet" href="/stylesheets/style.css">
        </head>

        <body>
            <h1>Usernames</h1>
            ${data.map((value) => `<p>${value.username}</p>`).join("")}
        </body>
    </html>
`;

  res.send(html);
};

export const getNewUsername = (req, res, next) => {
  const html = `
    <html>
        <head>
            <title>Express</title>
            <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>

        <body>
            <h1>New User Form</h1>
            <form method="POST">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <button type="submit">Submit</button>
            </form>
        </body>
    </html>
    `;

  res.send(html);
};

export const postNewUsername = async (req, res, next) => {
  const username = req.body.username;
  try {
    await postUsername(username);
    console.log("added");

    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
};
