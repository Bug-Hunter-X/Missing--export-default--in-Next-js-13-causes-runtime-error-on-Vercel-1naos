```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
```
The solution involves simply adding the `export default` statement before the `Home` function definition in `pages/index.js`. This correctly exports the component, resolving the runtime error during deployment.