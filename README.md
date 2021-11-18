### This is ReadME for auth-App


1. signup 

  URL : http://localhost:5000/customers/signup
  Request type : POST
  body:
        {
            "firstName" : "komal",
            "lastName" : "Singh",
            "email":"komal@gmail.com",
            "password":"qwerty",
            "status":"inactive"
        
        }

  Response :
        {
            "msg": "Customer has been signUp successfully",
            "status": 201,
            "customer": {
                "email": "komal@gmail.com"
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTk2M2Y0YmE3MDM5ZTA5NmM2Mzc0YTgiLCJmaXJzdE5hbWUiOiJrb21hbCIsImlhdCI6MTYzNzIzNjU1NSwiZXhwIjoxNjM3MzIyOTU1fQ.Pw5twJOhRJQ8on1dA_qeJIHlUh_PSxUxSuj0SAjsb1A"
        }


2. signIn

  URL : http://localhost:5000/customers/signin
  Request type : POST
  body:
        {  
        "email":"komal@gmail.com", 
        "password":"qwerty"
       }
        
  Response :

        {
          "cutomer": {
                    "customer": "komal@gmail.com"
             },
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTk2M2Y0YmE3MDM5ZTA5NmM2Mzc0YTgiLCJmaXJzdE5hbWUiOiJrb21hbCIsImlhdCI6MTYzNzIzNjU3MCwiZXhwIjoxNjM3MzIyOTcwfQ.ntVe4SKziyjtvmgU-n8AOy8fTDAxa8E3roaYRLIwlu4"
            }



Note : please copy and paste token in Header 
- select key as Authorization and value as Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTk2M2Y0YmE3MDM5ZTA5NmM2Mzc0YTgiLCJmaXJzdE5hbWUiOiJrb21hbCIsImlhdCI6MTYzNzIzNjU3MCwiZXhwIjoxNjM3MzIyOTcwfQ.ntVe4SKziyjtvmgU-n8AOy8fTDAxa8E3roaYRLIwlu4



3. Create a product

  URL : http://localhost:5000/products
  Request type : POST
  body:
        {
            "name" : "shirt",
            "description" : "Blue shirt",
            "status":"active"      
        }
        
  Response :

            {
            "msg": "Product has been created successfully",
            "status": 201,
            "productDetails": {
                "name": "shirt",
                "description": "Blue shirt",
                "status": "active",
                "createdBy": "61963f4ba7039e096c6374a8",
                "_id": "61963fe7a7039e096c6374ad",
                "createdAt": "2021-11-18T11:58:31.362Z",
                "updatedAt": "2021-11-18T11:58:31.362Z",
                "__v": 0
            }
        }



4. List all the products

  URL : http://localhost:5000/products
  Request type : GET
        
  Response :

           {
            "msg": "Here Are the List",
            "status": 200,
            "productList": [
                {
                    "_id": "61963fe7a7039e096c6374ad",
                    "name": "white shirt",
                    "description": "i Like white shirt more than blue shirt",
                    "status": "active",
                    "createdBy": "61963f4ba7039e096c6374a8",
                    "createdAt": "2021-11-18T11:58:31.362Z",
                    "updatedAt": "2021-11-18T12:32:47.508Z",
                    "__v": 0
                }
            ],
            "count": 1
        }



5. List a single product

  URL : http://localhost:5000/products/61963fe7a7039e096c6374ad
  Request type : GET
        
  Response :

          {
                "msg": "Product with id : 61963fe7a7039e096c6374ad found successfully",
                "status": 200,
                "productDetails": {
                    "_id": "61963fe7a7039e096c6374ad",
                    "name": "white shirt",
                    "description": "i Like white shirt more than blue shirt",
                    "status": "active",
                    "createdBy": "61963f4ba7039e096c6374a8",
                    "createdAt": "2021-11-18T11:58:31.362Z",
                    "updatedAt": "2021-11-18T12:33:47.076Z",
                    "__v": 0
                }
            }

6. Delete a single product

  URL : http://localhost:5000/products/61963fe7a7039e096c6374ad
  Request type : DELETE
        
  Response :

         {
                "msg": "Product with id : 61963fe7a7039e096c6374ad has been Deleted successfully",
                "status": 200
            }



7. Update a product

  URL : http://localhost:5000/products/61963fe7a7039e096c6374ad
  Request type : POST
  body:
        {
            "name":"white shirt",
            "description":"i Like white shirt more than blue shirt"

        }
        
  Response :

                {
            "msg": "Product with id : 61963fe7a7039e096c6374ad has been Updated successfully",
            "status": 200,
            "productDetails": {
                "_id": "61963fe7a7039e096c6374ad",
                "name": "white shirt",
                "description": "i Like white shirt more than blue shirt",
                "status": "active",
                "createdBy": "61963f4ba7039e096c6374a8",
                "createdAt": "2021-11-18T11:58:31.362Z",
                "updatedAt": "2021-11-18T12:33:47.076Z",
                "__v": 0
            }
        }
