# myindia-assignment
Task Description: 
Develop a scalable server-side application for an e-commerce platform, focusing on creating robust 
APIs, integrating with third-party services, and ensuring secure and efficient data handling.

1. ```Register: POST /api/v1/signup```

```
{
    "name":"saurabh",
    "email":"saurabh@gmail.com",
    "password":"saurabh"
}

```

2. ```Login: POST /api/v1/signin```

```
{
    "name":"saurabh",
    "email":"saurabh@gmail.com",
    "password":"saurabh"
}

```

3. ```get products: POST /api/v1/products```


4. ```create product: POST /api/v1/products```

```
{
    "name":"iphone",
    "description":"this is iphone 16",
    "price":50000 
}

Need to add authorization token in header x-access-token

```

5. ```delete product: POST /api/v1/products/:id```

```

Need to add authorization token in header x-access-token

```

6. ```order : POST /api/v1/orders ```

7. ```order : delete /api/v1/orders/:id ```

8. ```order : get /api/v1/orders/:id ```

9. ```payments : POST /api/v1/payments ```