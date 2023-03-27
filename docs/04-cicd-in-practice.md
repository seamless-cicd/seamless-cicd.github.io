# CI/CD in Practice

## Balancing Safety and Velocity

Purpose of this section: Introduce the safety-velocity tradeoff to set the stage for how Seamless addresses this tradeoff.

Tradeoff: Increasing speed of delivery or deployment of an automated pipeline raises the risk of bad-quality code entering production.
Decisions impacting the speed-velocity tradeoff:
Auto-Merging: Auto-merging pull requests passing status checks increases ensures that developer code is integrated continuously into the main branch, but misses out on real code quality reviews
Diagram: Auto-Merging
Branching Strategy: Traditional feature branching (i.e. Github Flow) reduces the risk of pushing bad code to main, whereas trunk-based development encourages direct commits to main, improving speed of delivery
Diagram: Two branching strategies
Continuous Deployment: Embracing full continuous deployment without a pre-production environment can drastically reduce time between releases, but increases the chance of bugs making it to production
Diagram: Continuous deployment (copy from above?)
A CI/CD tool should accommodate these different workflow styles.
Transition: As we have seen, CI/CD pipelines vary in how continuously their system can integrate and deliver new code changes. Additionally, CI/CD pipelines take on varying forms to accommodate the testing, building, and deployment needs of different application architectures.
