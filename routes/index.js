var express = require('express');
var router = express.Router();
const nameList = [
  { 'S.N': '1', 'Term': 'Heroku', 'Description': 'Heroku is a cloud based platform as a service that enables developers to build, run and manage applications written in different languages like Java, Python, Nod.js, Ruby, PHP etc', 'Refrences': 'https://devcenter.heroku.com/articles/how-heroku-works' },
  { 'S.N': '2', 'Term': 'Microservices', 'Description': 'Microservices and its architecture pattern language is a collection of patterns for applying the microservice architecture it’s an approach to application development in which a large application is built from modular components or services. Each module supports a specific task or business goal and uses a simple, well-defined interface, such as an application programming interface (API), to communicate with other sets of services.', 'Refrences': 'https://www.techtarget.com/searchapparchitecture/definition/microservices' },
  { 'S.N': '3', 'Term': 'Kubernetes', 'Description': 'Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarativeconfiguration and automation. It has a large, rapidly growing ecosystem', 'Refrences': 'https://kubernetes.io/docs/concepts/overview/' },
  { 'S.N': '4', 'Term': 'Docker', 'Description': 'Dockeris an open source platform that enables developers to build, deploy, run, update and manage containers—standardized, executable components that combine application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.', 'Refrences': 'https://www.ibm.com/topics/docker' },
  { 'S.N': '5', 'Term': 'Agile Methodology', 'Description': 'Agile methodologies are approaches to product development that are aligned with the values and principles described in the Agile Manifesto for software development. Agile methodologies aim to deliver the right product, with incremental and frequent delivery of small chunks of functionality, through small cross-functional self-organizing teams, enabling frequent customer feedback and course correction as needed. ', 'Refrences': 'https://www.nimblework.com/agile/agile-methodology/' },
  { 'S.N': '6', 'Term': 'Command line interface (CLI)', 'Description': 'CLI is a text-based user interface (UI) used to run programs, manage computer files and interact with the computer.', 'Refrences': 'https://www.comms-express.com/infozone/article/command-line-interface/' },
  { 'S.N': '7', 'Term': 'Scrum', 'Description': 'Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of thehighest possible value', 'Refrences': 'https://www.scrum.org/learning-series/what-is-scrum' },
  { 'S.N': '8', 'Term': 'Waterfall Model', 'Description': 'The Waterfall Model was the first Process Model to be introduced. It is also referred to as a linear-sequential life cycle model. It is very simple to understand and use. In a waterfall model, each phase must be completed before the next phase can begin and there is no overlapping in the phases. ', 'Refrences': 'https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm' },
  { 'S.N': '9', 'Term': 'Automation tool', 'Description': 'Automation tool that helps teams and organizations automate their software testing needs, reducing the need for human intervention and thus achieving greater speed, reliability, and efficiency', 'Refrences': 'https://www.automationanywhere.com/rpa/automation-software' },
  { 'S.N': '10', 'Term': 'Product Ecosystem', 'Description': 'The product ecosystemis based on the concept of a biological ecosystem. In the natural world, an ecosystem is a community of organisms—plants and animals—living within a shared environment that connects all the components of the community via nutrient cycles and energy flows', 'Refrences': 'https://www.appcues.com/blog/software-product-tool-platform-ecosystem' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': ' ' },
  {  'S.N': '' },
  {  'Term': '' },
  {  'Description': '' },
  {  'Refrences':''},
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'DevOps Glossary', sub: '', names: nameList });
});

module.exports = router;
