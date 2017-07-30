'use strict';
const express = require('express');

const app = express();

app.set('port', (process.env.PORT));

app.get( '/', (req,res) => {
  //'en-US,en;q=0.5'
  const al = req.headers['accept-language'];
  const lang = al.split(",")[0];
  //'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0'
  const ua = req.headers['user-agent'];
  const os = ua.match( /\((.*)\)/)[1];
  // csv of ips - first makes sense
  const ip = req.headers['x-forwarded-for'].split(',')[0];
  res.send( { ip: ip, os: os, lang: lang } );
});


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
