define({ "api": [
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login",
    "name": "Login_user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>username of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>password of user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "responseObject",
            "description": "<p>User full info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"errorCode\": null,\n\"errorMessage\": null,\n\"responseObject\": {\n\"id\": 2,\n\"username\": \"parsa\",\n\"password\": \"7C222FB2927D828AF22F592134E8932480637C0D\",\n\"token\": \"923df645-94b6-4d52-a953-55b515576b09\",\n\"invitedBy\": 0,\n\"device\": null,\n\"phoneNumber\": null,\n\"gender\": null,\n\"createdAt\": \"2019-05-07T13:39:58.000+0000\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The Username or Password of the User was not match or correct.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserNotFound:",
          "content": "HTTP/1.1 200 OK\n{\n\"errorCode\": 404,\n\"errorMessage\": \"User not found\",\n\"responseObject\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/ir/codefather/game/controllers/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Register",
    "name": "Register_user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>username of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>password of user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "responseObject",
            "description": "<p>User full info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"errorCode\": null,\n\"errorMessage\": null,\n\"responseObject\": {\n\"id\": 3,\n\"username\": \"parsa\",\n\"password\": \"7C222FB2927D828AF22F592134E8932480637C0D\",\n\"token\": \"6b71215d-daea-4448-87d9-b9fbc1f8d843\",\n\"invitedBy\": 0,\n\"device\": null,\n\"phoneNumber\": null,\n\"gender\": null,\n\"createdAt\": null\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTaken",
            "description": "<p>The Username already exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserNameTaken:",
          "content": "HTTP/1.1 200 OK\n{\n\"errorCode\": 226,\n\"errorMessage\": \"Username had been taken\",\n\"responseObject\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/ir/codefather/game/controllers/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/auth/info",
    "title": "Get user info",
    "name": "User_info",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>token of specific user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "responseObject",
            "description": "<p>User full info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"errorCode\": null,\n\"errorMessage\": null,\n\"responseObject\": {\n\"id\": 3,\n\"username\": \"parsa\",\n\"password\": \"7C222FB2927D828AF22F592134E8932480637C0D\",\n\"token\": \"6b71215d-daea-4448-87d9-b9fbc1f8d843\",\n\"invitedBy\": 0,\n\"device\": null,\n\"phoneNumber\": null,\n\"gender\": null,\n\"createdAt\": null\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenInvalid",
            "description": "<p>your token isn't valid for any user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "TokenInvalid:",
          "content": "HTTP/1.1 403 FORBIDDEN\n{\n\"errorCode\": 403,\n\"errorMessage\": \"Token is invalid\",\n\"responseObject\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/ir/codefather/game/controllers/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/*",
    "title": "Failed validation sample",
    "group": "Validation",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>fail one of the parameters rule.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationFailed:",
          "content": "HTTP/1.1 400 Bad Request\n    {\n    \"errorCode\": 400,\n    \"errorMessage\": \"Validation Error\",\n    \"responseObject\": {\n    \"password\": \"size must be between 8 and 30\"\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/ir/codefather/game/handlers/ValidationExceptionHandler.java",
    "groupTitle": "Validation",
    "name": "Post"
  }
] });
