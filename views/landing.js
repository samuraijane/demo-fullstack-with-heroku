const landing = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      body {
        color: #444;
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }
      code {
        color: #9165b0;
        font-size: 1rem;
      }
      h2 {
        margin-bottom: 0;
      }
      header {
        background-color: #ccc;
        padding: 20px 0;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      .block {
        margin: 24px 0;
      }
      .brief {
        color: #da730e;
        margin-bottom: 2px;
      }
      .endpoints li {
        margin: 40px 0;
      }
      .y-wrap {
        margin: 0 auto;
        width: 90%;
      }
    </style>
  </head>
  <body>
    <header>
      <div class="y-wrap">
        <h1>Contacts Demo API Documentation<h1>
      </div>
    </header>
    <main class="y-wrap">
      <ul class="endpoints">
        <li>
          <h2>DELETE</h2>
          <p class="brief">Delete one record</p>
          <code>/contacts/:id</code>
        </li>
        <li>
          <h2>GET</h2>
          <p class="brief">Get all records</p>
          <code>/contacts</code>
          <p class="brief">Get one record</p>
          <code>/contacts/:id</code>
        </li>
        <li>
          <h2>POST</h2>
          <p class="brief">Create one record</p>
          <p><code>firstName</code>, <code>lastName</code>, and <code>mobilephone</code> are required when creating a new record.</p>
          <code>/contacts/add</code>
        </li>
        <li>
          <h2>PUT</h2>
          <p class="brief">Update one record</p>
          <code>/contacts/:id</code>
        </li>
      </ul>
      <div class="block">
        <h3>Fields</h3>
        <p>The API accepts and returns JSON with the fields listed below.</p>
        <ul>
          <li><code>address1</code></li>
          <li><code>address2</code></li>
          <li><code>city</code></li>
          <li><code>email</code></li>
          <li><code>firstName</code></li>
          <li><code>lastName</code></li>
          <li><code>mobilephone</code></li>
          <li><code>state</code></li>
          <li><code>zipcode</code></li>
        </ul>
      </div>
      <div class="block">
        <h3>Note</h3>
        <p><code>DELETE</code> and <code>PUT</code> are not allowed for records whose <code>id</code> is less than <code>4</code></p>
        <p>The query param <code>auth</code> must have the appropriate value in order to execute any requests to <code>/contacts</code></p>
      </div>
    </main>
  </body>
  </html>
`;

module.exports = landing;