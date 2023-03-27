# Building a CI/CD Pipeline

Implementing a CI/CD pipeline from scratch is difficult, especially for smaller teams with less DevOps expertise.
Steps Involved:
Source: Provision a server watching for changes to the source code in your version control system. Identify triggers that should kick off the pipeline.
Test: Choose a continuous integration server to run static code analysis, unit tests, integration tests, and other tests. Install necessary plugins to perform tasks.
Build: Build the application source code on a build server (such as Jenkins). 
Deploy: Deliver and deploy the final artifact to a series of deployment environments, including a QA or staging environment and production environment.
Even after provisioning all these steps, you still might want to consider:
Parallelization: How to handle overlapping CI/CD pipeline executions
Rollbacks: How to quickly rollback problematic changes in production
If you are deploying microservices, you would then need to replicate this CI/CD pipeline for each service or link the same pipeline to every service.
