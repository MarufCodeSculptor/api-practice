console.log('json is working fine ');
let owner = {
    name: "John Doe",
    age: 35,
    job: {
      title: "Software Engineer",
      company: "TechCorp Inc.",
      salary: 100000,
      location: "San Francisco",
    },
    education: {
      degree: "Bachelor of Science in Computer Science",
      university: "University of California, Berkeley",
    },
    skills: ["JavaScript", "Python", "React", "Node.js", "SQL"],
    languages: ["English", "Spanish"],
    interests: ["Hiking", "Reading", "Traveling"],
  };
  

  
// JavaScript object notation  => Json


const stringified = JSON.stringify(owner);
console.log(stringified);
// expecting print result => 
/*  
{"name":"John Doe","age":35,"job":{"title":"Software Engineer","company":"TechCorp Inc.","salary":100000,"location":"San Francisco"},"education":{"degree":"Bachelor of Science in Computer Science","university":"University of California, Berkeley"},"skills":["JavaScript","Python","React","Node.js","SQL"],"languages":["English","Spanish"],"interests":["Hiking","Reading","Traveling"]}
*/

const expectingResult = { "name": "John Doe", "age": 35, "job": { "title": "Software Engineer", "company": "TechCorp Inc.", "salary": 100000, "location": "San Francisco" }, "education": { "degree": "Bachelor of Science in Computer Science", "university": "University of California, Berkeley" }, "skills": ["JavaScript", "Python", "React", "Node.js", "SQL"], "languages": ["English", "Spanish"], "interests": ["Hiking", "Reading", "Traveling"] };