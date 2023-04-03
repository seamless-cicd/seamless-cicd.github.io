---
title: Case Study
---

# Case Study

## 1. Introduction

Software engineering teams strive to integrate and deliver code changes quickly while keeping code high-quality and bug-free. To achieve this, many members of the software engineering community have embraced a philosophy and practice called CI/CD (continuous integration and delivery). CI/CD automates processes such as building and testing code, merging it into a shared repository, packaging it into a deployable artifact, and delivering it to production. As the application moves through these phases, confidence that it can safely be released into production grows.

Microservice architectures, however, present unique testing and deployment challenges. Unlike a single application with a single deployment pipeline, microservice architectures use individual deployment pipelines for individual services. Additionally, microservices must function properly within the context of the entire system before they are deployed to production. Adequate testing must be implemented to address these complexities.

This case study describes how we built **Seamless**, a self-hosted, open-source, cloud-native CI/CD solution tailored for microservices. Seamless offers a low-configuration platform for automating the testing, building, and deployment of containerized microservice applications.

## 2. Evolution of Deployment Processes

A deployment process is a sequence of steps for building, testing, and deploying software. Before running the deployment process, it is crucial to identify the source of the code that will be used. This is where version control systems come into play.

### 2.1 Version Control Systems

Version control systems such as Git enable developers to track changes, collaborate, and revert to previous versions of code.[^1] By creating branches, developers can isolate changes and work on new features independently, which are eventually merged into a central branch, commonly referred to as the main or master branch. This branch's code will be deployed to production, and this is where the deployment process kicks in.

While most deployment processes utilize version control systems, the path from version control to deployment can vary significantly, and it can be either manual or automatic.

### 2.2 Manual Deployments are Slow and Unreliable

Manual deployments are time-consuming. Firstly, there is usually a delay between the deployment request and the start of deployment procedures. The code ready for release remains in the version control system until the person or team responsible for deployment is notified.

Once the deployment process kicks off, teams must perform a long series of tasks to bring that code to production. This might include running scripts, adjusting configuration, checking code quality, and monitoring progress. When multiple teams are responsible for different parts of the deployment process, scheduling and coordination issues could cause delays. For example, TrueCar's release cycle involved Change Management tickets, which each team had to file eight days before deployment.

![Manual deployment delays](/img/case-study/manual-deployment-delays.svg)

Additionally, manual deployments are error-prone and can lead to unexpected bugs entering production. Humans are bad at performing rote activities, leading to errors when configuring servers, setting up environments, and performing manual tests. To make matters worse, team members often use different operating systems with different environmental configurations. By extension, the team members’ machines might be configured differently from production servers. Even if tests pass locally, they might not pass in production, introducing bugs into the system.

![Same app different results](/img/case-study/same-app-different-results.svg)

By defining deployment steps as part of a partially or fully automated pipeline, teams can achieve greater consistency and repeatability, resulting in faster and more reliable deployments.

### 2.3 Automated Deployments Improve Speed and Reliability

When a deployment process evolves from manual execution of scripts to an automated series of interconnected steps, it becomes known as a **deployment pipeline**. CI/CD (continuous integration and continuous delivery) is a methodology that embraces such automation. CI/CD pipelines provide superior guarantees that the deployment steps will be executed in a consistent and repeatable way, resulting in faster and more reliable deployments.

Automated deployments treat version control systems as more than just code storage solutions. Version control systems plug directly into deployment pipelines. Since version control systems are notified when developers make a commit, they can automatically trigger whatever automated system is responsible for deploying the code, which will carry out the deployment process. This eliminates delay between deployment requests and pipeline initiation. This is in stark contrast to manual deployments, where such delays are common.

![Manual vs automatic deployment](/img/case-study/manual-vs-automatic-deployment.svg)

Choosing to _fully_ automate deployments all the way through production can drastically shorten the time between release cycles, improving the rate at which QA and customers can provide feedback. For example, once TrueCar switched from a waterfall-style approach to a fully automated pipeline, they transitioned from a “burdensome weekly release cycle to deploying code up to 100 times per week”.

Automated deployments provide greater reliability by significantly reducing the possibility of human error. An automated pipeline is less prone to mistakes as it executes commands automatically, eliminating the need for human intervention.Quality checks, such as linting and testing, are integrated directly into the pipelines to ensure they are consistently performed with every deployment. Automated testing plays a crucial role in identifying bugs early on, allowing for incremental fixes to be made and preventing issues from accumulating.

## 3. CI/CD Pipelines

### 3.1 Stages of a CI/CD Pipeline

A deployment pipeline is essential for delivering code changes from development to production. Although there is no one-size-fits-all pipeline, the steps typically fall under one of the following four stages:

1. The **Source stage** connects the pipeline to a repository hosting platform such as GitHub. Specified triggers such as opening a pull request or merging into main will initiate the pipeline.
2. The **Testing stage** executes tests against the updated application to ensure code quality and verify that the code functions as expected. Standard forms of testing include static code analysis, unit testing, and integration testing. Static code analysis checks for stylistic issues and basic programmatic vulnerabilities; tools include ESLint and RuboCop. Unit testing verifies the functionality of code components individually; tools include Jest and RSpec. Integration testing confirms proper interactions between application components; tools include Cypress and Selenium.
3. The **Build stage** bundles the updated source code with its dependencies and compiles this into a single deployable artifact; tools include Webpack and Docker.
4. The **Deployment stage** deploys the built artifact to one or more environments. Typically, this includes a Staging (Pre-Production) environment used by QA teams to review the application and give approval, as well as a Production environment that is accessible to end users and represents the final outcome of the deployment process. Examples of deployment destinations are Amazon Web Services (AWS) Fargate and Google Cloud Run.

![Stages](/img/case-study/stages.svg)

Most deployments follow these stages, but the degree to which the pipeline is automated depends on the level of adoption of continuous integration, delivery, and deployment.

### 3.2 Continuous Integration, Delivery, and Deployment

CI/CD pipelines aim to fulfill three primary objectives, but it is rare for most pipelines to achieve all three completely. These objectives are continuous integration, continuous delivery, and continuous deployment.

Continuous integration is the practice of regularly merging code into the main branch of a central repository after passing a series of tests. Continuous delivery extends continuous integration by automatically preparing code changes for release, without necessarily releasing them. Continuous deployment is the hallmark of a well-established CI/CD system: executed builds are immediately released into production.

![CI/CD](/img/case-study/cicd-simplified.svg)

As companies adopt continuous integration, delivery, and deployment practices to different extents, they must consider a new tradeoff: how to balance safety with velocity.

## 4. Balancing Safety and Velocity

Introducing automation can result in an inevitable tradeoff. While faster code deployment shortens the development lifecycle, it may also increase the likelihood of bugs and errors. Conversely, prioritizing safety by running more tests and validations can reduce velocity.

Teams can make a number of CI/CD-related decisions to fine-tune the location of their deployment pipeline on this safety-velocity spectrum.

1. **Branching Strategy:** Traditional feature branching workflows such as GitHub Flow prioritize safety by reducing the risk of bad code being pushed to main. In contrast, trunk-based development prioritizes speed by encouraging direct commits to main.

![Branching strategies](/img/case-study/branching-strategies.svg)

2. **Merging Strategy:** Teams that adopt a feature branching workflow can automatically merge pull requests if tests pass or require a team member to manually perform the merge. While auto-merging can speed up the pipeline, it may lead to merging code that has not been adequately tested and reviewed if the auto-merge criteria are not carefully selected.

![Auto merge](/img/case-study/auto-merge.svg)

3. **Continuous Deployment:** Once code passes tests and is packaged into a build artifact, the pipeline deploys it straight to production without first using a pre-production environment. This enables teams to deliver the product to end users faster.

CI/CD tools can be configured to address the challenge of balancing safety and velocity. However, new challenges arise when CI/CD pipelines are used for different application architectures such as monoliths and microservices.

## 5. CI/CD for Monoliths and Microservices

A monolithic application is a single unit containing tightly-coupled components. Its business logic is housed in a single codebase, often a single repository. A microservices architecture consists of independent, loosely coupled services distributed across the network; it may use multiple repositories. Monolithic architecture has historically been the dominant approach to building applications, but this has shifted toward microservices out of a need for more agility and scalability. The differences in these architectures means that they use CI/CD pipelines in different ways, each accompanied by a distinct set of challenges.

### 5.1 Different Communication Methods

The way an application’s components communicate determines how tests are performed, which influences how a CI/CD pipeline’s Test stage is configured. All components of a monolith run within the same application, usually in a singular process. The application’s modules communicate via function calls, which are fast and reliable. In contrast, microservices communicate remotely via network calls (e.g. using HTTP), which can be slow and unreliable due to network issues. This means that CI/CD pipelines for microservices must offer more complex functionality to perform inter-service testing over the network.

![Monolith vs microservices](/img/case-study/monolith-microservices.svg)

### 5.2 Different Deployment Methods

For monoliths the entire codebase is compiled into a single executable that is deployed to production. In contrast, microservices are deployed as independent units. This is an advantage because small services are easier to update compared to a large monolith. Microservices are smaller and have fewer dependencies than a monolith, which speeds up deployment and reduces time-to-market. Furthermore, microservices are fully decoupled so each service can be deployed on its own schedule without impacting the others.

![Releasing microservices](/img/case-study/releasing-microservices.svg)

The ability to independently deploy and release microservices is a chief benefit of microservice architectures. However, it introduces the problem of needing to manage multiple pipelines.

## 6. CI/CD Challenges with Microservices

Implementing a CI/CD pipeline can differ quite a bit for monoliths and microservices. Let’s explore these differences and the specific challenges faced by microservice-oriented CI/CD pipelines.

### 6.1 Pipeline Management Challenges

#### The Many-Pipeline Problem

One approach to fully decoupling microservice deployments is to attach an individual CI/CD pipeline to each service. Since microservice teams are usually autonomous, it is common for teams to build their own pipelines. A benefit of this approach is that teams have full control and can customize all pipeline steps.

However, this many-pipeline approach adds complexity. Internal teams must now maintain numerous pipelines and their associated YAML files, scripts, and software versions. For example, when Expedia experienced an “explosion in the number of CI/CD pipelines”, the engineering teams found that they were “constantly needing to update” the pipelines for each microservice.

![Many pipelines](/img/case-study/many-pipelines.svg)

The problem becomes worse as microservice architectures scale. With so many pipelines in the system, teams often have a hard time keeping up with how to build, test, and deploy each microservice. This could make it challenging for them to make system-wide adjustments quickly, for example rolling back a buggy microservice that has broken the production system.

In order to ease the burden of managing CI/CD for tens or potentially hundreds of microservices, modularization techniques have emerged in the CI/CD space.

#### The Shared Segment Solution

One solution for modularizing CI/CD pipelines across microservices is to reuse the same sequence of steps, known as segments, for different microservice pipelines. These shared segments could come in the form of shell scripts, reusable Docker images, repositories or libraries, or YAML templates containing deployment-related logic.

However, there are some major downsides to this approach. For one, it still requires bootstrapping and maintaining an individual pipeline for each microservice. Secondly, the shared pipeline segments themselves need to be maintained.

![Shared segments](/img/case-study/shared-segments.svg)

#### The Single, Parameterized Pipeline Solution

In the many-pipeline approach, each microservice has its own dedicated CI/CD pipeline. However, these pipelines can be made more flexible and reusable by parameterizing them. For instance, instead of linking a pipeline to a single repository URL, testing command, and entry points to configuration files, these values can be configurable for each service. This means that adding an additional microservice to the pipeline is simply a matter of configuring these parameters.

![Shared pipeline](/img/case-study/shared-pipeline.svg)

While this single-pipeline approach can offer significant benefits in terms of efficiency and consistency, it may not be the best fit for every team. To make it work, there must be a certain degree of uniformity across microservices in terms of how they are compiled, packaged, tested, and deployed. For microservices with more heterogeneous deployment requirements, a different approach may be needed.

### 6.2 Microservice Testing Challenges

As a reminder, a monolithic application runs in its own process, meaning components need not communicate over the network to interact. Running tests that verify components or modules in an application interface properly together is merely a matter of making function calls within that process.

On the contrary, microservices each run in their own process and are distributed across the network. It follows that testing microservice interactions also requires making network calls.

#### Solutions for Testing Service Interactions

There are countless possible setups for testing the interactions between microservices, but some of the most common are:

- Test the service against a service spun up only for testing.
- Test the service against a production instance of another service.
- Run an entire pre-production environment to test the system as a whole.

![Microservice testing](/img/case-study/microservice-testing.svg)

There are advantages and disadvantages to each of these techniques, so a comprehensive CI/CD pipeline testing strategy will usually employ a combination of them.

Now that we’ve looked into what a CI/CD pipeline for microservices looks like, let’s walk through steps a development team might need to take to implement a CI/CD pipeline for microservices on their own.

## 7. Manually Building a CI/CD Pipeline for Microservices

Building a CI/CD pipeline from scratch can be a time-consuming and difficult endeavor, especially if we are designing it to handle the inherent complexities of a microservices architecture. Smaller teams with limited experience with cloud infrastructure and automation may struggle to architect a robust pipeline. They might also lack the staff and expertise to maintain and optimize it. The following is an example list of tasks for setting up a pipeline on AWS.

![Building a pipeline](/img/case-study/building-a-pipeline.svg)

Instead of investing significant time and effort into this DIY project, teams may choose to leverage existing CI/CD solutions to simplify the process.

## 8. Existing Solutions

### 8.1 DIY Solutions

There are many free open-source DIY CI/CD tools such as Jenkins and Tekton. These tools offer a high level of customization and configurability, which allows the tool to be tailored for close alignment to a specific use case.

Jenkins achieves this level of customization through integration with numerous available plugins. This allows users to add functionality to Jenkins and tailor it to their needs. These tools also allow for pipeline modularization and reusability. For example, Jenkins accomplishes pipeline modularization through shared libraries while Tekton allows for the reusability of different subcomponents, such as tasks and pipelines.

However, these tools also come with the disadvantage of having a steep learning curve due to their high configurability, which makes the setup procedure more complex. For Jenkins, users need to have knowledge of relevant plugins that are needed to achieve the desired functionality. For Tekton, experience with Kubernetes is required since it runs as an extension on a Kubernetes cluster.

### 8.2 Commercial Solutions

There are various commercial CI/CD pipelines available such as Codefresh, Semaphore, CircleCI, and AWS CodePipeline. Like the open-source tools, these solutions usually provide a high degree of customizability. For example, a YAML file might be used to configure the pipeline and fully customize the stages and their sequence.

Many commercial CI/CD solutions offer pipeline modularization and reusability. With CodeFresh, a single pipeline can be linked to multiple repositories, and the associated environment variables can be passed to the pipeline stages for use. Semaphore supports a monorepo approach, in which multiple applications, stored in the same repository, can each be linked to a variation of the same CI/CD pipeline.

Some commercial CI/CD solutions make testing microservice interactions easier. For example, Codefresh allows the user to specify “sidecar containers” as part of pipelines, using Docker Compose under the hood to provision an environment to run integration tests.

However, commercial solutions may not be suitable for all scenarios. They are not as extensible as open-source solutions and may lack sensible default settings, despite being generally easier to use.

### 8.3 A Solution for Our Use Case

We wanted to build a solution for a specific use case. The solution would be open source as well as fully self-hosted on a user’s AWS infrastructure allowing for complete control of code and data ownership. Next, the solution should be easy for users to set up and immediately integrate into their existing infrastructure. Here, the goal is to have low-configuration as well as sensible default settings that can meet the typical demands placed on a CI/CD pipeline. The solution should make managing deployment of multiple microservices easy through the use of a single, reusable, pipeline for every service. Lastly, the solution should provide options for testing microservice interactions.

![Comparison chart](/img/case-study/comparison-chart.svg)

## 9. Introducing Seamless

Seamless is an open-source CI/CD pipeline tool designed specifically for containerized microservices deployed to AWS Elastic Container Service (ECS) Fargate. It offers a user-friendly interface that is similar to many of the popular interfaces found in commercial solutions. Unlike other CI/CD pipelines, Seamless does not require user-defined scripting through a YAML file template for configuration. Instead, Seamless relies on a core set of default stages: Prepare, Code Quality, Unit Test, Build, Integration Test, Deploy to Staging, and Deploy to Production. This approach makes Seamless easy to use right out of the box. Through the interface, users can simply provide the necessary commands needed to execute each stage, allowing for a more intuitive configuration.

### 9.1 Setting Up Seamless

Using Seamless requires:

- An AWS account
- npm installed
- The AWS CLI installed and configured (Seamless will use the locally configured AWS account)
- The AWS CDK command line tool installed

To install Seamless, run `npm install -g seamless`. Running `seamless init` will guide the user through a series of inputs needed to deploy Seamless. After completing the initialization process, executing `seamless deploy` will provision Seamless's infrastructure on AWS and provide a URL to access the platform's dashboard. The user can then navigate to the dashboard and start using Seamless.

### 9.2 Using Seamless

The dashboard provides users with the ability to set up their pipeline and manage the associated services. When setting up the pipeline, the user will provide their ECS Cluster information for both production and staging environments. This allows for streamlined management of the pipeline and its services, providing users with a centralized location to manage all aspects of their deployment process.

### Connecting Services to the Pipeline

The dashboard provides users with the ability to set up their pipeline and manage the associated services. When setting up the pipeline, the user will provide their ECS Cluster information for both production and staging environments.

![pipeline gif](/img/gifs/pipeline.gif)

After setting up the pipeline, the user can proceed to create services that will utilize the pipeline. The service setup process collects all the necessary information to run the pipeline, verify code functionality, and promote it to production. This accessible interface replaces a YAML file (or equivalent configuration) in many current solutions.

![service gif](/img/gifs/service.gif)

### Running the Pipeline

To activate the pipeline, the user can select from several triggers, including Push on Main, Open Pull Request, and Synchronize Pull Request. When Push on Main is triggered, it executes the full pipeline, while the Pull Request Options trigger a partial pipeline execution. Additionally, there is an option to manually execute the through a rerun feature included on the services page. Each service can be individually rerun with a button click.

![Pipeline triggers](/img/case-study/pipeline-triggers.svg)

### Monitoring the Pipeline

Seamless provides real-time monitoring of pipeline execution. The UI displays live updates of both runs and stages, enabling users to stay informed of pipeline outcomes as runs and stages transition from “Idle” to “In Progress”, and ultimately to “Success” or “Failure”. Log data for each stage is updated live, making it easier to identify and troubleshoot errors when they occur.

**(GIF of live status updates)**

## 10. Seamless’s Architecture

To take advantage of the scalability and flexibility of cloud computing, we built Seamless’s infrastructure on AWS using the Cloud Development Kit (CDK).

When source code is updated, GitHub sends a webhook to start the pipeline. An Express.js backend running in an ECS Fargate cluster receives requests through an HTTP API Gateway. For each run, it retrieves pipeline data information from the PostgreSQL database (Relational Database Service — RDS) and sends it to the state machine (Step Function). The state machine executes each pipeline task in a container in ECS (EC2 launch type). All task containers mount a shared Docker volume on an Elastic File System (EFS) and can access the Elastic Container Registry for pushing or pulling required images. The updated source code is deployed to staging and production Fargate clusters.

During the pipeline run, the state machine sends status updates to the backend for storage in the database, and to users via the notification service. The task containers send logs to the backend to be inserted into the log cache (ElastiCache Redis). The backend sends both status updates and logs to the frontend dashboard via a WebSockets connection maintained by an API Gateway.

![Architecture](/img/case-study/architecture-simplified.svg)

## 11. Building the Core Pipeline Functionality

### 11.1 Modeling and Storing Data

Our data model comprises four fundamental entities: Pipelines, Services, Runs, and Stages. To embrace our single-pipeline, many services approach, we aimed to ensure our data model reflected this by creating a one-to-many relationship between Pipelines and Services. Additionally, each Service can have many Runs, and each Run can have many Stages.

Given our schema's fixed nature, we chose to store our data in PostgreSQL, a relational database. We rely on the Prisma ORM to simplify schema creation and migration, as well as data manipulation.

![ERD](/img/case-study/one-to-many.svg)

To accommodate the potentially high write speeds required to store logs generated by task containers, we sought a storage mechanism capable of supporting this. As a result, we decided to use a Redis cache (specifically, AWS ElastiCache) to meet our needs.

### 11.2 Managing Pipeline Execution

Pipelines execute tasks across multiple services, and we wanted a central orchestrator to manage the execution flow. We handled this using a state machine, which is a model for representing system behavior. It enabled us to define all potential states and the events that would trigger a transition from one state to another. One drawback is that defining states in advance can limit the ability to add new steps dynamically. As a result, the logic of the pipeline would remain unchanged from the beginning. We determined that this tradeoff was acceptable for our use case.

![State machine example](/img/case-study/state-machine-example.svg)

We chose AWS Step Functions (state machine service) for its integration with other AWS services, flow visualizations, and built-in functionality for error handling. Before and after each state, we added steps to report system status to our backend. We also evaluated the XState JavaScript library, but it lacked native AWS integrations and proved more complex to scale and persist state.

We considered job queues as an alternative to state machines, but decided against it due to the difficulty in passing data between jobs and ensuring only one stage executed at a time. Another alternative was an event-driven architecture where each task would call the next, and there would be no orchestrator. However, we felt that having a central place to manage state made it easier to understand and debug.

### 11.3 Running Tasks

For the actual tasks themselves, we use containers on ECS/EC2, Amazon’s Elastic Container Service. Containers provide consistent environments, so multiple pipeline runs will behave the same way. They are lightweight, containing only necessary dependencies, and are ephemeral and elastic, meaning that ECS spins them up and down automatically to match demand. This aligns with our use case as pipeline tasks are ephemeral, and their demand varies depending on the timing of the pipeline runs. However, there are some downsides including cold start delays, management of the underlying EC2 instances, and needing to configure a shared persistent data store.

![Task containers](/img/case-study/task-containers.svg)

We looked into alternative approaches, such as running containers on ECS Fargate, which would reduce management overhead, but it was unsuitable due to our need for Docker-in-Docker functionality. This is required for tasks such as building services as images, where Docker needs to run within our task runners. Another option was to run task logic directly on virtual machines, which would be easier to implement but would increase the management overhead and be less resource-efficient than using containers. It would also require configuring Amazon Machine Images and configuration management tools. Ultimately, we determined that using containers on ECS/EC2 was the most effective solution for our needs.

### 11.4 Automating Pipeline Runs

The pipeline runs automatically in response to changes in source code, and no manual intervention is required. During setup, the user chooses what triggers a run: Push to Main, Pull Request Open, and/or Pull Request Synchronize. Seamless creates a webhook in the repository. The backend uses the webhook payload to identify the trigger and initiate the appropriate pipeline process (partial or full run).

## 12. Improving Core Functionality

Once Seamless’s core functionality was working, we added features and optimizations to improve pipeline performance and user experience.

### 12.1 Sharing Data Among Containers

To minimize repeated work, we needed to ensure that multiple pipeline tasks could access the same files. For example, the Prepare Stage clones the source code so the Build Stage can package it into a Docker image later. To achieve this, we used the AWS EFS network file system, which is designed to be mounted to any number of EC2 instances or ECS containers. EFS is elastic and provides the necessary storage without needing to specify capacity in advance.

When each container is started, it is automatically mounted to a shared persistent Docker volume on EFS. The git commit hash serves as the directory name for the source code, which prevents naming conflicts and enables parallel pipeline execution. We also considered block storage, which had higher performance, but it was not suitable because it was not designed to connect to multiple containers.

![NFS](/img/case-study/nfs.svg)

### 12.2 Running Docker Commands Inside Docker Containers

Some Task Containers run Docker commands inside. The Build Stage runs `docker build`, and the Integration Test Stage runs `docker compose up`. To enable this, we considered the "Docker-in-Docker" (DinD) approach, where a Docker container runs another Docker daemon inside it. However, we chose not to use DinD due to security, storage, and build cache issues. Instead, we opted to bind-mount the container's Docker socket with the host machine's Docker socket, which grants access to the host's Docker daemon. Although this doesn't create a nested “parent-child” Docker environment, it allows us to run "sibling" containers at the top level and share the host's build cache when starting a container. Since we were only running temporary jobs that didn't require a nested environment, this approach was sufficient for our needs.

### 12.3 Integration Testing

Integration testing involves spinning up multiple containerized services to evaluate inter-service communication and functionality. To facilitate container management and networking, we used Docker Compose. This minimizes potential network faults and latency issues when testing service interactions. It also parallels the user's existing workflow if they are already using Docker Compose for local testing. We chose not to use a dedicated Fargate Cluster because it would have been slower and required additional infrastructure.

![Integration test](/img/case-study/integration-test.svg)

### 12.4 Manual Approval of Staging Environments

When integrating the state machine with other services, we had two primary patterns to choose from: Synchronous Jobs and Wait for a Callback Token. The synchronous model was suitable for most stages because each stage should automatically start after the previous one finishes. However, if the user disables Auto-Deploy, the state machine should pause so the developer can perform quality checks on the staging environment. This second scenario was a good use case for the Wait for a Callback Token pattern.

### 12.5 Rollbacks

Rollbacks are a critical feature because they allow teams to revert to a previous stable version in case of unexpected issues. To enable rollbacks, we tag all Docker images with the git commit hash. Our UI displays all possible rollback images, giving users a choice of rollback targets. Each service can be rolled back independently, minimizing the impact on the overall deployment.

### 12.6 Automatic Deployment of Fargate Clusters

To streamline the deployment process, we built a CDK feature that automatically deploys their Docker images to a Fargate Cluster and implements service discovery using AWS Service Connect. This approach helps users become productive quickly, as they only need to provide basic information about their service and its image. The feature can be used to set up both staging and production environments.

## 13. Beyond the Core Pipeline

### 13.1 Designing for Performance and Scale

#### Serverless Backend

Seamless’s backend is a containerized Express.js application running on Fargate, which will spin up as many containers as needed in response to demand. This ensures that it can handle a large number of incoming requests without sacrificing performance.

#### Parallel Execution of State Machines

Seamless enables parallel execution of state machines by utilizing separate instances of AWS Step Functions. This allows for concurrent execution, enabling different microservices to use the shared pipeline simultaneously. As a result, queuing pipeline executions becomes unnecessary and multiple microservices can be deployed at the same time.

### 13.2 Notifications

Seamless offers integration with AWS Simple Notification Service (SNS), allowing for notifications to be sent via email, Slack, and PagerDuty. This feature provides added convenience and flexibility for users, ensuring that they can stay up-to-date with pipeline execution and quickly address any issues that arise.

![Notifications](/img/case-study/status-updates-notifications.svg)

### 13.3 Logging

We developed a system to capture logs from all task containers, storing them in Redis with a 48-hour expiration time. It allows customization of the log payload and labels them using a ULID. We used sorted sets to insert logs in sorted order, eliminating the need for sorting when reading logs. The Dashboard shows users all logs for each stage, and any new logs are sent over WebSockets.

![Logging](/img/case-study/logs.svg)

### 13.4 Basic Security

#### OAuth

Seamless utilizes the OAuth flow, using Github’s OAuth implementation to authenticate users and provide authorization to Github. When a user logs in, they are directed to Github, at which point a temporary code is generated for the user. The user then passes that code to an authorization proxy on Seamless’s backend on subsequent requests. This token is used for a few purposes: to verify that the user is authenticated when they try to access any route on Seamless’s backend, to configure webhooks on the user’s behalf, and to clone the users’ repositories.

![OAuth flow](/img/case-study/oauth-flow.svg)

#### Private Subnets

Aside from our public-facing API gateway, most AWS resources in Seamless’s infrastructure are provisioned in private subnets so they can’t accept incoming network traffic. In case a developer needs to interact with resources in private subnets, such as their relational database or Redis cache, we deploy a bastion host that a developer can SSH into.

## 14. Future Work

Seamless could be improved to support more use cases and offer more functionality. These features include:
Expand deployment options beyond ECS Fargate
Support microservices not built using a Node.js runtime environment.

## References

[^1] https://www.cmswire.com/information-management/version-control-systems-the-link-between-development-and-deployment/
