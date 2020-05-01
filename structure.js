'use strict'

function buildArquitect (headers, data) {
  let head = ''
  let body = ''

  head += '<tr>'
  for (let i in headers) {
    head += `
      <th>${headers[i]}</th>
    `
  }
  head += '</tr>'

  for (let i in data) {
    const keys = Object.keys(data[i])
    body += '<tr>'
    for (let j in keys) {
      body += `
        <th>${data[i][keys[j]]}</th>
      `
    }
    body += '</tr>'
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title></title>
      <meta charset="utf-8">
      <style type="text/css">
        body { margin: 10px; }
        h2 { text-align: center; color: #ff3e00; text-transform: uppercase; font-weight: 100; }
        table.imagetable {
          font-family: verdana,arial,sans-serif;
          font-size:11px;
          color:#333333;
          border-width: 1px;
          border-color: #999999;
          border-collapse: collapse;
          width: 100%;
        }
        table.imagetable th {
          background:#b5cfd2 url('cell-blue.jpg');
          border-width: 1px;
          padding: 8px;
          border-style: solid;
          border-color: #999999;
        }
        table.imagetable td {
          background:#dcddc0 url('cell-grey.jpg');
          border-width: 1px;
          padding: 8px;
          border-style: solid;
          border-color: #999999;
        }
      </style>
    </head>
    <body>
    <h2>Random Table</h2>
    <table class="imagetable">
      ${head} ${body}
    </table>
    </body>
    </html>
  `
}

module.exports = {
  buildArquitect
}