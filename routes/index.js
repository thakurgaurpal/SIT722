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
  { 'S.N': '11', 'Term': 'DevOps', 'Description': 'DevOps is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams. It emphasizes team empowerment, cross-team communication and collaboration, and technology automation.', 'Refrences': 'https://www.atlassian.com/devops' },
  { 'S.N': '12', 'Term': 'Cluster', 'Description': 'A cluster is a group of machines that work together to run workloads and provide high availability.', 'Refrences': 'https://docs.docker.com/glossary/' },
  { 'S.N': '13', 'Term': 'Docker Container', 'Description': 'A container is a runtime instance of a docker image. A Docker container consists of a Docker image, an execution environment, and a standard set of instructions', 'Refrences': 'https://docs.docker.com/engine/reference/commandline/container/' },
  { 'S.N': '14', 'Term': 'Docker hub', 'Description': 'The Docker Hub is a centralized resource for working with Docker and its components. It provides the following services: 1.A registry to host Docker images. 2. User authentication 3. Automated image builds and workflow tools such as build triggers and web hooks. 4. Integration with GitHub and Bitbucket 5. Security vulnerability scanning', 'Refrences': 'https://docs.docker.com/glossary/' },
  { 'S.N': '15', 'Term': 'Dockerfile', 'Description': 'A Dockerfile is a text document that contains all the commands you would normally execute manually in order to build a Docker image. Docker can build images automatically by reading the instructions from a Dockerfile.', 'Refrences': 'https://geekflare.com/dockerfile-tutorial/' },
  { 'S.N': '16', 'Term': 'Estimation in Docker', 'Description': 'In software development, an “estimate” is the evaluation of the effort necessary to carry out a given development task; this is most often expressed in terms of duration.', 'Refrences': 'https://www.agilealliance.org/agile101/agile-glossary/' },
  { 'S.N': '17', 'Term': 'Docker Registry', 'Description': 'A Registry is a hosted service containing repositories of images which responds to the Registry API. The default registry can be accessed using a browser at Docker Hub or using the docker search command. ', 'Refrences': 'https://docs.docker.com/glossary/' },
  { 'S.N': '18', 'Term': 'Iterative Development', 'Description': 'Agile projects are iterative insofar as they intentionally allow for “repeating” software development activities, and for potentially “revisiting” the same work products i.e-the phrase “planned rework” is sometimes used; refactoring is a good example.', 'Refrences': 'https://www.agilealliance.org/agile101/agile-glossary/' },
  { 'S.N': '19', 'Term': 'Retrospective', 'Description': 'The team meets regularly to reflect on the most significant events that occurred since the previous such meeting, and identify opportunities for improvement. ', 'Refrences': 'https://www.agilealliance.org/agile101/agile-glossary/' },
  { 'S.N': '20', 'Term': 'Docker Integration', 'Description': 'Integration (or “integrating”) refers to any efforts still required for a project team to deliver a product suitable for release as a functional whole. ', 'Refrences': 'https://www.agilealliance.org/agile101/agile-glossary/' },
  { 'S.N': '21', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '22', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '23', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '24', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '25', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '26', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '27', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '28', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '29', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '30', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '31', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
  { 'S.N': '', 'Term': '', 'Description': '', 'Refrences': '' },
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
