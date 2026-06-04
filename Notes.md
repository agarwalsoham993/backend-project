() => function

this is basically to pass a fuction as a argument


```

// on starting with express

// npm install express

app.get('/api',(req,res,next)=> {      // for get request specifically at the given url component
    console.log("when any server calls at /api");
    next();
});

```