import path from "path";
import push from "./push.mjs";
import express from "express";
import bodyParser from 'body-parser';
import cmd from "./CommandLine.mjs";

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res) => {
  res.header({
    'Access-Control-Allow-Origin': "http://localhost:3000",
    'Access-Control-Allow-Headers': "Content-Type"
  });
  req.next();
});

app.use(bodyParser.json());

const rootPath = path.resolve("../public");
console.log('Root dir:', rootPath);

app.use(express.static('public'));

if (push.init instanceof Function) {
  push.init(app, "/api/push/");
} else {
  throw "Push not initialized.";
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  // start runtime command prompt
  cmd.prompt();
});
