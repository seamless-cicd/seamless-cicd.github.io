# Runs

**Method:** `GET`

**Route:** `api/runs?serviceId=:serviceId`

**Response Body:**

```json
[
  {
    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3",
    "createdAt": "2023-03-20T17:17:13.760Z",
    "updatedAt": "2023-03-20T17:17:13.760Z",
    "startedAt": "2023-03-20T17:17:13.760Z",
    "endedAt": "2023-03-20T17:18:13.760Z",
    "duration": 6000,
    "commitHash": "ca4dfd3209de8d",
    "commitMessage": "feat: add notification feature",
    "committer": "Joe",
    "status": "SUCCESS",
    "triggerType": "MAIN",
    "serviceId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e2"
  }
]
```

---

**Method:** `GET`

**Route:** `api/runs/:runId`

**Response Body:**

```json
{
  "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3",
  "createdAt": "2023-03-20T17:17:13.760Z",
  "updatedAt": "2023-03-20T17:17:13.760Z",
  "startedAt": "2023-03-20T17:17:13.760Z",
  "endedAt": "2023-03-20T17:18:13.760Z",
  "duration": 6000,
  "commitHash": "ca4dfd3209de8d",
  "commitMessage": "feat: add notification feature",
  "committer": "Joe",
  "status": "SUCCESS",
  "triggerType": "MAIN",
  "serviceId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e2"
}
```

---

**Method:** `PATCH`

**Route:** `api/runs/:runId`

**Request Headers:**

- Content-Type: application/json

**Request Body:**

- Properties to be updated

```json
{
  "committer": "Sarah"
}
```

**Response Body:**

```json
{}
```

---

**Method:** `DELETE`

**Route:** `api/runs/:runId`

**Response Body:**

```json
{
  "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3",
  "createdAt": "2023-03-20T17:17:13.760Z",
  "updatedAt": "2023-03-20T17:17:13.760Z",
  "startedAt": "2023-03-20T17:17:13.760Z",
  "endedAt": "2023-03-20T17:17:14.760Z",
  "duration": 60,
  "commitHash": "ca4dfd3209de8d",
  "commitMessage": "feat: add notification feature",
  "committer": "Joe",
  "status": "SUCCESS",
  "triggerType": "MAIN",
  "serviceId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e2"
}
```

---

**Method:** `POST`

**Route:** `api/runs/:serviceId`

**Notes:**

- Creates a run and multiple placeholder stages

**Response Body:**

```json
{
  "id": "c6e690ba-d887-4976-bf5b-2ebd3a253bee",
  "createdAt": "2023-03-28T13:08:15.471Z",
  "updatedAt": "2023-03-28T13:08:15.471Z",
  "startedAt": "2023-03-28T13:08:15.471Z",
  "endedAt": null,
  "duration": null,
  "commitHash": "aade51f20cae9b",
  "commitMessage": "chore: refactor",
  "committer": "Jim",
  "status": "IDLE",
  "triggerType": "MAIN",
  "serviceId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e2"
}
```

---
