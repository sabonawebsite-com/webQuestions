// questions.js

const questions =[
  {
    question: "Which one of the following is true about functions in JavaScript?",
    options: [
      "Function names can contain spaces",
      "Function names can begin with digits",
      "Function names are not case-sensitive",
      "There is no limit to the number of function parameters that a function may contain"
    ],
    answer: "There is no limit to the number of function parameters that a function may contain"
  },
  {
    question: "Which one of the following is not an example of scripting languages?",
    options: [
      "PHP",
      "Perl",
      "C++",
      "Python"
    ],
    answer: "C++"
  },
  {
    question: "Which one of the following is the smallest heading tag?",
    options: [
      "<H3>",
      "<H1>",
      "<H4>",
      "<H6>"
    ],
    answer: "<H6>"
  },
  {
    question: "Which one of the following is true about Java and JavaScript?",
    options: [
      "JavaScript can be used in extremely sophisticated applications",
      "JavaScript is compiled and interpreted in source code form",
      "Both are object-oriented languages",
      "There are more features in JavaScript than Java"
    ],
    answer: "Both are object-oriented languages"
  },
  {
    question: "Which one of the following is correct way creating String object?",
    options: [
      "String m = 'Computer Science'",
      "String m = 'H' 'e, '\",'I, o';",
      "String m = new String (‘Technology’):",
      "String m = new String (\"Exit Exam\")"
    ],
    answer: "String m = new String (‘Technology’):"
  },
  {
    question: "Which one of the following is true about frames in HTML?",
    options: [
      "Frames allow parts of the page to remain stationary while other’s parts scroll",
      "All browsers support frames",
      "Load on the server is not affected, if there are a large number of frames in a page",
      "Frames are not difficult to handle for search engines"
    ],
    answer: "Frames allow parts of the page to remain stationary while other’s parts scroll"
  },
  {
    question: "Which HTML tag is used for program listing?",
    options: [
      "<p>",
      "<pre>",
      "<head>",
      "<sub>"
    ],
    answer: "<pre>"
  },
  {
    question: "Which HTML form tag attribute that used maximum number of characters without scrolling or write new line?",
    options: [
      "MAXLENGTH",
      "TYPE",
      "ACTION",
      "STYLE"
    ],
    answer: "MAXLENGTH"
  },
  {
    question: "Which one of the following is a false reason for why we use HTML?",
    options: [
      "Because it works with all platforms, all browsers and all web servers",
      "Because it is quickly transferred over a network.",
      "Because HTML files are flat text and very small",
      "Because it is proprietary technology"
    ],
    answer: "Because it is proprietary technology"
  },
  {
    question: "Which one is true about the following JavaScript statement? document.write(“Hello World”);",
    options: [
      "write is a property",
      "write is a method",
      "document is a property",
      "write is an object"
    ],
    answer: "write is a method"
  },
  {
    question: "Which one of the following is false about scripting languages?",
    options: [
      "They are platform dependent",
      "They are slower than other compiled codes",
      "They do not need compilers and development environments",
      "They have simple execution model"
    ],
    answer: "They are platform dependent"
  },
  {
    question: "Which value of form's METHOD attribute causes a form's contents to be parsed one element at a time?",
    options: [
      "GET",
      "INPUT",
      "ACTION",
      "POST"
    ],
    answer: "GET"
  },
  {
    question: "Which one of the following is false about the output of the above tag <address> Abera Bekele </address>?",
    options: [
      "Abera Bekele will be formatted in italics",
      "Abera Bekele will be formatted in bold",
      "there will line break above Abera Bekele",
      "there will line break below Abera Bekele"
    ],
    answer: "Abera Bekele will be formatted in bold"
  },
  {
    question: "Which one of the following is not true about the web?",
    options: [
      "Html pages are dynamic",
      "php is web scripting language used to make web page dynamic",
      "xhtml pages are static",
      "Javascript is web scripting language used to make web page dynamic"
    ],
    answer: "Html pages are dynamic"
  },
  {
    question: "Which one of the following is true about client server model?",
    options: [
      "php is for client programming",
      "client refers to end users computer",
      "client connects with server only through the the internet",
      "Javascript is for server side programmin"
    ],
    answer: "client refers to end users computer"
  },
  {
    question: "Which CSS property is used to control the text size of an element?",
    options: [
      "font-style",
      "text-size",
      "font-size",
      "text-style"
    ],
    answer: "font-size"
  },
  {
    question: "What is the purpose of HTML?",
    options: [
      "Used to add few logics in your web page",
      "Used to create a structure of the document",
      "Used to create an interaction between user and web page",
      "Used to create server side operation"
    ],
    answer: "Used to create a structure of the document"
  },
  {
    question: "Which one of the following form attribute is used to assign the server side script file that processes the form data?",
    options: [
      "method",
      "action",
      "target",
      "autocomplete"
    ],
    answer: "action"
  },
  {
    question: "Defines a header table cell in HTML code.",
    options: [
      "<tr>",
      "<th>",
      "<td>",
      "<caption>"
    ],
    answer: "<th>"
  },
  {
    question: "how are the objects organized in the HTML DOM?",
    options: [
      "hierarchy",
      "queue",
      "stack",
      "classwise"
    ],
    answer: "hierarchy"
  },
  {
    question: "Which one of the following methods can be used to refresh a webpage?",
    options: [
      "location relocate",
      "window relocate",
      "window resefresh",
      "location reload"
    ],
    answer: "location reload"
  },
  {
    question: "Which one of the following is correct syntax for document type declaration in HTML5?",
    options: [
      "</ Doctype html>",
      "<! Doctype! html>",
      "<Doctype! html>",
      "<! Doctype html>"
    ],
    answer: "<! Doctype html>"
  },
  {
    question: "Which one of the following is a false statement?",
    options: [
      "web browser is software that run on server",
      "website is a collection of resources in various forms",
      "web page is basic unit of information storage on www",
      "user agent renders resources for a user to view"
    ],
    answer: "web browser is software that run on server"
  },
  {
    question: "Which one of the following terms refers to a machine on which the requested resource is stored?",
    options: [
      "port",
      "query",
      "host",
      "protected"
    ],
    answer: "host"
  },
  {
    question: "Which attribute of <img> tag is used when we want to display a text in a place of image when due to any reason the image is not displayed?",
    options: [
      "rep",
      "pla",
      "alt",
      "im"
    ],
    answer: "alt"
  },
  {
    question: "Which one of the following is top-level object?",
    options: [
      "root object",
      "document object",
      "Javascript object",
      "window object"
    ],
    answer: "window object"
  },
  {
    question: "The attribute used in the body tag to change the default font color for the page is ________.",
    options: [
      "Bgcolor attribute",
      "text attribute",
      "color attribute",
      "link tag"
    ],
    answer: "text attribute"
  },
  {
    question: "Which one of the following is true about static website?",
    options: [
      "Its content will not be changed unless the actual webpage file is edited.",
      "It is also referred as flat pages or stationary pages.",
      "It will be delivered to the users as exactly stored in the files.",
      "Its content remains the same for all viewers of the website.",
      "All of the above."
    ],
    answer: "All of the above."
  },
  {
    question: "A pop up box used to display information to user in JavaScript is called __________.",
    options: [
      "Prompt",
      "Alert",
      "Confirm",
      "All of the above"
    ],
    answer: "Alert"
  },
  {
    question: "What is the correct syntax for referring an external CSS?",
    options: [
      "<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">",
      "<style rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">"
    ],
    answer: "<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">"
  },
  {
    question: "What does these code possibly refers to <link rel=\"stylesheet\" href=\"styles.css\">?",
    options: [
      "Defines a new CSS by the name styles",
      "Calls an internal style sheet called styles",
      "Calls an external style sheet called styles",
      "Defines an inline CSS by the name styles"
    ],
    answer: "Calls an external style sheet called styles"
  },
  {
    question: "What is the preferred way for adding a background color in HTML?",
    options: [
      "<body background=\"yellow\">",
      "<background>yellow</background>",
      "< body style=\"background-color: yellow\">",
      "<background color=\"yellow\">text<background>"
    ],
    answer: "< body style=\"background-color: yellow\">"
  },
  {
    question: "What would be the output of the following javascript code? x=4+\"4\"; document.write(x);",
    options: [
      "44",
      "8",
      "4",
      "The code contains an error"
    ],
    answer: "44"
  },
  {
    question: "Which of the following is not a web development technology?",
    options: [
      "HTML",
      "CSS",
      "MySQL",
      "Java"
    ],
    answer: "Java"
  },
  {
    question: "Which of the following is a principle of responsive web design?",
    options: [
      "Using fixed-width layouts",
      "Designing for a specific device size",
      "Prioritizing content based on importance",
      "Using only images for navigation"
    ],
    answer: "Prioritizing content based on importance"
  },
  {
    question: "Which of the following is a server-side scripting language?",
    options: [
      "JavaScript",
      "PHP",
      "HTML",
      "CSS"
    ],
    answer: "PHP"
  },
  {
    question: "In HTML, how do we create a link to another site?",
    options: [
      "<a href=\"http://www.somedomain.com\">click here</a>",
      "<a url=\"http://www.somedomain.com\">click here</a>",
      "<a link=\"http://www.somedomain.com\">click here</a>",
      "<a \"http://www.somedomain.com\">click here</a>"
    ],
    answer: "<a href=\"http://www.somedomain.com\">click here</a>"
  },
  {
    question: "Which technique is used to improve the performance of web applications by caching frequently accessed data or resources?",
    options: [
      "Compression",
      "Minification",
      "Caching",
      "Encryption"
    ],
    answer: "Caching"
  },
  {
    question: "Which of the following is a client-side scripting language?",
    options: [
      "Java",
      "Python",
      "jQuery",
      "SQL"
    ],
    answer: "jQuery"
  },
  {
    question: "Which of the following are units of relative length in CSS?",
    options: [
      "em",
      "rem",
      "vmax",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which of the following is not a common content management system (CMS) used to build information-rich websites?",
    options: [
      "WordPress",
      "Drupal",
      "Joomla",
      "MySQL"
    ],
    answer: "MySQL"
  },
  {
    question: "Which of the following is a key principle of user-centered design for websites?",
    options: [
      "Using complex navigation menus",
      "Prioritizing business goals over user needs",
      "Testing design and functionality with real users",
      "Using bright, flashy colors and animations"
    ],
    answer: "Testing design and functionality with real users"
  },
  {
    question: "Which of the following is a commonly used protocol for real-time communication in client-server systems?",
    options: [
      "HTTP",
      "FTP",
      "WebSocket",
      "SMTP"
    ],
    answer: "WebSocket"
  },
  {
    question: "Which of the following is an example of a technique for implementing concurrency control in client-server systems?",
    options: [
      "Locking",
      "Compression",
      "Encryption",
      "Hashing"
    ],
    answer: "Locking"
  },
  {
    question: "Which of the following is a commonly used protocol for client-server communication on the web?",
    options: [
      "TCP",
      "SMTP",
      "HTTP",
      "FTP"
    ],
    answer: "HTTP"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "Var",
      "Int",
      "String",
      "bool"
    ],
    answer: "Var"
  },
  {
    question: "Which of the following is correct about JavaScript?",
    options: [
      "A programming language used for creating dynamic websites",
      "A markup language used for defining the structure of a webpage",
      "A server-side scripting language",
      "A database management system"
    ],
    answer: "A programming language used for creating dynamic websites"
  },
  {
    question: "Which of the following is not a server-side programming language?",
    options: [
      "PHP",
      "JavaScript",
      "Python",
      "Ruby"
    ],
    answer: "JavaScript"
  },
  {
    question: "Which of the following are valid ways to represent a colour in CSS?",
    options: [
      "A valid color name",
      "RGB values",
      "HEX values",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is the correct interpretation of the following CSS script snippet? p.class1 { text-align: center; }",
    options: [
      "All paragraphs get centered",
      "All paragraphs with the class of class1 get centered",
      "All elements inside the paragraphs get centered",
      "All elements with the class of class1 get centered"
    ],
    answer: "All paragraphs with the class of class1 get centered"
  },
  {
    question: "Choose the correct interpretation of the following CSS script snippet. <style> p {color: red;} #p2{color: inherit;} </style> <p>Hello paragraph 1</p> <p id=\"p2\">Hello paragraph 2</p> <p>Hello paragraph 3</p>",
    options: [
      "All paragraphs are red colored.",
      "All paragraphs are black colored",
      "Except paragraph 2 all are red cod colored.",
      "None of the above"
    ],
    answer: "Except paragraph 2 all are red cod colored."
  },
  {
    question: "Which of the following JavaScript display method is used to change the content of HTML elements.",
    options: [
      "innerHTML",
      "document.write()",
      "console.log ()",
      "window.alert()"
    ],
    answer: "innerHTML"
  },
  {
    question: "Which one is true regarding variable declaration in JavaScript?",
    options: [
      "Const declares read only global variables.",
      "Let declares block scoped, local variables.",
      "Var declares local scope, read-only variables.",
      "All of the above"
    ],
    answer: "Let declares block scoped, local variables."
  },
  {
    question: "Choose correct output of the following object looping using for … in. const obj = {name:'XYZ'}; for (x in obj) console.log(obj);",
    options: [
      "No output",
      "XYZ",
      "name",
      "All of the above"
    ],
    answer: "No output"
  },
  {
    question: "One of the following methods is used to send binary input to server in HTML forms.",
    options: [
      "POST",
      "GET",
      "HTTP",
      "None of the above"
    ],
    answer: "POST"
  },
  {
    question: "A period of time during which a particular person, views a number of web pages at a particular machine refers to:",
    options: [
      "Session",
      "Cookies",
      "$_COOKIE",
      "$_SESSION",
      "all"
    ],
    answer: "Session"
  },
  {
    question: "Which of the following is an incorrect comparison of World Wide Web and Internet?",
    options: [
      "Internet is an underlying network structure whereas www is a system of accessing and sharing information over the internet",
      "Internet is one of WAN of interconnected devices whereas www is a system of interconnected devices and resources linked by URLs and hyperlinks",
      "Internet is the subset of WWW while www is its superset.",
      "Internet is mostly based on hardware whereas www is more software oriented"
    ],
    answer: "Internet is the subset of WWW while www is its superset."
  },
  {
    question: "What is the root object of other DOM and BOM objects that is called automatically when the browser is opened?",
    options: [
      "Screen",
      "Document",
      "Window",
      "Form",
      "History"
    ],
    answer: "Window"
  },
  {
    question: "Which of the following javascript objects belongs to the style property?",
    options: [
      "Element",
      "Navigation",
      "Document",
      "Window",
      "History"
    ],
    answer: "Element"
  },
  {
    question: "Which of the following is server side, open source and web scripting language that is embedded in HTML?",
    options: [
      "JavaScript",
      "SQL",
      "J-Query",
      "PHP",
      "All"
    ],
    answer: "PHP"
  },
  {
    question: "From the following web programming languages rendering engines, one does not reside as plugin in the browser.",
    options: [
      "Hypertext markup language parser",
      "JavaScript executing engine",
      "Cascading stylesheet parser",
      "Hypertext Preprocessor interpreter",
      "None"
    ],
    answer: "Hypertext Preprocessor interpreter"
  },
  {
    question: "Identify which character is used to indicate an end HTML tag?",
    options: [
      "<",
      "*",
      "^",
      "/"
    ],
    answer: "/"
  },
  {
    question: "Which HTML element is correct for the largest heading?",
    options: [
      "<h1>",
      "<h3>",
      "<head>",
      "<h6>"
    ],
    answer: "<h1>"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: [
      "<break?",
      "<br>",
      "<rb>",
      "<brk>"
    ],
    answer: "<br>"
  },
  {
    question: "In which of HTML element do we put the JavaScript?",
    options: [
      "<js>",
      "<script>",
      "<javascript>",
      "<scripting>"
    ],
    answer: "<script>"
  },
  {
    question: "How do you write \"Hello World\" in an alert box?",
    options: [
      "msg(\"Hello World\");",
      "alertBox(\"Hello World\");",
      "alert(\"Hello World\");",
      "msgBox(\"Hello World\");"
    ],
    answer: "alert(\"Hello World\");"
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction",
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()"
    ],
    answer: "function myFunction()"
  },
  {
    question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
    options: [
      "if i =! 5 then",
      "if (i <> 5)",
      "if i <> 5",
      "if (i != 5)"
    ],
    answer: "if (i != 5)"
  },
  {
    question: "How does a WHILE loop start?",
    options: [
      "while (i <= 10; i++)",
      "while {i <= 10}",
      "while (i <= 10)",
      "while( i = 1 to 10)"
    ],
    answer: "while (i <= 10)"
  },
  {
    question: "How does a FOR loop start?",
    options: [
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "for (i <= 5; i++)",
      "for i = 1 to"
    ],
    answer: "for (i = 0; i <= 5; i++)"
  },
  {
    question: "Which control statement is used for executing different blocks of code based on multiple conditions?",
    options: [
      "While loop statement",
      "For loop statement",
      "If...else statement",
      "Switch statement"
    ],
    answer: "Switch statement"
  },
  {
    question: "Which loop statement is guaranteed to execute its body at least once?",
    options: [
      "For loop statement",
      "Do...while statement",
      "If...else statement",
      "Switch statement"
    ],
    answer: "Do...while statement"
  },
  {
    question: "Which network protocol is used for secure file transfer?",
    options: [
      "SSH",
      "SSH and SFTP",
      "SFTP",
      "HTTP"
    ],
    answer: "SSH and SFTP"
  },
  {
    question: "Which loop statement is used when the number of iterations is not known in advance?",
    options: [
      "While loop statement",
      "Switch statement",
      "For loop statement",
      "If...else statemen"
    ],
    answer: "While loop statement"
  },
  {
    question: "Which control structure is used to repeat a set of statements as long as a condition is true?",
    options: [
      "While loop statement",
      "If...else statement",
      "For loop statement",
      "Switch statement"
    ],
    answer: "While loop statement"
  },
  {
    question: "How to create a hyperlink in HTML?",
    options: [
      "<a href = \"www.javatpoint.com\"> javaTpoint.com </a>",
      "<a url = \"www.javatpoint.com\" javaTpoint.com /a>",
      "<a link = \"www.javatpoint.com\"> javaTpoint.com </a>",
      "<a> www.javatpoint.com <javaTpoint.com /a>"
    ],
    answer: "<a href = \"www.javatpoint.com\"> javaTpoint.com </a>"
  },
  {
    question: "In JavaScript the x===y statement implies that:",
    options: [
      "Both x and y are equal in value, type and reference address as well.",
      "Both are x and y are equal in value only.",
      "Both are equal in the value and data type.",
      "Both are not same at all."
    ],
    answer: "Both are equal in the value and data type."
  },
  {
    question: "What are the three important manipulations for a loop on a loop variable?",
    options: [
      "Updation, Incrementation, Initialization",
      "Initialization, Testing, Incrementation",
      "Testing, Updation, Testing",
      "Initialization, Testing, Updation"
    ],
    answer: "Initialization, Testing, Updation"
  },
  {
    question: "Which type of CSS is used in the below code? <p style = \"border:2px solid red;\">",
    options: [
      "Inline CSS",
      "External CSS",
      "Internal CSS",
      "online Css"
    ],
    answer: "Inline CSS"
  },
  {
    question: "Which one of the following is not true?",
    options: [
      "PHP can be used to develop web applications.",
      "PHP applications cannot be compiled",
      "PHP makes a website dynamics",
      "PHP cannot be embedded into HTM"
    ],
    answer: "PHP cannot be embedded into HTM"
  },
  {
    question: "Which one of the following is true about Static websites?",
    options: [
      "Its web pages are coded in HTML, CSS and JavaScript.",
      "Prebuilt content is same every time the page is loaded.",
      "The content is only changed when someone publishes and updates the file.",
      "all"
    ],
    answer: "all"
  },
  {
    question: "Which one of the following is not true about HTML?",
    options: [
      "Stands for Hypertext Markup Language.",
      "It’s a programming language.",
      "HTML describes the structure of a web page semantically",
      "HTML file must have an htm or html file extension."
    ],
    answer: "It’s a programming language."
  },
  {
    question: "Which one of the following is the correct sequence of tags in the structure of html document?",
    options: [
      "body, head, html, title",
      "title, head, body, html",
      "html, head, title, body",
      "head, body, html, title"
    ],
    answer: "html, head, title, body"
  },
  {
    question: "Which of the following is the correct way to create a hyperlink in html?",
    options: [
      "<a href = “second.html”>SECOND</a>",
      "<hyperlink href= “second.html”>SECOND</hyperlink>",
      "<a src= “second.html”>SECOND</a>",
      "<link = “second.html” name= “SECOND”>"
    ],
    answer: "<a href = “second.html”>SECOND</a>"
  },
  {
    question: "Which one the following is the correct about CSS syntax?",
    options: [
      "Selector {property= “value”}",
      "Selector {property: value;}",
      "Selector “property=value”",
      "Selector {property: value}"
    ],
    answer: "Selector {property: value;}"
  },
  {
    question: "Which of the following is the correct way to use external CSS in the html head section?",
    options: [
      "<link rel=\"stylesheet\" type=\"text/css\" src=“mycss.css\">",
      "<external rel=\"stylesheet\" type=\"text/css\" src=“mycss.css\">",
      "<link rel=\"stylesheet\" type=\"text/css\" href=“mycss.css\">",
      "<style rel=\"stylesheet\" type=\"text/css\" href=“mycss.css\">"
    ],
    answer: "<link rel=\"stylesheet\" type=\"text/css\" href=“mycss.css\">"
  },
  {
    question: "Which of the following is the correct way to use external JavaScript code in the html head section?",
    options: [
      "<script type=\"text/javascript\" src=\"filename.js\" ></script>",
      "<javaScript type=\"text/javascript\" href= “filename.js”>",
      "<link src= “filename.js type=\"text/javascript\"” >javaScript</link>",
      "<script type;text/javascript; , src:filename.js;></script>"
    ],
    answer: "<script type=\"text/javascript\" src=\"filename.js\" ></script>"
  },
  {
    question: "Which following program is run on a web server to generate dynamic web pages by creating a unique experience for each user?",
    options: [
      "Client-side scripts",
      "Server-side scripts",
      "Front end scripts",
      "Cascading scripts"
    ],
    answer: "Server-side scripts"
  },
  {
    question: "Which one of the following is not the functionalities of server-side scripts.",
    options: [
      "Manage data in a database",
      "Send and receive cookies",
      "Encrypt and validate data",
      "Build Application Programming Interfaces (APIs)"
    ],
    answer: "Encrypt and validate data"
  },
  {
    question: "Which one of the following is not true about PHP?",
    options: [
      "PHP documents end with the extension .php.",
      "A PHP document will output only HTML.",
      "PHP stands for Hypertext Preprocessor.",
      "It is a server-side scripting language that is embedded in HTML."
    ],
    answer: "A PHP document will output only HTML."
  },
  {
    question: "Which one of the following is true about POST method?",
    options: [
      "POST requests are cached",
      "POST requests remain in the browser history",
      "POST requests can be bookmarked",
      "POST requests have restrictions on data length"
    ],
    answer: "POST requests have restrictions on data length"
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a>http://www.google.com</a>",
      "<a name =” http://www.google.com”>Google.com</a>",
      "<a href=http://www.google.com”>Google</a>",
      "<a url=” http://www.google.com”>Google.com</a>"
    ],
    answer: "<a href=http://www.google.com”>Google</a>"
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    options: [
      "<a href=”url” target=” _blank”>",
      "<a href=”url” new>",
      "<a href=”url” target=”new”>",
      "<a href=”url”>new tab</a>"
    ],
    answer: "<a href=”url” target=” _blank”>"
  },
  {
    question: "In html, which attribute is used to specify that an input field must be filled out?",
    options: [
      "formvalidate",
      "required",
      "validate",
      "placeholder"
    ],
    answer: "required"
  },
  {
    question: "What is the correct HTML for inserting an image:",
    options: [
      "<img alt=”MyImage”>image.gif</img>",
      "<imghref=” image.gif” alt=” MyImage”>",
      "<image src=” image.gif” alt=” MyImage”>",
      "<imgsrc=” image.gif” alt=” MyImage”>"
    ],
    answer: "<imgsrc=” image.gif” alt=” MyImage”>"
  },
  {
    question: "____________is a metalanguage used to define new markup languages, and help you to create a language crafted specifically for your application or domain.",
    options: [
      "PHP",
      "HTML",
      "XML",
      "JavaScript"
    ],
    answer: "XML"
  },
  {
    question: "_____________are the software programs people use to consume the web?",
    options: [
      "Languages",
      "Browsers",
      "HTTP",
      "Web Servers"
    ],
    answer: "Browsers"
  },
  {
    question: "What Tag Is Used For Inserting A Line Break In A Html Page.",
    options: [
      "<break>",
      "<ol>",
      "<br>",
      "<lb>"
    ],
    answer: "<br>"
  },
  {
    question: "Which Javascript Event Handler Pertains To Actions Enabled By Mouse Clicks.",
    options: [
      "Oninput",
      "Onchange",
      "Onclick",
      "Ondrag"
    ],
    answer: "Onclick"
  },
  {
    question: "How can we write comment along with CSS code ?",
    options: [
      "/* a comment*/",
      "//a comment //",
      "/ a comment/",
      "<’a comment’>"
    ],
    answer: "/* a comment*/"
  },
  {
    question: "Which CSS property is used to control the text size of an element ?",
    options: [
      "font-style",
      "text-size",
      "font-size",
      "text-style"
    ],
    answer: "font-size"
  },
  {
    question: "By default Hyperlinks are displayed with an underline. How do you remove the underline from all hyperlinks by using CSS code ?",
    options: [
      "a {text: no-underline;}",
      "a {text-decoration:none;}",
      "a {text-style: no-underline;}",
      "a {text-decoration: no-underline;}"
    ],
    answer: "a {text-decoration:none;}"
  },
  {
    question: "A program in HTML can be rendered and read by –",
    options: [
      "web browser",
      "server",
      "interpreter",
      "none of the above"
    ],
    answer: "web browser"
  },
  {
    question: "Which of the following HTML tag is used to display the text with scrolling effect?",
    options: [
      "<marquee>",
      "<scroll>",
      "<div>",
      "None of the above"
    ],
    answer: "<marquee>"
  },
  {
    question: "Are actions that occur as a result of something the user does?",
    options: [
      "Function",
      "Procedure",
      "Event",
      "None"
    ],
    answer: "Event"
  },
  {
    question: "Which of the following is NOT a programming paradigm used in JavaScript?",
    options: [
      "Object-oriented programming",
      "Functional programming",
      "Procedural programming",
      "Logical programming"
    ],
    answer: "Logical programming"
  },
  {
    question: "Which of the following is NOT a type of HTTP request method?",
    options: [
      "GET",
      "POST",
      "HEAD",
      "DELETE",
      "None"
    ],
    answer: "None"
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<body bgcolor=\"yellow\">",
      "<background>yellow</background>",
      "<body bg=\"yellow\">",
      "a and b"
    ],
    answer: "<body bgcolor=\"yellow\">"
  },
  {
    question: "One of the following is not correct way to add color.",
    options: [
      "rgba(234,12,32,0.7)",
      "hsl(359,34%,70%)",
      "rgb(255,255,359)",
      "hsla(0,100%,23%,0.2)"
    ],
    answer: "rgb(255,255,359)"
  },
  {
    question: "one of the following is new in HTML5",
    options: [
      "video tag",
      "placeholder",
      "picture",
      "all are new"
    ],
    answer: "all are new"
  },
  {
    question: "One is used to display using JavaScript",
    options: [
      "document.write()",
      "window.alert()",
      "consol.log()",
      "All"
    ],
    answer: "All"
  },
  {
    question: "Internet service that allows individuals and organizations to make their website accessible is __.",
    options: [
      "WWW",
      "FTP",
      "Web hosting",
      "Data Center"
    ],
    answer: "Web hosting"
  },
  {
    question: "A generic protocol that supports client requesting a document from the server and server returning the requested documents is called__________.",
    options: [
      "DNS",
      "TCP",
      "HTTP",
      "Telnet"
    ],
    answer: "HTTP"
  },
  {
    question: "How can you make a bulleted list?",
    options: [
      "<list>",
      "<dl>",
      "<ol>",
      "<ul>"
    ],
    answer: "<ul>"
  },
  {
    question: "What is the correct HTML for making a drop-down list?",
    options: [
      "<select>",
      "<input type=\"dropdown\">",
      "<input type=\"list\">",
      "<list>"
    ],
    answer: "<select>"
  },
  {
    question: "What is the correct HTML for making a text area?",
    options: [
      "<input type=\"textarea\">",
      "<input type=\"textbox\">",
      "<textarea>",
      "<input text=\"textbox\">"
    ],
    answer: "<textarea>"
  },
  {
    question: "What is the primary markup language used for structuring content on the web?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "HTML"
  },
  {
    question: "What is the purpose of CSS in web development?",
    options: [
      "To define the structure and layout of web pages",
      "To add interactivity and dynamic behavior to web pages",
      "To control the visual appearance of web pages",
      "To handle server-side processing and database interactions"
    ],
    answer: "To control the visual appearance of web pages"
  },
  {
    question: "Which programming language is primarily used for client-side scripting in web development?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "JavaScript"
  },
  {
    question: "Which protocol is used for transferring data over the web?",
    options: [
      "HTTP",
      "FTP",
      "TCP/IP",
      "SMTP"
    ],
    answer: "HTTP"
  },
  {
    question: "What is the purpose of a web server in web development?",
    options: [
      "To store and manage website files",
      "To handle client-side scripting",
      "To control the visual appearance of web pages",
      "To ensure secure data transmission over the web"
    ],
    answer: "To store and manage website files"
  },
  {
    question: "Which of the following is a popular open-source database management system used in web development?",
    options: [
      "MySQL",
      "Oracle",
      "SQL Server",
      "MongoDB"
    ],
    answer: "MySQL"
  },
  {
    question: "what is the purpose of a cookie in web development?",
    options: [
      "To store and retrieve user preferences and session information",
      "To control the visual appearance of web pages",
      "To handle client-side scripting",
      "To ensure secure data transmission over the web"
    ],
    answer: "To store and retrieve user preferences and session information"
  },
  {
    question: "Which programming language is used for server-side scripting in web development?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "PHP"
  },
  {
    question: "What is the purpose of a framework in web development?",
    options: [
      "To ensure secure data transmission over the web",
      "To control the visual appearance of web pages",
      "To provide a foundation and structure for developing web applications",
      "To handle client-side scripting"
    ],
    answer: "To provide a foundation and structure for developing web applications"
  },
  {
    question: "Which programming language is often used for building scalable and high-performance web applications?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js"
    ],
    answer: "Node.js"
  },
  {
    question: "What is the purpose of AJAX in web development?",
    options: [
      "To control the visual appearance of web pages",
      "To handle client-side scripting",
      "To ensure secure data transmission over the web",
      "To enable asynchronous communication between the client and server"
    ],
    answer: "To enable asynchronous communication between the client and server"
  },
  {
    question: "Which format is commonly used for data interchange between a web server and a web application?",
    options: [
      "HTML",
      "CSS",
      "JSON",
      "XML"
    ],
    answer: "JSON"
  },
  {
    question: "What is the purpose of a content management system (CMS) in web development?",
    options: [
      "To store and manage website files",
      "To control the visual appearance of web pages",
      "To handle client-side scripting",
      "To provide a user-friendly interface for managing website content"
    ],
    answer: "To provide a user-friendly interface for managing website content"
  },
  {
    question: "Which protocol is used for secure communication over the web?",
    options: [
      "HTTP",
      "FTP",
      "TCP/IP",
      "HTTPS"
    ],
    answer: "HTTPS"
  },
  {
    question: "What is the purpose of a RESTful API in web development?",
    options: [
      "To control the visual appearance of web pages",
      "To handle client-side scripting",
      "To ensure secure data transmission over the web",
      "To provide a standardized interface for accessing and manipulating web resources"
    ],
    answer: "To provide a standardized interface for accessing and manipulating web resources"
  },
  {
    question: "What is the purpose of responsive web design?",
    options: [
      "To control the visual appearance of web pages",
      "To handle client-side scripting",
      "To ensure secure data transmission over the web",
      "To create websites that adapt and display correctly on different devices and screen sizes"
    ],
    answer: "To create websites that adapt and display correctly on different devices and screen sizes"
  },
  {
    question: "What is the purpose of version control systems (VCS) in web development?",
    options: [
      "To control the visual appearance of web pages",
      "To handle client-side scripting",
      "To ensure secure data transmission over the web",
      "To track changes to source code and collaborate on web development projects"
    ],
    answer: "To track changes to source code and collaborate on web development projects"
  },
  {
    question: "Which web development concept refers to the practice of optimizing a website to rank higher in search engine results?",
    options: [
      "Accessibility",
      "Usability",
      "SEO (Search Engine Optimization)",
      "Performance optimization"
    ],
    answer: "SEO (Search Engine Optimization)"
  },
  {
    question: "Which technique is used to protect web applications against common security vulnerabilities, such as cross-site scripting (XSS) and SQL injection?",
    options: [
      "Encryption",
      "Authentication",
      "Authorization",
      "Web application security testing"
    ],
    answer: "Web application security testing"
  },
  {
    question: "Which server-side scripting language is commonly used for web development?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: "PHP"
  },
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

  
  
 