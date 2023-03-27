# Essential Stages of a Deployment Pipeline

A software deployment pipeline consists of several stages for delivering code changes from development to production.
Source: A change in the source code (i.e. a commit) triggers the start of the pipeline

- Testing: Tests are executed against the application to ensure code quality and verify its functionality is working as expected. Some forms of testing include:
  - Static code analysis: Code meets style standards
  - Unit testing: Code components function as desired as standalone units
  - Integration testing: Code components interact with each other as desired
- Build: The new source code, along with its dependencies, are bundled into a single deployable artifact.
- Deployment: The built artifact is deployed sequentially to one or more environments. Typically, there is a:
  - Staging (Pre-Production) Environment: Used by QA teams or a small group of testers to give a final sign-off.
  - Production Environment: The environment accessible to the end users