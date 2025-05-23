// questions.js

const questions =[
 
  {
    question: "Which server-side scripting language is often used for building scalable and high-performance web applications?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js"
    ],
    answer: "Node.js"
  },
  {
    question: "What is the purpose of server-side scripting languages in web development?",
    options: [
      "To control the visual appearance of web pages",
      "To handle client-side interactivity",
      "To generate dynamic content and interact with databases",
      "To ensure secure data transmission over the we"
    ],
    answer: "To generate dynamic content and interact with databases"
  },
  {
    question: "Which server-side scripting language is for Microsoft's ASP.NET framework?",
    options: [
      "Python",
      "Ruby",
      "C#",
      "Java"
    ],
    answer: "C#"
  },
  {
    question: "Which client-side scripting language is supported by all modern web browsers?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "JavaScript"
  },
  {
    question: "What is the purpose of client-side scripting languages in web development?",
    options: [
      "To control the visual appearance of web pages",
      "To handle server-side processing and database interactions",
      "To generate dynamic content and interact with databases",
      "To add interactivity and dynamic behavior to web pages"
    ],
    answer: "To add interactivity and dynamic behavior to web pages"
  },
  {
    question: "Which client-side scripting language is primarily used for manipulating the Document Object Model (DOM) of a web page?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "JavaScript"
  },
  {
    question: "Which client-side scripting language is often used for validating form inputs on web pages?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "JavaScript"
  },
  {
    question: "Which client-side scripting technique allows for loading new content into a web page without a full page reload?",
    options: [
      "AJAX",
      "JSON",
      "XML",
      "Bootstrap"
    ],
    answer: "AJAX"
  },
  {
    question: "Which client-side framework/library is commonly used for building responsive and interactive user interfaces?",
    options: [
      "jQuery",
      "React",
      "Angular",
      "Vue.js."
    ],
    answer: "React"
  },
  {
    question: "Which technique is used to handle communication between a web browser and a server without interrupting the user's interaction with the web page?",
    options: [
      "AJAX",
      "JSON",
      "Websockets",
      "RESTful API"
    ],
    answer: "AJAX"
  },
  {
    question: "Which client-side technique is used to store data locally in a user's browser?",
    options: [
      "Cookies",
      "Local storage",
      "Session storage",
      "IndexedDB"
    ],
    answer: "Local storage"
  },
  {
    question: "Which technique is used to optimize web page loading speed by combining and minifying multiple CSS or JavaScript files?",
    options: [
      "Compression",
      "Caching",
      "Minification",
      "Encryption"
    ],
    answer: "Minification"
  },
  {
    question: "Which client-side technique is used to handle and process user interactions, such as mouse clicks or keyboard inputs?",
    options: [
      "Event handling",
      "Form validation",
      "Responsive design",
      "Browser compatibility"
    ],
    answer: "Event handling"
  },
  {
    question: "Which client-side technique is used to ensure that a web page displays correctly across different devices and screen sizes?",
    options: [
      "Event handling",
      "Form validation",
      "Responsive design",
      "Browser compatibility"
    ],
    answer: "Responsive design"
  },
  {
    question: "Which client-side technique is used to send and receive data between a web browser and a server in JSON format?",
    options: [
      "AJAX",
      "Websockets",
      "RESTful API",
      "Bootstrap"
    ],
    answer: "AJAX"
  },
  {
    question: "Which client-side technique is used to enhance the user interface by providing interactive tooltips, modals, and other components?",
    options: [
      "jQuery",
      "React",
      "Angular",
      "Vue.js"
    ],
    answer: "jQuery"
  },
  {
    question: "Which client-side technique is used to create visually appealing and responsive layouts for web pages?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "CSS"
  },
  {
    question: "Which client-side technique is used to optimize web page loading speed by preloading resources in advance?",
    options: [
      "Compression",
      "Minification",
      "Caching",
      "Preloading"
    ],
    answer: "Preloading"
  },
  {
    question: "Which client-side technique is used to ensure that a web page displays correctly in different web browsers?",
    options: [
      "Event handling",
      "Form validation",
      "Responsive design",
      "Browser compatibility"
    ],
    answer: "Browser compatibility"
  },
  {
    question: "What is the purpose of HTML in web programming?",
    options: [
      "To control the visual appearance of web pages",
      "To handle server-side processing and database interactions",
      "To specify the structure and content of web pages",
      "To add interactivity and dynamic behavior to web pages"
    ],
    answer: "To specify the structure and content of web pages"
  },
  {
    question: "Which HTML element is used to create a heading in a web page?",
    options: [
      "<p>",
      "<div>",
      "<h1>",
      "<a>"
    ],
    answer: "<h1>"
  },
  {
    question: "Which HTML element is used to create a paragraph in a web page?",
    options: [
      "<h1>",
      "<div>",
      "<p>",
      "<a>"
    ],
    answer: "<p>"
  },
  {
    question: "Which HTML element is used to create an unordered list in a web page?",
    options: [
      "<ul>",
      "<li>",
      "<ol>",
      "<a>"
    ],
    answer: "<ul>"
  },
  {
    question: "Which HTML element is used to create a link in a web page?",
    options: [
      "<h1>",
      "<div>",
      "<p>",
      "<a>"
    ],
    answer: "<a>"
  },
  {
    question: "Which CSS property is used to control the spacing between elements in a web page?",
    options: [
      "color",
      "font-size",
      "margin",
      "padding"
    ],
    answer: "margin"
  },
  {
    question: "Which CSS property is used to change the color of text in a web page?",
    options: [
      "color",
      "font-size",
      "margin",
      "padding"
    ],
    answer: "color"
  },
  {
    question: "Which CSS property is used to change the size of text in a web page?",
    options: [
      "color",
      "font-size",
      "margin",
      "padding"
    ],
    answer: "font-size"
  },
  {
    question: "Which CSS property is used to align content vertically within its container?",
    options: [
      "text-align",
      "vertical-align",
      "align-content",
      "justify-content"
    ],
    answer: "vertical-align"
  },
  {
    question: "Which CSS property is used to create a border around an element in a web page?",
    options: [
      "color",
      "font-size",
      "border",
      "padding"
    ],
    answer: "border"
  },
  {
    question: "Which CSS property is used to control the space inside the border of an element in a web page?",
    options: [
      "color",
      "font-size",
      "margin",
      "padding"
    ],
    answer: "padding"
  },
  {
    question: "Which web technology is commonly used for managing the content of information-rich websites?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Content Management System (CMS)"
    ],
    answer: "Content Management System (CMS)"
  },
  {
    question: "What is the purpose of a database in web programming?",
    options: [
      "To control the visual appearance of web pages",
      "To handle server-side processing and database interactions",
      "To specify the structure and content of web pages",
      "To add interactivity and dynamic behavior to web pages"
    ],
    answer: "To handle server-side processing and database interactions"
  },
  {
    question: "Which SQL statement is used to retrieve data from a database?",
    options: [
      "INSERT INTO",
      "UPDATE",
      "DELETE FROM",
      "SELECT"
    ],
    answer: "SELECT"
  },
  {
    question: "Which programming language is commonly used for server-side scripting in web programming?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "PHP"
  },
  {
    question: "Which HTML form element is used to create a text input field?",
    options: [
      "<input type=\"text\">",
      "<input type=\"checkbox\">",
      "<input type=\"radio\">",
      "<input type=\"submit\">"
    ],
    answer: "<input type=\"text\">"
  },
  {
    question: "Which HTML form element is used to create a checkbox?",
    options: [
      "<input type=\"text\">",
      "<input type=\"checkbox\">",
      "<input type=\"radio\">",
      "<input type=\"submit\">"
    ],
    answer: "<input type=\"checkbox\">"
  },
  {
    question: "Which HTML form element is used to create a radio button?",
    options: [
      "<input type=\"text\">",
      "<input type=\"checkbox\">",
      "<input type=\"radio\">",
      "<input type=\"submit\">"
    ],
    answer: "<input type=\"radio\">"
  },
  {
    question: "Which HTML form element is used to create a button that submits a form?",
    options: [
      "<input type=\"text\">",
      "<input type=\"checkbox\">",
      "<input type=\"radio\">",
      "<input type=\"submit\">"
    ],
    answer: "<input type=\"submit\">"
  },
  {
    question: "Which client-side technique is commonly used to validate form input before submitting it to the server?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "JavaScript"
  },
  {
    question: "What is a client-server system in web programming?",
    options: [
      "A system where the client and server are the same machine",
      "A system where the client and server are different machines and communicate over a network",
      "A system where the client and server are different browsers running on the same machine",
      "A system where the client and server are different web pages on the same website"
    ],
    answer: "A system where the client and server are different machines and communicate over a network"
  },
  {
    question: "Which protocol is commonly used for communication between a web client and server?",
    options: [
      "HTTP",
      "FTP",
      "TCP/IP",
      "SMTP"
    ],
    answer: "HTTP"
  },
  {
    question: "Which method in HTTP is used to retrieve a resource from a server?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    answer: "GET"
  },
  {
    question: "Which method in HTTP is used to send data to a server for processing?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    answer: "POST"
  },
  {
    question: "Which HTTP status code indicates a successful request?",
    options: [
      "200",
      "300",
      "400",
      "500"
    ],
    answer: "200"
  },
  {
    question: "Which HTTP status code indicates that the requested resource is not found on the server?",
    options: [
      "200",
      "300",
      "400",
      "404"
    ],
    answer: "404"
  },
  {
    question: "What is concurrency in the context of client-server systems?",
    options: [
      "The ability of the server to handle multiple clients simultaneously",
      "The ability of the client to handle multiple servers simultaneously",
      "The ability of the server to handle multiple requests from a single client",
      "The ability of the client to handle multiple requests to a single server"
    ],
    answer: "The ability of the server to handle multiple clients simultaneously"
  },
  {
    question: "What is a race condition in the context of concurrency?",
    options: [
      "A condition where two or more clients compete to establish a connection with the server",
      "A condition where two or more servers compete to respond to a client request",
      "A condition where multiple threads or processes access shared resources in an unpredictable manner",
      "A condition where multiple clients send duplicate requests to the server"
    ],
    answer: "A condition where multiple threads or processes access shared resources in an unpredictable manner"
  },
  {
    question: "Which synchronization technique is commonly used to prevent race conditions in client-server systems?",
    options: [
      "Mutex locks",
      "Spinlocks",
      "Semaphores",
      "Message queue"
    ],
    answer: "Mutex locks"
  },
  {
    question: "What is a callback function in the context of client-server systems?",
    options: [
      "A function that is called by the server to notify the client about a completed operation",
      "A function that is called by the client to request a specific operation from the server",
      "A function that is called by the server to handle concurrent client requests",
      "A function that is called by the client to synchronize with the server"
    ],
    answer: "A function that is called by the server to notify the client about a completed operation"
  },
  {
    question: "Which protocol is commonly used for asynchronous communication between a client and server?",
    options: [
      "HTTP",
      "FTP",
      "TCP/IP",
      "WebSocket"
    ],
    answer: "WebSocket"
  },
  {
    question: "What is long polling in client-server communication?",
    options: [
      "A technique where the server continuously sends updates to the client",
      "A technique where the client continuously sends requests to the server for updates",
      "A technique where the server holds a request from the client until new data is available",
      "A technique where the client holds a request from the server until new data is available"
    ],
    answer: "A technique where the server holds a request from the client until new data is available"
  },
  {
    question: "Which programming language is commonly used for server-side scripting in web programming?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "PHP"
  },
  {
    question: "Which programming language is commonly used for client-side scripting in web programming?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "JavaScript"
  },
  {
    question: "Which protocol is commonly used for secure communication between a client and server?",
    options: [
      "HTTP",
      "FTP",
      "TCP/IP",
      "HTTPS"
    ],
    answer: "HTTPS"
  },
  {
    question: "What is a load balancer in the context of client-server systems?",
    options: [
      "A device that balances the load between multiple clients",
      "A device that balances the load between multiple servers",
      "A device that balances the load between the client and server",
      "A device that balances the load between different network protocols"
    ],
    answer: "A device that balances the load between multiple servers"
  },
  {
    question: "Which mechanism is commonly used for session management in client-server systems?",
    options: [
      "Cookies",
      "HTML forms",
      "URL parameters",
      "Server-side caching"
    ],
    answer: "Cookies"
  },
  {
    question: "What is AJAX in web programming?",
    options: [
      "A programming language for server-side scripting",
      "A database management system",
      "A technique for asynchronous client-server communication",
      "A web server software"
    ],
    answer: "A technique for asynchronous client-server communication"
  },
  {
    question: "What is a RESTful API?",
    options: [
      "An API that supports real-time communication between client and server",
      "An API that uses the REST architectural style for client-server communication",
      "An API that only supports server-to-server communication",
      "An API that is used for database management"
    ],
    answer: "An API that uses the REST architectural style for client-server communication"
  },
  {
    question: "What is server-side caching in client-server systems?",
    options: [
      "A technique to store client-side data on the server",
      "A technique to store server-side data on the client",
      "A technique to store frequently accessed server-side data in memory for faster retrieval",
      "A technique to store client and server data in a separate cache server"
    ],
    answer: "A technique to store frequently accessed server-side data in memory for faster retrieval"
  },
  {
    question: "Which one of the following is false about style sheets?",
    options: [
      "style sheets do not reduce webpage file size",
      "style sheets increase accessibility",
      "style sheets create consistent appearance",
      "style sheets make it easy to maintain HTML pages"
    ],
    answer: "style sheets do not reduce webpage file size"
  },
  {
    question: "Which one of the following is not correct about client side scripting?",
    options: [
      "scripting language are not full-featured",
      "scripting language can access client hardware",
      "scripting language have limited capability",
      "scripting language are embedded as plain text and interpreted by application"
    ],
    answer: "scripting language can access client hardware"
  },
  {
    question: "Which of the following languages is used for defining the structure and layout of web pages?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "HTML"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Centralized Styling System",
      "Client-Side Scripting"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which of the following is NOT a front-end framework?",
    options: [
      "React",
      "Angular",
      "Django",
      "Vue.js"
    ],
    answer: "Django"
  },
  {
    question: "Which of the following is used for adding interactivity to web pages?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    answer: "JavaScript"
  },
  {
    question: "What is the purpose of responsive web design?",
    options: [
      "Ensuring websites load quickly",
      "Optimizing websites for search engines",
      "Making websites accessible to people with disabilities",
      "Creating websites that adapt to different screen sizes and devices"
    ],
    answer: "Creating websites that adapt to different screen sizes and devices"
  },
  {
    question: "What is the role of a back-end developer in web development?",
    options: [
      "Designing the visual elements of a website",
      "Writing code that runs on the user's browser",
      "Handling server-side logic and database interactions",
      "Testing and debugging web applications"
    ],
    answer: "Handling server-side logic and database interactions"
  },
  {
    question: "Which protocol is used for transferring data over the web?",
    options: [
      "HTTP",
      "FTP",
      "SMTP",
      "TCP/IP"
    ],
    answer: "HTTP"
  },
  {
    question: "What is the purpose of a database in web development?",
    options: [
      "Storing and managing website content",
      "Displaying web pages to users",
      "Handling user interactions on the front end",
      "Optimizing website performance"
    ],
    answer: "Storing and managing website content"
  },
  {
    question: "Which of the following is NOT a commonly used database management system for web development?",
    options: [
      "MySQL",
      "MongoDB",
      "Oracle",
      "Git"
    ],
    answer: "Git"
  },
  {
    question: "What is the purpose of version control in web development?",
    options: [
      "Tracking changes to code and files",
      "Optimizing database performance",
      "Securing the web server from attacks",
      "Improving website accessibility"
    ],
    answer: "Tracking changes to code and files"
  },
  {
    question: "How many sizes of headers are available in HTML by default?",
    options: [
      "1",
      "6",
      "2",
      "3"
    ],
    answer: "6"
  },
  {
    question: "What are the types of lists available in HTML?",
    options: [
      "ordered and un order list",
      "bullet and numbered list",
      "named and unnamed",
      "none of the above"
    ],
    answer: "ordered and un order list"
  },
  {
    question: "HTML files are saved by default with the extension?",
    options: [
      ".html",
      "htm",
      "js",
      "css"
    ],
    answer: ".html"
  },
  {
    question: "Which attribute is used to provide a unique name to an HTML element?",
    options: [
      "id",
      "class",
      "type",
      "and b"
    ],
    answer: "id"
  },
  {
    question: "Which of the following is the correct syntax for using the HTML style attribute?",
    options: [
      "<tagname style=“property:value>",
      "<tagname style=“property>"
    ],
    answer: "<tagname style=“property:value>"
  },
  {
    question: "What tag is used to render an image on a webpage?",
    options: [
      "img",
      "src",
      "image"
    ],
    answer: "img"
  },
  {
    question: "What is the correct syntax to write an HTML comment?",
    options: [
      "",
      "// Comment",
      "# Comment",
      "/* Comment */"
    ],
    answer: ""
  },
  {
    question: "Colors are defined in HTML using?",
    options: [
      "RGB Values",
      "HEX Values",
      "RGBA values",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What are the types of unordered lists in HTML?",
    options: [
      "circle ,square, disc",
      "triangle, square, disc"
    ],
    answer: "circle ,square, disc"
  },
  {
    question: "Which of the following is true about HTML tags?",
    options: [
      "are case sensitive",
      "are not case sensitive"
    ],
    answer: "are not case sensitive"
  },
  {
    question: "Which HTML tag is called the root element of an HTML document?",
    options: [
      "<html>",
      "<body>"
    ],
    answer: "<html>"
  },
  {
    question: "How is black color represented in terms of RGB values?",
    options: [
      "RGB(0, 0, 0)",
      "RGB(100, 100, 100)",
      "RGB(100, 100, 0)",
      "RGB(100, 0, 0)"
    ],
    answer: "RGB(0, 0, 0)"
  },
  {
    question: "Which property allows an image link to show a text label?",
    options: [
      "alt",
      "str",
      "alternative"
    ],
    answer: "alt"
  },
  {
    question: "Which of the following are examples of block-level elements in HTML?",
    options: [
      "div",
      "html"
    ],
    answer: "div"
  },
  {
    question: "What are the main components of the front end of any working website?",
    options: [
      "HTML, CSS, Javascript.",
      "HTML only.",
      "Javascript only.",
      "Node.js."
    ],
    answer: "HTML, CSS, Javascript."
  },
  {
    question: "How to create a hyperlink in HTML?",
    options: [
      "<a href =\"www.dts.et\"> Divergent Technology </a>",
      "<a url = \"www. dts.et\" Divergent Technology /a>",
      "<a link = \"www. dts.et\"> Divergent Technology </a>",
      "<a> www. dts.et < Divergent Technology /a>"
    ],
    answer: "<a href =\"www.dts.et\"> Divergent Technology </a>"
  },
  {
    question: "In which part of the HTML metadata is contained?",
    options: [
      "head tag",
      "html tag",
      "body tag"
    ],
    answer: "head tag"
  },
  {
    question: "What type of CSS is the following code snippet? <h1 style=\"color:blue;\">Exit exam </h1>",
    options: [
      "Inline",
      "Internal",
      "External",
      "None of the above"
    ],
    answer: "Inline"
  },
  {
    question: "How can we select an element with a specific ID in CSS?",
    options: [
      "#",
      "."
    ],
    answer: "#"
  },
  {
    question: "In the below code snippet, in what order will the margins be added? p { margin: 25px 50px 75px 100px; }",
    options: [
      "Top, Right, Bottom, Left",
      "Top, Left, Bottom, Right",
      "Top, Bottom, Right, Left",
      "Right, Left, Top, Bottom"
    ],
    answer: "Top, Right, Bottom, Left"
  }
]

  
  
 