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

This simple Next.js app produces a runtime error when deployed to Vercel or similar platforms due to the missing `export default` statement in the `pages/index.js` file.  Next.js relies on this statement to export the page component correctly.  Removing it, while it might work locally in development, can break production deployments.