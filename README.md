
# TodoApp

this app is a simple TodoApp with a .net core server and MongoDB database and front-end library react js


## Features

- add todos
- change todos status
- delete todo




## Installation
clone the repo and after add the following command

```bash
  cd .\TodoApp\
  yarn 
  yarn dev
```
To run the .net server use the start without debugging or with doesn't matter

add your own pass and database name 
```bash
   ConnectionString": "your Mongo connection"
```
## API Reference

#### Get all users

```https
  GET /api/User
```

#### Get User

```https
  GET /api/User/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of User to fetch |

### POST Todo

```https
  POST /api/User
```

#### Edit User

```https
  PUT /api/User/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of User to Edit |


#### Delete User

```https
  DELETE /api/User/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of User to Delete|


#### Delete Todo of user

```https
  DELETE /api/User/${id}/${todoId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of User to fetch |
| `TodoId`      | `string` | **Required**. Id of Todo to Delete |


#### Login

```https
  GET /api/User/login/${email}/${password} 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. email of User to fetch |
| `password`      | `string` | **Required**. password of User to fetch |

# TodoApp

 ### swaagger 
![api swaagger](https://user-images.githubusercontent.com/95965261/210238082-f008198b-3722-40ab-8740-8a8f3451cf93.png)
### Signin
![signin](https://user-images.githubusercontent.com/95965261/210238604-8421ec0d-51a9-40f1-a107-16f633411f39.png)
### SignUp 
![SignUp](https://user-images.githubusercontent.com/95965261/210238690-8b6612df-f475-4798-90b5-6678e0e006af.png)
### user interface 
![user interface](https://user-images.githubusercontent.com/95965261/206425885-35a8de1f-b80e-4685-a00c-f5777f47d051.png)
### add todo 
![add todo ](https://user-images.githubusercontent.com/95965261/206426180-3120f2fe-009e-4ee0-b0da-ac3ba23acb60.png)
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://walid-portfolio.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/walid-hassan-a744461a7/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Walidhassan111)

### [the first version](https://github.com/walidhassan1011/TodoApp) 
