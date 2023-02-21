## Fetch weather, learn Node
### Training app with Node.js, Express, React 18, [Weatherstack API](https://weatherstack.com/)

In development mode run FE and BE parts separately:

```
cd server
npm run dev
cd ..
cd client
npm start
```

React app launches on PORT 3000, while all unknown requests are proxied to 3001 which express dev server is listening to.
