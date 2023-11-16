
const express = require('express');
const cors=require('cors')
const app = express();
const port = 3000; 

app.use(cors())
app.use(express.json());

const dummy_data=[{
    "_id": {
      "$oid": "65395b07b33d8e338670a8be"
    },
    "postDetails": {
      "postTitle": "Full-Stack Developer Roadmap: Step-by-Step Guide 2023",
      "postDescription": "The demand for versatile and skilled professionals is increasing in today’s rapidly evolving technological landscape. ",
      "categories": [
        "web development",
        "full stack"
      ],
      "postImage": "https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png"
    },
    "user_id": "3d56c0e5-54f2-44d3-aa67-56380b368792",
    "content": [
      {
        "type": "Title",
        "content": "Full-Stack Developer Roadmap: Step-by-Step Guide 2023",
        "_id": {
          "$oid": "65395b07b33d8e338670a8bf"
        }
      },
      {
        "type": "Image",
        "content": {
          "imageUrl": "https://miro.medium.com/v2/resize:fit:640/format:webp/1*kel-_n0LaNpZstQ6Z0EvQw.jpeg",
          "imageCaption": ""
        },
        "_id": {
          "$oid": "65395b07b33d8e338670a8c0"
        }
      },
      {
        "type": "Description",
        "content": "The demand for versatile and skilled professionals is increasing in today’s rapidly evolving technological landscape.\n\nOne such role that has gained significant popularity is that of a full stack Developer.\n\nThis article will provide an in-depth understanding of what a full stack Developer is, why one should consider pursuing this career path, the essential skills required, a step-by-step guide to becoming a full stack Developer, examples of tools and technologies commonly used by full stack Developers, and a concluding note.\n",
        "_id": {
          "$oid": "65395b07b33d8e338670a8c1"
        }
      },
      {
        "type": "Subtitle",
        "content": "What is a Fullstack Developer?",
        "_id": {
          "$oid": "65395b07b33d8e338670a8c2"
        }
      },
      {
        "type": "Description",
        "content": "A Fullstack Developer is a professional with the skills and expertise to work on a web application’s front and back end.\n\nThey are proficient in handling server-side programming and database management and can create appealing user interfaces.\n\nA Fullstack Developer is essentially a jack-of-all-trades in web development, capable of working on every web application layer.",
        "_id": {
          "$oid": "65395b07b33d8e338670a8c3"
        }
      },
      {
        "type": "Subtitle",
        "content": "Skills Required for Fullstack Development",
        "_id": {
          "$oid": "65395b07b33d8e338670a8c4"
        }
      },
      {
        "type": "Description",
        "content": "Front-end Development: Proficiency in HTML, CSS, JavaScript, and front-end frameworks like React, Angular, or Vue.js is essential for creating responsive user interfaces.\n\nBack-end Development: Knowledge of server-side programming languages such as Python, Java, or Node.js, along with frameworks like Django, Spring, or Express, is necessary for implementing business logic and handling data.\n\nDatabases: Familiarity with database management systems like MySQL, PostgreSQL, or MongoDB is crucial for data storage and retrieval.\n\nVersion Control: Understanding version control systems like Git and knowledge of collaboration platforms like GitHub or Bitbucket is important for efficient teamwork.\n\nProblem-solving and Troubleshooting: Fullstack Developers must possess strong problem-solving skills to identify and fix issues at various levels of the application stack.",
        "_id": {
          "$oid": "65395b07b33d8e338670a8c5"
        }
      }
    ],
    "post_id": "c75c4a2d-fc5c-4ee9-8d6a-876c83069322",
    "postDate": {
      "$date": "2023-10-25T18:14:31.658Z"
    },
    "postTime": "23:44",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "653a61a0a1d7810a294388d5"
    },
    "postDetails": {
      "postTitle": "JSON is incredibly slow: Here’s What’s Faster!",
      "postDescription": "JSON’s popularity in the world of web development can’t be overstated. It has emerged as the de facto standard for data interchange for several compelling reasons",
      "categories": [
        "web development",
        "full stack"
      ],
      "postImage": "https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png"
    },
    "user_id": "3d56c0e5-54f2-44d3-aa67-56380b368792",
    "content": [
      {
        "type": "Title",
        "content": "JSON is incredibly slow: Here’s What’s Faster!",
        "_id": {
          "$oid": "653a61a0a1d7810a294388d6"
        }
      },
      {
        "type": "Image",
        "content": {
          "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*I2ObYjzqveyXzEe9QixMPw.png",
          "imageCaption": ""
        },
        "_id": {
          "$oid": "653a61a0a1d7810a294388d7"
        }
      },
      {
        "type": "Description",
        "content": "Yes, you heard that right! JSON, the ubiquitous format for data interchange in web development, might be slowing down your applications. In a world where speed and responsiveness are paramount, it’s crucial to examine the performance implications of JSON, a technology we often take for granted. In this blog, we’ll dive deep into the reasons why JSON can be a bottleneck in your applications and explore faster alternatives and optimization techniques to keep your apps running at their best.",
        "_id": {
          "$oid": "653a61a0a1d7810a294388d8"
        }
      },
      {
        "type": "Subtitle",
        "content": "What JSON Is and Why You Should Care?\n\n",
        "_id": {
          "$oid": "653a61a0a1d7810a294388d9"
        }
      },
      {
        "type": "Image",
        "content": {
          "imageUrl": "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*nst1MrNRpdpguS5m.png",
          "imageCaption": "JSON Tutorial | w3resource"
        },
        "_id": {
          "$oid": "653a61a0a1d7810a294388da"
        }
      },
      {
        "type": "Description",
        "content": "JSON, short for JavaScript Object Notation, is a lightweight data interchange format that has become the go-to choice for transmitting and storing data in web applications. Its simplicity and human-readable format make it easy for both humans and machines to work with. But why should you care about JSON in the context of your web development projects?\n\nJSON is the glue that holds together the data in your applications. It’s the language in which data is communicated between servers and clients, and it’s the format in which data is stored in databases and configuration files. In essence, JSON plays a pivotal role in modern web development.\n\nUnderstanding JSON and its nuances is not only a fundamental skill for any web developer but also crucial for optimizing your applications. As we delve deeper into this blog, you’ll discover why JSON can be a double-edged sword when it comes to performance and how this knowledge can make a significant difference in your development journey.",
        "_id": {
          "$oid": "653a61a0a1d7810a294388db"
        }
      },
      {
        "type": "Subtitle",
        "content": "The popularity of JSON and why people use it…",
        "_id": {
          "$oid": "653a61a0a1d7810a294388dc"
        }
      },
      {
        "type": "Description",
        "content": "JSON’s popularity in the world of web development can’t be overstated. It has emerged as the de facto standard for data interchange for several compelling reasons:",
        "_id": {
          "$oid": "653a61a0a1d7810a294388dd"
        }
      },
      {
        "type": "Description",
        "content": "Human-Readable Format: JSON uses a straightforward, text-based structure that is easy for both developers and non-developers to read and understand. This human-readable format enhances collaboration and simplifies debugging.\n\nLanguage Agnostic: JSON is not tied to any specific programming language. It’s a universal data format that can be parsed and generated by almost all modern programming languages, making it highly versatile.\n\nData Structure Consistency: JSON enforces a consistent structure for data, using key-value pairs, arrays, and nested objects. This consistency makes it predictable and easy to work with in various programming scenarios.\n\nBrowser Support: JSON is supported natively in web browsers, allowing web applications to communicate with servers seamlessly. This native support has contributed significantly to its adoption in web development.\n\nJSON APIs: Many web services and APIs provide data in JSON format by default. This has further cemented JSON’s role as the go-to choice for data interchange in web development.\n\nJSON Schema: Developers can use JSON Schema to define and validate the structure of JSON data, adding an extra layer of clarity and reliability to their applications.",
        "_id": {
          "$oid": "653a61a0a1d7810a294388de"
        }
      },
      {
        "type": "Description",
        "content": "Given these advantages, it’s no wonder that developers across the globe rely on JSON for their data interchange needs. However, as we explore deeper into the blog, we’ll uncover the potential performance challenges associated with JSON and how to address them effectively.",
        "_id": {
          "$oid": "653a61a0a1d7810a294388df"
        }
      },
      {
        "type": "Subtitle",
        "content": "The need for Speed",
        "_id": {
          "$oid": "653a61a0a1d7810a294388e0"
        }
      },
      {
        "type": "Subtitle",
        "content": "The Importance of Application Speed and Responsiveness",
        "_id": {
          "$oid": "653a61a0a1d7810a294388e1"
        }
      },
      {
        "type": "Description",
        "content": "In today’s fast-paced digital landscape, application speed and responsiveness are non-negotiable. Users expect instant access to information, swift interactions, and seamless experiences across web and mobile applications. This demand for speed is driven by several factors:\n\nUser Expectations: Users have grown accustomed to lightning-fast responses from their digital interactions. They don’t want to wait for web pages to load or apps to respond. A delay of even a few seconds can lead to frustration and abandonment.\n\nCompetitive Advantage: Speed can be a significant competitive advantage. Applications that respond quickly tend to attract and retain users more effectively than sluggish alternatives.\n\nSearch Engine Rankings: Search engines like Google consider page speed as a ranking factor. Faster-loading websites tend to rank higher in search results, leading to increased visibility and traffic.\n\nConversion Rates: E-commerce websites, in particular, are acutely aware of the impact of speed on conversion rates. Faster websites lead to higher conversion rates and, consequently, increased revenue.\n\nMobile Performance: With the proliferation of mobile devices, the need for speed has become even more critical. Mobile users often have limited bandwidth and processing power, making fast app performance a necessity.",
        "_id": {
          "$oid": "653a61a0a1d7810a294388e2"
        }
      }
    ],
    "post_id": "bc5eebda-8932-4af5-8991-c6cc1ec54442",
    "postDate": {
      "$date": "2023-10-26T12:54:56.715Z"
    },
    "postTime": "18:24",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "653e8e0ccb35a48d66dc3e11"
    },
    "postDetails": {
      "postTitle": "Best Tech Stack for Web App Development in 2023",
      "postDescription": "Discover the latest trending technologies in web application development and find advice on what tech stack is better to choose for your business growth. 🧠💪👨‍💻",
      "categories": [
        "full stack",
        "web development",
        "MERN",
        "REACT"
      ],
      "postImage": "https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png"
    },
    "user_id": "3d56c0e5-54f2-44d3-aa67-56380b368792",
    "content": [
      {
        "type": "Title",
        "content": "Best Tech Stack for Web App Development in 2023",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e12"
        }
      },
      {
        "type": "Subtitle",
        "content": "Discover the latest trending technologies in web application development and find advice on what tech stack is better to choose for your business growth. 🧠💪👨‍💻",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e13"
        }
      },
      null,
      {
        "type": "Description",
        "content": "In the ever-evolving landscape of web development, the tech stack you deploy isn’t just about coding — it’s about carving a path to success, as an ideal tech stack is creating digital experiences that users relish.\n\nResearch by Stanford University proves that as much as 75% of users judge a company’s credibility based on its web page design, and as much as 40% of visitors will leave a website if it takes longer than 3 seconds to load, shares BrowserStack.\n\nFively, as one of the leaders in custom software development and testing, always integrates the latest and most efficacious technologies into our bespoke solutions. Drawing from our vast experience and industry insights, we’ve curated this comprehensive guide to assist you in selecting among the most popular tech stacks in 2023 and choosing the optimal one for your web applications.\n\nJourney with us as we unveil the tapestry of choices that can elevate your web presence!",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e14"
        }
      },
      {
        "type": "Subtitle",
        "content": "What Is a Technology Stack?",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e15"
        }
      },
      {
        "type": "Description",
        "content": "As we explained in our recent article on the best tech stack for startups, the technology stack is the spinal column of your web application, an amalgamation of all software tools and technologies chosen to design, construct, and power your digital platform. Each segment of the tech stack performs its pivotal function, ensuring the web application resonates with efficiency, speed, and reliability.\n\nLet’s delve deeper into its intricacies and vital components.",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e16"
        }
      },
      {
        "type": "Subtitle",
        "content": "1. Front-end Tech Stack",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e17"
        }
      },
      {
        "type": "Description",
        "content": "This side of web development is what users interact with directly. It includes everything that users experience visually on the webpage: text, colors, styles, images, graphs, and more. Typically made up of HTML, CSS, and JavaScript, with frameworks like React or Vue.js enhancing interactivity.",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e18"
        }
      },
      {
        "type": "Subtitle",
        "content": "2. Back-end Tech Stack",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e19"
        }
      },
      {
        "type": "Description",
        "content": "The underpinnings of a web application lie in its backend, often referred to as the server side of the tech stack. It’s analogous to the backstage crew in a theater performance. While they might remain out of sight, their pivotal roles ensure the show runs without a hitch.",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e1a"
        }
      },
      {
        "type": "Subtitle",
        "content": "Best Sofware Development Tech Stacks",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e1b"
        }
      },
      {
        "type": "Description",
        "content": "As we stand in 2023, several technology stacks are at the forefront of the tech scene. Here’s a deep dive into some of the most common and popular tech stacks, complete with their advantages and disadvantages:",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e1c"
        }
      },
      {
        "type": "Description",
        "content": "Historically a linchpin in the tech stack realm, LAMP continues to be a favorite, especially for those valuing cost-efficiency, flexibility, and steady performance.\n\n+ Comprising Linux, Apache, MySQL, and PHP/Perl/Python, LAMP is open-source, cost-friendly, and boasts broad community backing. Users enjoy the flexibility it offers, particularly in selecting an operating system.\n\n- It may falter with ultra-scalable applications. Although PHP is versatile, it’s sometimes viewed as less avant-garde compared to emergent languages.\n\nExample: WordPress, a notable name in the CMS landscape, operates on the LAMP stack.",
        "_id": {
          "$oid": "653e8e0ccb35a48d66dc3e1d"
        }
      }
    ],
    "post_id": "62c4eddd-4c11-4572-b103-e06955ec3703",
    "postDate": {
      "$date": "2023-10-29T16:53:32.824Z"
    },
    "postTime": "22:23",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "653fddd6b3b434c992363ab0"
    },
    "postDetails": {
      "postTitle": "TEch",
      "postDescription": "terdgs",
      "categories": [
        "Ethics "
      ],
      "postImage": "https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png"
    },
    "user_id": "39eaeee7-64ee-4bab-9d1d-7064df0472e4",
    "content": [
      {
        "type": "Title",
        "content": "Web Dev",
        "_id": {
          "$oid": "653fddd6b3b434c992363ab1"
        }
      },
      {
        "type": "Subtitle",
        "content": "Tech",
        "_id": {
          "$oid": "653fddd6b3b434c992363ab2"
        }
      }
    ],
    "post_id": "bb6bdc6f-0f65-4259-a7df-68091e62545f",
    "postDate": {
      "$date": "2023-10-30T16:46:14.404Z"
    },
    "postTime": "22:16",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "654efa312855febc44042c26"
    },
    "postDetails": {
      "postTitle": "Understanding Design Patterns In React",
      "postDescription": "React is arguably the most popular JavaScript library for building user interfaces and one reason for this is its unopinionated nature. The reusable components, great developer tools, and extensive ecosystem are some of the most loved features of React.",
      "categories": [
        "MERN",
        "REACT",
        "web development"
      ],
      "postImage": "https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png"
    },
    "user_id": "3d56c0e5-54f2-44d3-aa67-56380b368792",
    "content": [
      {
        "type": "Title",
        "content": "Understanding Design Patterns In React",
        "_id": {
          "$oid": "654efa312855febc44042c27"
        }
      },
      {
        "type": "Description",
        "content": "React is arguably the most popular JavaScript library for building user interfaces and one reason for this is its unopinionated nature. The reusable components, great developer tools, and extensive ecosystem are some of the most loved features of React. However, in addition to its features and community support, React delivers and implements some widely used design patterns to ease the development process even further.\n\nBefore delving into the details of React’s design patterns, we should understand what they are and why they are needed. Simply put, design patterns are repeatable solutions to commonly occurring development problems. They serve as a basic template upon which you can build up any functionality according to the given requirements while following the best practices. We can use them to save development time and reduce coding efforts since they serve as standard terminology and pre-tested solutions to known problems.\n\nLet’s get started!",
        "_id": {
          "$oid": "654efa312855febc44042c28"
        }
      },
      {
        "type": "Subtitle",
        "content": "Conditional Rendering",
        "_id": {
          "$oid": "654efa312855febc44042c29"
        }
      },
      {
        "type": "Description",
        "content": "This is undoubtedly one of the most basic and widely used patterns with React components (that perhaps doesn’t need much introduction either 😅). Quite frequently the need arises to render or not render a certain JSX code based on a certain condition. This is achieved through conditional rendering. As an example, we’d want to show a button that says “Log In” for unauthenticated users and Log Out for signed-in users.",
        "_id": {
          "$oid": "654efa312855febc44042c2a"
        }
      },
      {
        "type": "Image",
        "content": {
          "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ecnrSD3vZFVtRcU1.jpg",
          "imageCaption": "Conditional Rendering"
        },
        "_id": {
          "$oid": "654efa312855febc44042c2b"
        }
      },
      {
        "type": "Subtitle",
        "content": "Custom Hooks",
        "_id": {
          "$oid": "654efa312855febc44042c2c"
        }
      },
      {
        "type": "Description",
        "content": "React hooks have proven to be a revolutionary introduction in conjunction with functional components. They provide a simple and direct way to access common React features such as props, state, context, refs, and lifecycle. We may be content using the traditional hooks but there’s more. Let’s understand the benefit of having custom hooks introduced in the mix. Think of a piece of logic that you wrote for a component, you possibly used basic hooks like useEffect & useState. After some time, the same logic needs to be used in another new component. While copying may feel like the quickest & easiest way to do that, custom hooks to the same effect are way more fun (😉). Extracting commonly needed logic in a hook makes for clean code & increases reusability & of course maintainability.",
        "_id": {
          "$oid": "654efa312855febc44042c2d"
        }
      },
      {
        "type": "Image",
        "content": {
          "imageUrl": "https://miro.medium.com/v2/format:webp/1*12rLQ2fkPvG76qUF8xH6OQ.png",
          "imageCaption": "React hooks"
        },
        "_id": {
          "$oid": "654efa312855febc44042c2e"
        }
      },
      {
        "type": "Description",
        "content": "Some other possible use cases that come to mind for custom hooks could be:",
        "_id": {
          "$oid": "654efa312855febc44042c2f"
        }
      },
      {
        "type": "Bullet",
        "content": "• Getting window dimensions\n•  Accessing & setting local storage\n•  Toggling between boolean states, etc.",
        "_id": {
          "$oid": "654efa312855febc44042c30"
        }
      },
      {
        "type": "Subtitle",
        "content": "Provider Pattern",
        "_id": {
          "$oid": "654efa312855febc44042c31"
        }
      },
      {
        "type": "Description",
        "content": "One major problem faced by React developers is Prop drilling. Prop drilling is a scenario in which data (props) is passed down to different components until it gets to the component where the prop is needed. This easily becomes a problem when some data needs to be passed to one or more nested components deep down in the component tree since a seemingly unnecessary chain of data passing is established.\n\nThis is where the Provider pattern comes to the aid. Provider pattern allows us to store data (global or shareable in nature) in a central location. The Context Provider/Store can then pass this data to any component that needs it directly without drilling props. React’s built-in Context API is based on this approach. Some other libraries that use this pattern include react-redux, flux, MobX, etc.\n",
        "_id": {
          "$oid": "654efa312855febc44042c32"
        }
      },
      {
        "type": "Image",
        "content": {
          "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k3SLdX2WDbzCpmOSzA5Clw.png",
          "imageCaption": "providers"
        },
        "_id": {
          "$oid": "654efa312855febc44042c33"
        }
      },
      {
        "type": "Description",
        "content": "Isn’t this better! Other possible usages for Provider pattern could be:",
        "_id": {
          "$oid": "654efa312855febc44042c34"
        }
      },
      {
        "type": "Bullet",
        "content": "• Authentication state management\n• Managing locale/language selection preferences, etc.",
        "_id": {
          "$oid": "654efa312855febc44042c35"
        }
      }
    ],
    "post_id": "5ce76667-8803-485f-99b6-601b750da4e7",
    "postDate": {
      "$date": "2023-11-11T03:51:13.367Z"
    },
    "postTime": "09:21",
    "__v": 0
  }]
app.get('/', (req, res) => {
    console.log("hello")
  res.send(dummy_data)
});

app.get('/blogs/:id', (req, res) => {
    console.log("hello")
    const postId = req.params.id; 
  
    const post = dummy_data.find(post => post.post_id === postId);
  
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
  
    res.json(post);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

