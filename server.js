const WS = require('ws')

const server = new WS.Server({ port: 8080 })

server.on('connection', (conn) => {
  console.error('new connection')

  conn.send('hello from the server')

  conn.on('message', (msg) => {
    console.log('received: %s', msg)

    // server applies the wed nes day algo
    conn.send(
      msg
        .toLowerCase()
        .replace(/\s/g, '')
        .replace(/(.{3})/g, '$1 ')
        .replace(/(\S?(\S)$)/, (_, x, y) => `${x}${y}${y}`.slice(0, 3))
    )
  })
})

