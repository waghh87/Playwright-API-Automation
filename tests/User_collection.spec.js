const { test, request, expect } = require('@playwright/test');

test('Creates list of users', async ({ request }) => {
    const user_payload = await request.post("https://petstore.swagger.io/v2/user/createWithList",
        {
            data: [
                {
                    id: 10,
                    username: "Harshad996",
                    firstName: "Harshad",
                    lastName: "Wagh",
                    email: "harshad.w@crestinfosystems.com",
                    password: "12345678",
                    phone: "8488975254",
                    userStatus: 1
                }
            ],
            headers: 'Content-Type: application/json'
        })

    const user_response = await user_payload.json();
    const msg = user_response.code;
    console.log(msg);

    expect(msg).toBe(200)

    if (msg === 200) {
        console.log("user successfully created and code:", msg);
    } else {
        console.log("Error Code:", msg);
    }

});

test('Get User by user name', async ({ request }) => {
    const get_username = await request.get("https://petstore.swagger.io/v2/user/Harshad996",
        {
            headers: 'accept: application/json'
        })

    // Safe response parsing: detect content-type and parse accordingly
    let contentType = get_username.headers()['content-type'];
    let repo;
    
    if (contentType && contentType.includes('application/json')) {
        repo = await get_username.json();
    } else {
        repo = await get_username.text();
    }

    console.log(repo);

});

test('Updated user', async ({ request }) => {
    /**
     * Update existing user by username.
     * NOTE: URL was corrected from invalid /v2/user/[] to /v2/user/Gotu96
     */
    const updated_user = await request.put("https://petstore.swagger.io/v2/user/Gotu96",
        {
            data: {            
            id: 20000,
            username: "Test",
            firstName: "Test",
            lastName: "Test",
            email: "test@gmail.com",
            password: "1234",
            phone: "9874563210",
            userStatus: 1
        },
        headers: 'accept: application/json'    
     })

    // Safe response parsing: fixed case sensitivity (content-Type → content-type)
    let contentType = updated_user.headers()['content-type'];
    let update_respnse;
    
    if(contentType && contentType.includes('application/json')){
        update_respnse = await updated_user.json();
    } else {
        update_respnse = await updated_user.text();
    }
    
    console.log(update_respnse);
});

test('Delete user', async({request})=>{
    const delete_user = await request.delete("https://petstore.swagger.io/v2/user/Harshad996",
        {
            headers: 'accept: application/json'
        })
    
    // Safe response parsing
    let contentType = delete_user.headers()['content-type'];
    let delete_response;
    
    if(contentType && contentType.includes('application/json')){
        delete_response = await delete_user.json();
    } else {
        delete_response = await delete_user.text();
    }
    
    console.log(delete_response);
});


// Create User
test('Create user', async({request})=>{

    const create_user = await request.post("https://petstore.swagger.io/v2/user",
        {
            data:
            {
                id: 9996,
                username: "Gotu96",
                firstName: "Gotu",
                lastName: "Wagh",
                email: "gotu@hotmail.com",
                password: "1234",
                phone: "1234567890",
                userStatus: 1
            },
            headers: 'accept: application/json'
        })

        const create_user_response = await create_user.json();
        console.log(create_user_response);
});

test('Log in user', async({request})=>{
    const login_user = await request.get("https://petstore.swagger.io/v2/user/login?username=9996&password=1234",
        {
            headers: 'accept: application/json'
        })
    const login_user_response = await login_user.json();
    console.log(login_user_response);

    expect(login_user_response.code).toBe(200);
});

test('User Log out', async({request})=>{
    const logout = await request.get("https://petstore.swagger.io/v2/user/logout",
        {

        })
    
    // Safe response parsing
    let contentType = logout.headers()['content-type'];
    let logoutresponse;
    
    if(contentType && contentType.includes('application/json')){
        logoutresponse = await logout.json();
    } else {
        logoutresponse = await logout.text();
    }
    
    console.log(logoutresponse);
});


test('Create user with Array', async({request})=>{
    const create_user_array = await request.post("https://petstore.swagger.io/v2/user/createWithArray",
        {
            data:
            [
                {
                    id: 110,
                    username: "test124",
                    firstName: "test",
                    lastName: "test",
                    email: "test@gmail.com",
                    password: "1234",
                    phone: "7894562310",
                    userStatus: 0                
                }
            ],
            headers: 'accept: application/json'
        })

        const Arrayresponse = await create_user_array.json();
        console.log(Arrayresponse);
});
