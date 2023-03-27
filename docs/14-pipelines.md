# Pipelines

**Method:** GET

**Route:** api/pipelines

**Response Body:**

```json
[
  {
    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1",
    "createdAt": "2023-03-20T17:17:13.760Z",
    "updatedAt": "2023-03-20T17:17:13.760Z",
    "name": "Demo Pipeline",
    "awsEcsCluster": "Demo-Cluster-AX8J34",
    "awsEcsClusterStaging": "Demo-StagingCluster-kD5hKe3",
    "githubClientId": "83b3ac48a100cc6fb320",
    "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",
    "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd",
    "services": []
  }
]
```

---

**Method:** GET

**Route:** api/pipelines/:pipelineId

**Response Body:**

```json
{
  "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1",
  "createdAt": "2023-03-20T17:17:13.760Z",
  "updatedAt": "2023-03-20T17:17:13.760Z",
  "name": "Demo Pipeline",
  "awsEcsCluster": "Demo-Cluster-AX8J34",
  "awsEcsClusterStaging": "Demo-StagingCluster-kD5hKe3",
  "githubClientId": "83b3ac48a100cc6fb320",
  "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",
  "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd",
  "services": []
}
```

---

**Method:** POST

**Route:** api/pipelines

**Headers:**

- Content-Type: application/json

**Request Body:**

```json
{
  "name": "Demo Pipeline Two",
  "awsEcsCluster": "Demo-Cluster-Two-BCA8HT",
  "awsEcsClusterStaging": "Demo-StagingCluster-Two-4k8ca45",
  "githubClientId": "83b3ac48a100cc6fb320",
  "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",
  "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd"
}
```

**Response Body:**

```json
{
  "id": "1b22e175-08ac-4d78-b3bb-ab0dd4de5582",
  "createdAt": "2023-03-27T22:40:02.540Z",
  "updatedAt": "2023-03-27T22:40:02.540Z",
  "name": "Demo Pipeline Two",
  "awsEcsCluster": "Demo-Cluster-Two-BCA8HT",
  "awsEcsClusterStaging": "Demo-StagingCluster-Two-4k8ca45",
  "githubClientId": "83b3ac48a100cc6fb320",
  "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",
  "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd"
}
```

---

**Method:** DELETE

**Route:** api/pipelines/:pipelineId

**Response Body:**

```json
{}
```