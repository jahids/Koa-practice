const koa  = require("koa")
const app = new koa()
const bodyparser = require ("koa-bodyparser")
const __PORT = 5000;
const userRouter = require("./route/UserRouter")




app.use(bodyparser())

app.use(userRouter.routes())

// app.use(async (ctx, next) => {
//     console.log('This is a middleware');
//     await next(); // Call the next middleware in the chain
//   });
  
//   // Route handler
//   app.use(async (ctx) => {
//     // Access request information
//     const { method, url, query } = ctx.request;
//     console.log('Method:', method);
//     console.log('URL:', url);
//     console.log('Query Parameters:', query);
  
//     // Send response
//     ctx.response.status = 200;
//     ctx.response.body = 'Hello, Koa.js!';
//   });


// router.get("/", ({request, response}=ctx) => {
//  const {params} = request
//  console.log(params);
//  response.status = 200
//  response.body = {
//     name : "hey i am jakir"
//  }

// })


// app.use(router.routes())


// app.use(async (ctx) => {
//   ctx
// })


app.listen(__PORT, () => {
    console.log(`server connected ${__PORT}`);
})