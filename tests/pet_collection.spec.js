const{test , request, expect} = require ('@playwright/test');

test('find by status API',async()=>
{
    const apicontext = await request.newContext();

    const get_pay = await apicontext.get('https://petstore.swagger.io/v2/pet/findByStatus?status=sold',
        {
            headers: 'accept: application/json'
        });

        const respon = await get_pay.json();
        const respo_con = JSON.stringify(respon);
        console.log(respo_con);

});

test('Add a new pet to the store',async({request})=>{

    const add_pet = await request.post("https://petstore.swagger.io/v2/pet",
        {
            data:
            {
                id: 2,
                category:
                {
                    id: 2,
                    name: "sumit"
                },
                name: "doggie",
                photoUrls: ["string"],
                tags: [
                    {
                        id:2,
                        name: "human"
                    }
                ],
                status: "sold"

            },
            headers: 'Content-Type: application/json'
        })

        const add_response = await add_pet.json();
        const resp_con_str = JSON.stringify(add_response);
        console.log(resp_con_str);
});

test('Upload an image', async({request})=>
{
    const up_request = await request.post("https://petstore.swagger.io/v2/pet/2/uploadImage",
        {
            multipart:{
                file:{
                 name: 'file',
                 mimeType: 'image/png',   
                 buffer: require('fs').readFileSync('F:\\GC Download\\Mademark x SpongeBob SquarePants - SpongeBob SquarePants Birthday Boy Funny Boys Birthday gift T-Shirt (1).png')   
                }
            },
            headers: 'accept: application/json'

        })

        const img_res = await up_request.json();
        // const ima_con = JSON.stringify(img_res);
        console.log(img_res);
});

test('update an existing pet',async({request})=>{

    const update_pet = await request.put("https://petstore.swagger.io/v2/pet",
        {
            data:
            {
                id: 2,
                category:
                {
                    id: 2,
                    name: "harshad"
                },
                name: "doggie",
                photoUrls: ["string"],
                tags: [
                    {
                        id:2,
                        name: "alien"
                    }
                ],
                status: "pending"

            },
            headers: 'Content-Type: application/json'
        })

        const update_response = await update_pet.json();
        const upresp_con_str = JSON.stringify(update_response);
        console.log(upresp_con_str);
});

test('find pet by ID', async({request})=>
{
    const get_pet_id = await request.get("https://petstore.swagger.io/v2/pet/1",
        {
            headers: 'accept: application/json'
        })

        const pet_id_res = await get_pet_id.json();
        const con_petid = JSON.stringify(pet_id_res);
        console.log(con_petid);
});

test('update the pet in the store with form data',async({request})=>{

    const petid_url = await request.post('https://petstore.swagger.io/v2/pet/1',
        {
            form:
            {
                name:'test',
                status:'Test'
            },
            headers: 'Content-Type: application/x-www-form-urlencoded',
        })

        const petres = await petid_url.json();
        const petcon = JSON.stringify(petres);
        console.log(petcon);
});     

test('delete a pet', async({request})=>
{
    const delpet = await request.delete('https://petstore.swagger.io/v2/pet/1',
        {
            headers: 'accept: application/json',
        })

        let contentType= delpet.headers()['content-type'];
        expect (delpet.status()).toBe(404);
let del_res;
        if(contentType && contentType.includes('application/json')){
           del_res = await delpet.json();  

        }else{
        del_res = await delpet.text();
        }
        // const del_con = JSON.stringify(del_res);
        console.log(del_res);
});