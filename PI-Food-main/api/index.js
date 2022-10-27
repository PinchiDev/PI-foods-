//                       oo0oo
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    _/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  _/-. /
//             _'. .'  /--.--\  `. .'_
//          ."" '<  `._\_<|>/__.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `.   \ _\ /_ _/   .-` /  /
//     =====`-._`._ \_/_.-`__.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Recipes, Diet } = require('./src/db.js');
const fs = require("fs");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  // fs.readFile("foodAPI.json", (error, data) => {
  //   if(error) throw error;
  //   let dietsSet = new Set();
  //   let json = JSON.parse(data);
  //   let arr = json.results?.map((e) => {

  //     e.diets?.forEach( diet => dietsSet.add(diet))
     

  //     return Recipes.create({
  //       id: e.id,
  //       title: e.title,
  //       summary: e.summary,
  //       healthScore: e.healthScore,
  //       image: e.image,
  //       steps: e.analyzedInstructions[0]?.steps.map((a)=>{
  //         return {
  //           number: a.number,
  //           step: a.step
  //         }
  //       }),
  //     })
  //   })

  //   let counter = 0
  //   let diets = [...dietsSet].map(diet => Diet.create({id: counter++, name:diet}))
  //   Promise.all(arr)
  //   Promise.all(diets)
  // })
});