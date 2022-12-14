# ProjetoIII

## Platform for Tracking and Trading, with Property Registration, Unique Digital Materials

### Introduction and Objectives

This project was developed associated with the curricular unit of Project III of the 3rd year of the Graduation Degree in Informatics Engineering (Computer Science) at the School of Technology and Management of the Polytechnique Institute of Viana do Castelo.
The main objective of this project is the development of a platform based on blockchain and NFT that allows the registration and commercialization, with property registration, of unique digital materials, using a digital wallet.
The scope of this project is the development of a web platform at IPVC and was proposed by Professor António Miguel Cruz.
The administrator can create users so they can login on the website and check all transactions made on the platform.
The user (creator, client and owner) can add their digital materials on the platform, buy digital materials, receive bids for his NFTs that can be accepted or not, can make his NFT portfolio private to avoid bids for a certain digital material, define filters to fund desired NFT and can view his NFTs wallet.

### Technologies, tools, libraries, methodology and project management

#### Methodology and Project Management

For this project management we used Trello. We defined a list of all the requirements and goals that were intended throughout the project, than we created tasks with that list of requirements and goals and distributed those tasks to both elements of the group. 
We did 15-day sprints, each sprint has three states: To Do, Doing and Done. When we have a task in “To Do card” it means that we haven’t done it yet, in “Doing it” means that is being developed and the “Done” card means the task is totally completed and ready to the next level.
For the rest of the development of this project we are going to keep using this technology in order to have all the tasks organized and both elements of the group know what needs to be done next.

#### Technologies and Architecture

The architecture of the project is composed by a set of frameworks and technologies.
We have several layers that are important to the project functioning. The Framework that we use to develop the frontend is React JS. This framework uses HTML, CSS and JS, to create the page and all its components and functions which are transposed into CSS, HTML and JavaScript, which is what the browser interprets to be able to display the pages on the platform. All the data that the web platform consumes comes from two different REST APIs. All parts involving projects, teams and users come from the MongoDB database. The project requirements come from the Hyperledger Fabric blockchain, using its integration with Fablo which is started by the container in docker, using the following command "fablo start".
For the version control we use Github, to the project management we use Trello, for the project modelling we use draw.io and StarUML and to test the APIs we use Postman.
The next Figure illustrates the general project architecture scheme.

![image](https://user-images.githubusercontent.com/61700999/207577607-605c6408-a4b9-44e1-aa4f-95530c33635d.png)

##### HTML
![image](https://user-images.githubusercontent.com/61700999/207577748-4efcf36d-3452-4e98-9e96-bd1daca31bf0.png)

HTML is a computer language devised to allow website creation. These websites can then be viewed by anyone else connected to the Internet. It is relatively easy to learn, with the basics being accessible to most people in one sitting; and quite powerful in what it allows you to create. It is constantly undergoing revision and evolution to meet the demands and requirements of the growing Internet audience under the direction of the W3C, the organization charged with designing and maintaining the language.
Some important web links

##### Javascript 

![image](https://user-images.githubusercontent.com/61700999/207577823-2981e88f-349a-4246-93ef-47d152b66295.png)

JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.
Some important web links:

##### CSS

![image](https://user-images.githubusercontent.com/61700999/207577979-ba6b6bdb-c4f7-44af-8cd9-76ecf26b30e3.png)

CSS stands for Cascading Style Sheets with an emphasis placed on “Style.” While HTML is used to structure a web document (defining things like headlines and paragraphs, and allowing you to embed images, video, and other media), CSS comes through and specifies your document’s style—page layouts, colors, and fonts are all determined with CSS. Think of HTML as the foundation (every house has one), and CSS as the aesthetic choices (there’s a big difference between a Victorian mansion and a mid-century modern home).

##### BootStrap

![image](https://user-images.githubusercontent.com/61700999/207578094-faae7407-0e41-4e01-9f36-42671bb188e8.png)

Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components. Bootstrap is a web framework that focuses on simplifying the development of informative web pages (as opposed to web apps). The primary purpose of adding it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project. As such, the primary factor is whether the developers in charge find those choices to their liking. Once added to a project, Bootstrap provides basic style definitions for all HTML elements. The result is a uniform appearance for prose, tables and form elements across web browsers. In addition, developers can take advantage of CSS classes defined in Bootstrap to further customize the appearance of their contents. For example, Bootstrap has provisioned for light- and dark-colored tables, page headings, more prominent pull quotes, and text with a highlight.

##### Visual Studio Code

![image](https://user-images.githubusercontent.com/61700999/207578316-e72360ac-495a-440a-944e-abbf12fa91ba.png)

Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality. The source code is free and open source. The compiled binaries are freeware and free for private or commercial use.

##### Github

![image](https://user-images.githubusercontent.com/61700999/207578424-ccc70060-be90-4f3a-91db-d8fd6058f47a.png)

GitHub is an application you can use to store your code on the web. You may use it for something as simple as free cloud storage for your projects, or you may use it to show your code to potential employers interested in assessing your coding skills. However, GitHub is much more than simple code storage; it is a tool used by individual developers and teams alike all across the world to collaborate with each other on virtually any kind of project imaginable.

##### NodeJS

![image](https://user-images.githubusercontent.com/61700999/207578695-c4cfadbb-7191-4d9a-b09e-3ad17b1b5bdc.png)

The Node.js run-time environment includes everything you need to execute a program written in JavaScript. Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application. Now you can do much more with JavaScript than just making websites interactive. JavaScript now has the capability to do things that other scripting languages like Python can do. Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.

##### React

![image](https://user-images.githubusercontent.com/61700999/207578855-27964e1b-ab16-4d2f-8490-132b95626cae.png)


React or ReactJS is a free open-source frontend JavaScript library for building user interfaces or UI Components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM (Documentation Object Model – cross-platform interface that treats XML or HTML document as a tree structure where in each node is an object representing a part of the document), so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.

##### Docker

![image](https://user-images.githubusercontent.com/61700999/207578929-457e4730-f9e1-4130-995a-ce067a9b5a1a.png)

Docker Desktop is a tool that enables the user to build and share containerized applications and microservcies. Docker works with your choice of development tools and languages and gives you access to a vast library of certified images and templates in Docker Hub. This enables development teams to extend their environment to rapidly auto-build, continuously integrate, and collaborate using a secure repository. It offers a panoply of features being among them: on Windows, the ability to switch between Linux and Windows Server environments to build applications and the ability to work natively on Linux through WSL 2 on Windows machines which is what we implemented in our project.

##### Blockchain

![image](https://user-images.githubusercontent.com/61700999/207579018-6820650e-002a-4936-ad7f-6dfccdc62a77.png)

According to the IBM blockchain definition a blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets ina a business network. An asset can be tangible (house, car, etc) or intangible (patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved. 
Blockchain is ideal for delivering information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, account, production and much more. And because members share a single view of the truth, you can see details of a transaction end to end, giving you greater confidence, as Well as new efficiencies and opportunities. 
The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need of a trusted third party. 

### Use Cases, Users Analysis, Class Diagram

#### Users Analysis

In our project we have two types of users.
The administrator can log into the platform and create new users, can start an auction for determined collection and can check all the transactions made in their platform.
The user can be a creator of the digital materials, an owner of the digital material or a client. The creator can add their digital materials into the platform. The owner can receive offers for his NFT, can make his NFTs private and can see all of his NTF in the platform. The client can buy digital materials, define filters to ease his search for NTFs. The anonymous client can check all the information on the platform, as long as it’s public, and its respective owners.

![image](https://user-images.githubusercontent.com/61700999/207579166-3cc4b4d9-78c2-4dd7-87b5-f3a0376e6b6d.png)


#### Use Case Diagram

In our web platform we have five actors: the administrator that can create new users, start auctions for a determined collection and check all the transactions made in their platform, the client can buy digital materials, define filters to ease his search for NTFs, the anonymous client can check all the information on the platform, as long as it’s public, and its respective owners, the owner can receive offers for his NFT, can make his NFTs private and can see all of his NTF in the platform and the creator can add their digital materials into the platform

![image](https://user-images.githubusercontent.com/61700999/207579260-6e690515-3646-4292-a4c0-13f9afc30075.png)

### Difficulties & future features

####  Difficulties
Right now, as the project is still in the beginning, we did not find any difficulties at defining the requirements and creating the case use diagram.

#### Future Features
Our future features will revolve in starting the backend of our platform.

