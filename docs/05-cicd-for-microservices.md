# CI/CD for Microservices

## The Trend Toward Microservices

### The Monolith
A monolith contains all business logic within a single codebase
Monoliths do have some advantages:
Easier development: Easy to develop and debug
Easier testing: Testing is simple – just make a function call
But as companies grow, monoliths sometimes run into some challenges:
Scalability: You can’t scale individual components.
Deployment: A small change requires redeploying the whole thing, oftentimes slowing release cycles

### Microservices
Microservices are an application architecture that consists of independent, loosely coupled services.
Communication over the Network: Unlike a monolithic architecture, where components of the application communicate with function calls, microservices communicate with network calls.
Companies may migrate from monoliths to microservices to achieve faster release cycles, scalability, and agility.
Microservices have some advantages:
Scalability: Microservices can scale as individual components.
However, microservice architectures run into some challenges:
Difficulty testing: Testing requires interaction over the network
Diagram of monoliths vs microservices

## CI/CD Challenges with Microservices

### Maintaining Many Pipelines
Monoliths and Microservices are Deployed Differently
A monolithic deployment involves migrating the entire codebase to a production environment. The entire application is compiled into a single executable that can be deployed to server instances.
On the contrary, microservices are deployed as independent units. 
Generally, it is easier for teams to make quick updates to a microservice than to a monolith. As a result, achieving faster and more frequent deployments is a greater possibility.
Diagram: Releasing microservices at different times
Challenges of Independent Deployments
The ability to independently deploy and release microservices is a chief benefit of microservice architectures. However, it requires running an individual pipeline for each microservice, adding complexity to the deployment process.
Systems of distributed microservices end up requiring operations specialists for each microservice to maintain the pipelines.
Diagram: Many-to-many relationship between microservices and pipelines (Codefresh model)
Solutions for Modularizing Deployment Pipelines
In order to ease the management of CI/CD for potentially tens or hundreds of microservices, modularization techniques have emerged.
Shared Library Approach
One solution is to reuse libraries and plugins across multiple pipelines.
Downsides:
It still requires bootstrapping and maintaining an individual pipeline for each microservice.
The shared libraries themselves need to be maintained.
Diagram: Many-to-many relationship between microservices and pipelines, with shared libraries extracted (Codefresh model)
Parameterized Pipeline Approach
The aforementioned model assumes that CI/CD pipelines must be tightly coupled to an application. As a result, pipelines and applications have a one-to-one relationship.
Instead, if the pipeline is parametrized, it can be reused across multiple applications
Example “parameters”:
Repository URL
Testing commands
Deployment location
Downside: Reusing a pipeline across microservices requires microservices to be compiled, packaged, tested, and deployed in a similar manner. For microservices with contrasting deployment lifecycle needs, running a single pipeline for every microservice might be an inappropriate solution.
Diagram: One-to-many relationship between microservices and pipelines

### Running Tests Across Microservices

Microservices have Additional Testing Challenges
A monolithic application runs in a single process. Running tests that verify components or modules in an application interface properly together is merely a matter of making function calls within that process.
On the contrary, microservices each run in their own process and are distributed across the network.
Therefore, testing integrations either requires making calls across the network.
Testing over the Network
Since microservices are distributed, running tests that involve network calls can run into the following problems:
Additional latency can slow down tests.
Network disruptions can cause tests to fail.
Solutions for Testing Microservice Interactions
Mock Network Calls
Mock the API response (or an entire object) of the microservice the tested service depends on (contract testing).
Make Actual Network Calls to an External Service
Test your microservice against a test instance of another microservice.
Test your microservice against a production instance of another microservice.
Run an entire pre-production environment (useful for testing the whole system, end-to-end).
A comprehensive CI/CD pipeline testing strategy will usually involve a combination of these techniques.
Optional: U.S. Insurance company example

