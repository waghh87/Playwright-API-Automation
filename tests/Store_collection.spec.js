const{test, request} = require('@playwright/test');

test('Place an Order for a pet',async({request})=>
{
    const peturl = await request.post("https://petstore.swagger.io/v2/store/order",
        {
            data:
            {
                id: 10,
                petId: 2,
                quantity: 100,
                shipdate: "2025-12-11T09:40:32.66Z",
                status: "On the Way",
                complete: "false"
            },
            headers: 'Content-Type: application/json'
        })

        const pet_response = await peturl.json();
        const pet_convert_str = JSON.stringify(pet_response);
        console.log(pet_convert_str);
});

test('Find purchase order by ID', async({request})=>{
    const orderid = await request.get("https://petstore.swagger.io/v2/store/order/10",
        {
            headers: 'accept: application/json'
        })
        const order_detail = await orderid.json();
        console.log(JSON.stringify(order_detail));

});

test('Return pet inventories by status', async({request})=>{
    const pet_invent_url = await request.get("https://petstore.swagger.io/v2/store/inventory",
    {
        headers: 'accept: application/json'
    })
    const invent_res = await pet_invent_url.json();
    const con_invent_res = JSON.stringify(invent_res);
    console.log(con_invent_res);
});

test('Delete purchase order by ID', async({request})=>{
    const del_URl = await request.delete("https://petstore.swagger.io/v2/store/order/10",
     {
        headers: 'accept: application/json'
    })
    const delresponse = await del_URl.json();
    const delconvertstr = JSON.stringify(delresponse);
    console.log(delconvertstr);
});