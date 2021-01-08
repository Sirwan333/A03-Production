# A03 Production

1-	The URL to my application: https://cscloud8-120.lnu.se/

2-	In the code, I have used environment variables to hide any sensitive information for example the access token used to verify my request to Gitlab API and the secret token that I get from Gitlab Webhooks post requests. And besides, I am using this secret token to verify that the post request is coming from Gitlab. In the server, I am using HTTPS to all traffic to my application to the Nginx server then I forward it to the specific server. 

3-	**Reversed proxy**: I am using Nginx in my application as reversed proxy and it is a server that forwards the coming requests from clients to the right server and by doing this it helps for more abstraction and some kind of organizing the traffic and make it more secure. **Process manager**: I am using PM2 in my application as a process manager and it helps to run and manage the server without interrupting the machine that the server resides on and when something goes wrong the process manager will restart the server automatically and report the error in a log and it can be a load balancer for the server to make sure the no server has all the traffic when you have many instances of the same server, and it can run many servers at the same time.  **TLS certificates**: I am using HTTPS in my application and it is a more secure and advanced protocol than HTTP. I have installed a certificate that is valid for three months and then it renews itself automatically. **Environment variables**: I have used three environment variables in my application. Each one represents sensitive data that is needed to be secure and not shared with others like access tokens and secret tokens from Gitlab. 

4-	The dependencies that my application is loading are different from production to development and it is lighter and faster. I used package.json to specify the production and development scripts. 

5-	I have used socket.io to connect the client and server. I did research on the internet and I did not found any obvious problem by using this module and the teacher recommended it. All other modules are typical to use with express and node, for example, express-hbs, request, and HTTP, and the same goes for them. 

6-	I think I have a good looking and user friendly application. 

7-	Yes, I am satisfied with my application despite it is the first time for me to put an application on production. I could have implemented more optional requirements but I did not have much time. The most thing I like in my application is simplicity I think I did not complicate stuff. 

8-	I have learned a lot of things in this part. For the first time, I put an application on production and I learned how that is done. I learned how to add security to the application with HTTPS and environment variables, I learned Nginx and process manager pm2. I learned more about how to manipulate the dom. I learned more about APIs and Webhooks. I gained more confidence in web development after this assignment. 
