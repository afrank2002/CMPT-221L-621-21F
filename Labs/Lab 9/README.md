# Lab 9

We talked about the steps that we could possibly take to deploy a website. 
I want you to think about the combination of those things that you would 
consider if you had to deploy your website. This is a good thinking exercise 
to do because you gain insight to what all of the different steps entail and 
are responsible for. Write out what parts you would use below and describe why. 
It doesn't have to be the most detailed but personally what would you want to do?
 (I'm not looking for perfect but it should be a working configuration. Assuming 
 all of the website code is done. I don't need to hear about that unless its for 
 the certificate or web server).

<!-- Answer Down Here -->

In order to create a website i would do the following things:
Create a routes folder with an index javascript file inside of it
--> this file uses express to route the whole website depending on where the user chooses to go
--> For organization purposes, it is good practice to make different files for different routes
Create a views folder with ejs
--> this folder will contain your websites pages to be rendered
Create a file called app.js
--> this files purpose is to serve your website on a specified port
--> it also makes sure all pages use the correct files using the keyword 'require'
Then in the terminal i will do "npm init" to get the required package.json attributes
-------------------------
To Deploy:
Write all of your code
Choose a web provider to host the website (AWS)
Choose a DNS to link the website url to the websites IP address (GoDaddy)\
Route DNS to webserver
