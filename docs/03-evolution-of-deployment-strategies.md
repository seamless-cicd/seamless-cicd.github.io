# Evolution of Deployment Strategies

## Manual Deployments
Manual deployment is a slow process that can cause delay, downtime, and inconsistent results
Problems with Manual Deployment
Slow: Repeating the deployment process manually for each code change takes a long time
Reasoning:
To begin deployment, the Development Team must notify the Operations Team that they are ready. There is a delay between this notification and when deployment actually starts.
Manual deployments are executed by following a long sequence of steps in a document, and repeating the deployment process manually for each code change takes a long time.
Example: Before CI/CD, TrueCar's release cycle involved Change Management tickets, which each team had to file eight days before deployment.
Diagram showing lengthiness of manual deployments
Unreliable: Manual deployments are error-prone and can lead to unexpected bugs entering production
Reasoning:
Human error resulting from performing multiple steps, such as configuring servers, setting up environments, and performing manual tests
Manual deployments tend to be inconsistent across development, testing, and operations teams.
Example: Test scripts run by the Development Team may pass, while those run by the Operations Team might fail.
Diagram for example
Transition: With an automated CI/CD pipeline, teams can eliminate these challenges, reduce delays, and ensure consistency in the deployment process, resulting in faster and higher-quality software delivery.

## Automated Deployment Pipelines

### What is CI/CD?
CI/CD is a DevOps methodology that focuses on automating and streamlining the software development lifecycle, resulting in faster delivery and higher quality.
Components of CI/CD

Continuous Integration: Code changes are integrated into the main branch and tested

Continuous Delivery: Code changes are built to a deployable artifact

Continuous Deployment: When embraced changes automatically deployed to production as final stage of pipeline

![Docusaurus logo](/img/docs/cicd.png)

Advantages of Automated Deployment
Fast: Automated deployment pipelines quicken the rate at which changes in source code reach a pre-production environment
Reasoning:
The delay between development and deployment is eliminated because pipeline execution is automatically triggered by changes in source code
Continuous Deployment goes a step further by shortening the time between release cycles
Example: TrueCar’s CI/CD pipeline helped them transition from a “burdensome weekly release cycle to deploying code up to 100 times per week”.
Reliable: Automated deployment pipelines reduce errors and low-quality code finding their way into production
Reasoning:
Quality gates, such as linting and testing, are built directly into CI/CD pipelines and run consistently each time
Faster bug fixes - automation identifies these early on and during small incremental changes so fix is easier
Removes human error - no missed steps
Immediate Feedback
Not reliant on a small number of manual deployment experts
Feedback is important for success of product and planning future releases
