# Missing `export default` in Next.js 13 causes runtime error on Vercel

This repository demonstrates a common error in Next.js 13 applications where a missing `export default` statement in the main page component (`pages/index.js`) can lead to runtime errors when deployed to platforms like Vercel.

## Bug Report

The issue is caused by the omission of the `export default` statement, which is crucial for Next.js to correctly identify and export the page component.  While the application might function locally during development, it typically fails during the deployment process on Vercel, resulting in a runtime error.

## Solution

The solution is straightforward: ensure that the `pages/index.js` file includes the `export default` statement to export the page component properly.

## How to reproduce

1. Clone this repository.
2. Try to deploy it to Vercel.
3. Observe the runtime error in the Vercel logs.
4. Apply the fix from the `bugSolution.js` file to rectify the error.