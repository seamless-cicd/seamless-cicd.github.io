---
title: Case Study
---

# Case Study

## 1. Introduction

Seamless is an open-source, low-configuration CI/CD (Continuous Integration and Continuous Delivery/Deployment) framework that streamlines the development and deployment of containerized microservice applications. It automates the building, testing, and deployment of code, enabling developers to deliver software quickly and reliably. Seamless links multiple microservices to a single shared pipeline, eliminating the need to maintain a separate pipeline per service. Throughout this case study, we’ll explore how the deployment process has evolved over time, the role of CI/CD, and how we designed Seamless to support our desired use case.

## 2. Evolution of Deployment Processes

A **deployment process** refers to the steps required to make an application accessible to end users. Companies typically care about their deployment process because it impacts:

1. The speed at which software can be delivered to end users.
2. The confidence the company can have that high-quality, functional code is released.

The deployment process is initiated with a change in the source code and advances through building, testing, and deploying the code. Most modern companies manage source code through a version control system or VCS.

### Version Control Systems

**Version control systems (VCS)** such as Git enable developers to collaborate on a single, centralized repository.[^1] By creating branches, developers can work on changes independently. After a change is complete, it is typically merged into a central branch called main or master. This is where the deployment process begins.

While most deployment processes utilize a version control system, the path from version control to deployment can be either **manual** or **automatic**.

### Traditional Manual Deployment Processes

A manual deployment process consists of human-executed steps, like updating configuration files, copying files to production environments, and restarting servers.

In the past, manual deployments were common because automation tools were either unavailable or unsophisticated. Despite advances in automation, many companies still have outdated, manual deployment processes because of the time and effort required to adopt automation.

Two key factors prompted a movement away from manual deployment processes: speed and reliability.

#### Speed

One of the central issues with manual deployments is that they are time-consuming.

Firstly, there is usually a delay between the request for deployment and the start of the deployment. New commits sit idle in version control until the team responsible for deployment kicks off the deployment process. In some cases, developers must notify of new changes well before deployment dates. For example, TrueCar’s manual deployment strategy involved “Change Management tickets”, which each team had to file eight days before deployment.[^2]

![Manual deployment delay](/img/case-study/section-2/manual-deployment-delay.png)

Once the deployment process commences, sometimes a long series of manual tasks are required to bring the code to production. This includes running scripts, checking code quality, and monitoring progress.[^3] If there are multiple teams responsible for different parts of the deployment process, they need to coordinate their efforts, causing additional delays.

![Waterfall delays](/img/case-study/section-2/waterfall-delays.png)

#### Reliability

The second major pitfall of manual deployments is that they are error-prone. Firstly, humans are bad at performing rote activities in a consistent, reliable manner, leading to errors when configuring servers, setting up environments, and performing tests.

In addition to inconsistent administration of deployment steps, manual deployments are often run from inconsistent environments. Traditionally, manual deployments do not utilize a centralized system to build, test, and deploy developers' code. Instead, developers build and test applications on their local machines, each potentially having operating systems and environments that are different from one another and, by extension, the production environment.[^4] As a result, the application may function correctly when a developer tests it locally, but not in production.

![Without build server](/img/case-study/section-2/without-build-server.png)

Still, there are some useful aspects to traditional manual deployment processes. For example, requiring human intervention can be a useful safety check against deploying buggy or low-quality code.

### Automated Deployment Processes

Over time, many companies began to introduce automation into their deployment process. An automated deployment process is commonly called a deployment pipeline. A deployment pipeline runs in a repeatable, consistent manner, resulting in faster and more reliable deployments.

#### Speed

The automation starts with version control. In automated deployments, version control systems are more than code storage locations: they plug directly into deployment pipelines. When a commit is made to a repository, the version control system can automatically trigger the deployment pipeline. This eliminates delays between deployment requests and pipeline initiation.

![Manual vs automated deployment](/img/case-study/section-2/manual-vs-automated-deployment.png)

Deployment pipelines that fully automate all steps from source through production can drastically shorten the time between release cycles. For example, once TrueCar switched to a fully automated pipeline, they transitioned from a “burdensome weekly release cycle to deploying code up to 100 times per week”.[^5]

![Fast release cycle](/img/case-study/section-2/fast-release-cycle.png)

#### Reliability

Automated deployment processes also ensure greater reliability by eliminating the need for human intervention and integrating tests and quality checks directly into the pipeline. Unlike manual deployments, automated deployment tasks are executed consistently; there is no chance of “forgetting” to perform a task. For example, automating testing consistently ensures bugs are identified early on.

Moreover, deployment pipelines address the environmental inconsistency issues found in classic manual deployments. They typically use dedicated machines, like a **build server**, to automatically carry out pipeline jobs. This eliminates the "it works on my machine" syndrome that is all too common in traditional manual deployments. If the code doesn’t work on the build server, it won't make it to production.

![With build server](/img/case-study/section-2/with-build-server.png)

While automated deployment pipelines offer many advantages, transitioning from manual to automated deployments can be difficult. Resistance to change and extensive planning are common hurdles for many companies,[^6] and setting up deployment pipelines can be complex and demanding, as we’ll see later.

When introducing automation into their deployment processes, companies are typically striving to meet at least one of the following objectives: continuous integration, continuous delivery, and continuous deployment.

## 3. CI/CD Pipelines

As a whole, CI/CD refers to the process of _continuously_ integrating code changes into a central repository and moving them closer to production. CI/CD can be broken down into a few parts.

1. **Continuous Integration (CI)** is the practice of regularly merging code into the main branch of a central repository after the code is tested and built.
2. **Continuous Delivery (CD)** extends upon continuous integration by continuously taking the new build and preparing it for release.[^7]
3. **Continuous Deployment** is the hallmark of a well-established CI/CD system: builds are immediately released into production.[^8]

![Ci cd cd](/img/case-study/section-3/ci-cd-cd.png)

### Stages of a CI/CD Pipeline

A deployment pipeline is essential for delivering code changes from development to production. Although there is no one-size-fits-all pipeline, they are typically broken up into four stages:[^9]

1. The **Source** stage connects the pipeline to a repository hosting platform such as GitHub. Specified triggers such as opening a pull request or merging into main will initiate the pipeline.[^10]

2. The **Test** stage executes tests against the updated application to ensure code quality and functionality. Standard forms of testing include static code analysis, unit testing, and integration testing. Static code analysis checks for stylistic issues and basic programmatic vulnerabilities; tools include ESLint and RuboCop. Unit testing verifies the functionality of code components individually; tools include Jest and RSpec. Integration testing confirms proper interactions between application components; tools include Cypress and Selenium.

3. The **Build** stage bundles the updated source code with its dependencies into a single deployable artifact; tools include Webpack and Docker.

4. The **Deployment** stage pushes the built artifact to one or more environments. Typically, this includes a Staging (Pre-Production) environment used by QA teams to review the application and give approval, as well as a Production environment that is accessible to end users and represents the final outcome of the deployment process. Examples of deployment destinations are Amazon Web Services (AWS) Fargate and Google Cloud Run.

![Pipeline stages](/img/case-study/section-3/pipeline-stages.png)

Most deployment pipelines incorporate the stages outlined above. However, as companies adopt continuous integration, delivery, and deployment practices to different extents, they must consider a new tradeoff: how to balance safety with velocity.

## 4. Balancing Safety and Velocity

Practitioners of automated deployment usually need to make a tradeoff. A highly automated process gets code to production fast, but it may increase the likelihood of bugs entering production. On the flip side, a safer deployment process with more manual checks can reduce velocity. Teams can make a number of decisions to optimize the location of their deployment pipeline on a spectrum of balancing safety with velocity.

1. **Branching Strategy**: Traditional feature branching workflows such as Github Flow prioritize safety by reducing the risk of untested code being pushed to main. In contrast, trunk-based development prioritizes speed by encouraging direct commits to main.[^11] However, if a bug is introduced in a trunk-based development workflow, it may necessitate a rollback to restore the code to its previous state.

![Branching strategies](/img/case-study/section-4/branching-strategies.png)

2. **Merging Strategy**: Deployment workflows can either automate the merging of pull requests when it passes status checks or require a manual merging process by a team member. Although auto-merging can speed up the pipeline, it introduces the risk of merging code that has not undergone adequate testing and review.

![Auto merge](/img/case-study/section-4/auto-merge.png)

3. **Staging Environment**: Teams continuously deploy code to production or first deploy to a staging environment. In the case of continuous deployment, code that passes status checks is deployed straight to production without manual approval. This allows teams to deliver updates to end users quickly but increases the likelihood that production-time adjustments may need to be performed, such as rolling back to a previous deployment.

To summarize, companies can enhance the speed of their CI/CD pipeline by implementing a trunk-based development workflow, automating code merging, and continuously deploying code. Alternatively, they can improve deployment safety by following a feature-branch workflow, mandating human code reviews before merging, and deploying to a staging environment before deploying to production.

![Safety velocity spectrum](/img/case-study/section-4/safety-velocity-spectrum.png)

While CI/CD pipelines can be adapted to meet different goals in terms of speed and safety, they can also be adapted to support different application architectures, such as monoliths and microservices.

## 5. CI/CD for Monoliths and Microservices

There is no universal CI/CD pipeline that suits every scenario. To understand why CI/CD pipelines vary for monoliths and microservices, we must examine a few fundamental differences between the two.

A monolith is a single unit containing tightly-coupled components. A microservices architecture consists of independent, loosely coupled services distributed across the network. The monolith has historically been the dominant approach to building applications, but this has shifted toward microservices out of a need for agility and scalability. To understand how CI/CD pipelines differ for monoliths and microservices, we will first explore the differences in the architectures themselves.

### Different Deployment Methods

For monoliths, the entire codebase is packaged into a single executable file or directory that is deployed to production.[^12] In contrast, microservices are deployed as smaller, independent units.[^13] Due to their size, microservices can be packaged, tested, and deployed much more efficiently than a monolith, enabling small, frequent updates to be made. Furthermore, microservices are fully decoupled so each service can be deployed on its own schedule without impacting the others.

Consider three services: a Payment, Inventory, and Notification Service. Deployments of each service could take place on different days of the week:

![Releasing microservices](/img/case-study/section-5/releasing-microservices.png)

### Different Communication Methods

All components of a monolith run within the same application. As a result, the application’s modules **communicate with function calls**. In contrast, microservices **communicate remotely with network calls** (e.g. using HTTP). Unlike function calls, which are fast and reliable, network calls are susceptible to latency and unreliability. As we’ll discuss in a bit, these varying communication styles influence testing techniques for a CI/CD pipeline.

![Monolith microservices](/img/case-study/section-5/monolith-microservices.png)

The distinct traits of microservices have implications for their CI/CD pipelines. Two defining characteristics of microservice architectures are their independent deployments and network-based communication methods. These two characteristics introduce two corresponding challenges for microservice-based CI/CD pipelines: managing pipelines for many microservices and conducting inter-service testing across the network.

## 6. CI/CD Challenges with Microservices

In this section, we’ll explore the specific challenges faced by CI/CD pipelines for microservices.

### Pipeline Management Difficulties

#### The Many-Pipeline Problem

One approach to fully decoupling microservice deployments is to attach an individual CI/CD pipeline to each service. Since microservice teams are usually autonomous, it is common for teams to build their own pipelines. This gives each team full control of the pipeline and its stages.

![Many pipelines](/img/case-study/section-6/many-pipelines.png)

However, this many-pipeline approach adds complexity. There are multiple pipelines to maintain, along with their associated YAML files, scripts, and library versions. For example, when Expedia experienced an “explosion in the number of CI/CD pipelines”, the engineering teams found that they were “constantly needing to update” the pipelines for each microservice.[^14]

Furthermore, while microservices usually have decentralized teams, there still often exists a central team overseeing the pipelines.[^15] This central team may struggle to keep up with the specifics of building, testing, and deploying each microservice. Consequently, it can be challenging to quickly make system-wide adjustments, such as rolling back a buggy microservice that has caused issues in the production environment.[^16]

To ease the burden of managing deployment pipelines for tens or hundreds of microservices, modularization techniques have emerged.

#### The Shared Step Solution

One solution for modularizing CI/CD pipelines across microservices is to reuse steps for different microservice pipelines. These shared steps could come in the form of shell scripts, reusable Docker images, repositories or libraries, or YAML templates.

![Shared segments](/img/case-study/section-6/shared-segments.png)

This approach can help eliminate redundancies across pipelines, keeping them “DRY”.[^17] Shared libraries prove particularly useful for microservices that have distinct deployment requirements but still share some common elements like utility functions and customized steps.

However, there are some major downsides to this approach. For one, it still requires bootstrapping and maintaining an individual pipeline for each microservice, and the shared pipeline steps themselves need to be maintained. Furthermore, this approach frequently results in version conflicts, where a shared step may contain a library that is compatible with certain microservices but not with others.[^18]

Let’s look at a different strategy that mitigates some of these complications.

#### The Single, Parameterized Pipeline Solution

The former approach assumes that each microservice must have its own dedicated CI/CD pipeline. An alternative approach is to create a single, reusable, parameterized pipeline that is passed context whenever it is executed. This means that the pipeline is flexible: instead of linking pipelines to fixed repository URLs, testing commands, and configuration file entry points, these values can be configurable for each service. Adding a new microservice to the pipeline is simply a matter of filling in these parameters.[^19]

![Shared pipeline](/img/case-study/section-6/shared-pipeline.png)

While this single-pipeline approach can simplify building and maintaining CI/CD pipelines, it may not be the best fit for every team. To make it work, there must be a certain degree of uniformity in terms of how each service is built, tested, and deployed. For example, every microservice might need to be deployed to the same Kubernetes cluster. For microservices with more heterogeneous deployment requirements, a different approach may be needed.

Along with issues of managing CI/CD pipelines for microservices, there are also unique challenges with testing microservices.

### Microservice Testing Challenges

Testing microservices and their interactions is essential for ensuring that the system functions correctly, but it can be challenging due to their distributed nature.[^20] Unlike monolithic applications that run as a single entity, microservices are split across a network, so any tests that involve multiple services require making network calls. Consequently, testing strategies that were applied to monolithic applications may need to be reconsidered for microservices. Despite this challenge, it is crucial to test microservices in isolation, together, and as a whole system to ensure their proper functioning.

#### Solutions for Testing Microservices

There are several techniques available for testing at different levels of granularity. Here are some of the essential ones:[^21]

1. **Unit Testing** involves testing atomic units of a single service, such as its functions or classes, without relying on other services. However, it does not verify the interactions between services. Any services required for a unit test are mocked.

![Unit mock testing](/img/case-study/section-6/unit-mock-testing.png)

2. **Integration Testing** involves making network calls to test multiple services functioning together as a single subsystem. This technique may not be as precise as unit testing, but it can validate the larger behavior of whole subsystems. Integration Testing does not typically test the system as a whole.

3. **On-Demand Staging Environments** replicate production conditions and include all the microservices in the system. Although not a formal testing strategy, developers can use staging environments to test the system end-to-end, without getting bogged down in the details of each service and inter-service communications. However, staging environments can be resource-intensive.

![Integration vs staging testing](/img/case-study/section-6/integration-vs-staging-testing.png)

In practice, a comprehensive testing strategy will usually incorporate a combination of these testing strategies in order to increase confidence and test coverage.

Development teams using a manual deployment process for microservices might be looking to reap the benefits of automated deployments. One option development teams may consider is to build their own CI/CD pipeline

## 7. Manually Building a CI/CD Pipeline for Microservices

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Building-a-pipeline](/img/case-study/section-7/building-a-pipeline.png)

## 8. Existing Solutions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Comparison chart](/img/case-study/section-8/comparison-chart.png)

## 9. Introducing Seamless

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Cli commands](/img/case-study/section-9/cli-commands.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Pipeline gif](/img/gifs/pipeline.gif)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Service gif](/img/gifs/service.gif)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Pipeline triggers](/img/case-study/section-9/pipeline-triggers.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**(GIF of live status updates here)**

## 10. Seamless’s Architecture

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Architecture core simplified](/img/case-study/section-10/architecture-core-simplified.png)

## 11. Building the Core Pipeline Functionality

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Data model](/img/case-study/section-11/data-model.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Webhook](/img/case-study/section-11/webhook-wide.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Create webhook](/img/case-study/section-11/create-webhook.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Trigger partial vs full run](/img/case-study/section-11/trigger-partial-vs-full-run.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Architecture core simplified taskmanager](/img/case-study/section-11/architecture-core-simplified-taskmanager.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![State machine example](/img/case-study/section-11/state-machine-example.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Step function definition](/img/case-study/section-11/step-function-definition.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Architecture core simplified taskexecutors](/img/case-study/section-11/architecture-core-simplified-taskexecutors.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Build task](/img/case-study/section-11/build-task.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Container vs vm](/img/case-study/section-11/container-vs-vm.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Task containers](/img/case-study/section-11/task-containers.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Architecture core detailed](/img/case-study/section-11/architecture-core-detailed.png)

## 12. Improving Core Functionality

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Architecture improved simplified predeployment](/img/case-study/section-12/architecture-improved-simplified-predeployment.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Polling vs websockets](/img/case-study/section-12/polling-vs-websockets.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Efs](/img/case-study/section-12/efs.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Test vs prod environment](/img/case-study/section-12/test-vs-prod-environment.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Integration test](/img/case-study/section-12/integration-test.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Architecture improved simplified deployment](/img/case-study/section-12/architecture-improved-simplified-deployment.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Manual approval](/img/case-study/section-12/manual-approval.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Rollbacks](/img/case-study/section-12/rollbacks.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Architecture improved detailed](/img/case-study/section-12/architecture-improved-detailed.png)

## 13. Beyond the Core Pipeline

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Parallel execution](/img/case-study/section-13/parallel-execution.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Serverless backend](/img/case-study/section-13/serverless-backend.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Oauth flow](/img/case-study/section-13/oauth-flow.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Private subnet](/img/case-study/section-13/private-subnet.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Logging service](/img/case-study/section-13/logging-service.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Notifications](/img/case-study/section-13/notifications.png)

## 14. Future Work

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Architecture final](/img/case-study/section-14/architecture-final.png)

## References

[^1]: https://www.cmswire.com/information-management/version-control-systems-the-link-between-development-and-deployment/
[^2]: https://medium.com/driven-by-code/the-journey-to-ci-cd-b1872927c36b
[^3]: https://hosteddocs.ittoolbox.com/RAW14335USEN-1.pdf
[^4]: https://hosteddocs.ittoolbox.com/RAW14335USEN-1.pdf
[^5]: https://medium.com/driven-by-code/the-journey-to-ci-cd-b1872927c36b
[^6]: https://blog.technologent.com/avoid-these-5-ci/cd-pipeline-challenges
[^7]: https://semaphoreci.com/blog/cicd-pipeline
[^8]: https://services.google.com/fh/files/misc/2022_state_of_devops_report.pdf
[^9]: https://semaphoreci.com/blog/cicd-pipeline
[^10]: https://learn.microsoft.com/en-us/azure/architecture/example-scenario/apps/devops-dotnet-baseline
[^11]: https://www.split.io/wp-content/uploads/2022/07/OReilly_Continuous_Delivery.pdf&sa=D&source=docs&ust=1680661643888770&usg=AOvVaw32qMoYJHHq2EAyhO-rJgav
[^12]: https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith
[^13]: https://www.ibm.com/topics/microservices
[^14]: https://www.youtube.com/watch?v=TAP8vVbsBXQ&t=2490s
[^15]: https://techbeacon.com/enterprise-it/microservices-containers-operations-guess-whos-responsible-now
[^16]: https://www.youtube.com/watch?v=TAP8vVbsBXQ&t=2490s
[^17]: https://en.wikipedia.org/wiki/Don't_repeat_yourself
[^18]: https://www.youtube.com/watch?v=TAP8vVbsBXQ&t=2490s
[^19]: https://medium.com/containers-101/ci-cd-pipelines-for-microservices-ea33fb48dae0
[^20]: https://martinfowler.com/articles/microservice-testing/
[^21]: https://martinfowler.com/articles/microservice-testing/#testing-integration-introduction
[^22]: https://plugins.jenkins.io/
[^23]: https://www.nimblework.com/blog/tekton-reusable-pipelines/&sa=D&source=docs&ust=1680661643881597&usg=AOvVaw1UMq2KRT4LCJBSBu_MibY-
[^24]: https://www.codecapers.com.au/microservices-for-startups-1/
[^25]: https://www.perceptionsystem.com/blog/startups-with-micro-services-architecture/
[^26]: https://www.codecapers.com.au/microservices-for-startups-1/
[^27]: https://codefresh.io/docs/docs/pipelines/introduction-to-codefresh-pipelines/
