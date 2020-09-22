# Hack-a-thing 1
## Joseph Notis, Fall 2020

### What I did

I spent my hack-a-thing time learning GraphQL. My API experience primarily comes from building RESTful APIs in cs52, so this seemed like a logical next step. I was interested in GraphQL because of its flexibility, especially in querying. While a RESTful API has a route for each accessible piece of data, GraphQL allows developers to select the exact pieces of data they need.

### Who did it?

I worked alone on this hack-a-thing

### How I did it

After reading about GraphQL and completing a general introductory tutorial, I followed two tutorials to build a client that interacts with an API that uses GraphQL and a GraphQL server itself.

### What I learned

I first learned the basics of GraphQL. This included how to define a schema and complete queries, mutations, and subscriptions to a database. Next, I learned the basics of creating a React client that interacts with a GraphQL backend and how to create a GraphQL backend using Node.js. One thing I took away from the client tutorial was that communication with the server was a lot more involved than the full-stack web projects I previously completed (React/Redux, Node, Express, MongoDB). On the server-side, I liked the modularity of GraphQL and how different parts of the data's "flow" through the server are broken apart.

### What worked?

The tutorials were well-built and easy to follow. I was able to understand what code I was writing, and later in the tutorials I was able to correctly go a step or two ahead based on the introduction to the task at hand.

### What was tough/didn't work?

Not much didn't work. Looking back at what I completed, I wish I completed the "GraphQL using Node" tutorial first. This would have given me a stronger foundation to what was going on when editing the frontend rather than just trusting the provided server code. I also would have used the server I created to build the entire stack on my own.

### How to see what I made

* Clone this repo
* To see the React and Apollo tutorial result:
    * `cd react-apollo tutorial`
    * `yarn`
    * In a second terminal window:
        * `cd server`
        * `yarn`
    * `yarn start` in both directories
        * Client is `localhost:3000`
        * Server is `localhost:4000`
* To see the Node and GraphQL tutorial result:
    * `cd node-graphql-tutorial`
    * `npm install`
    * `npx prisma migrate save --experimental`
    * `npx prisma migrate up --experimental`
    * `npm start`
        * GraphQL Playground hosted on `localhost:4000`

### References
* [Intro to GraphQL article](https://medium.com/open-graphql/graphql-1-140fab436942)
* [GraphQL basics](https://www.howtographql.com/basics/0-introduction/)
* [GraphQL using React and Apollo tutorial](https://www.howtographql.com/react-apollo/0-introduction/)
* [GraphQL using Node tutorial](https://www.howtographql.com/graphql-js/0-introduction/)