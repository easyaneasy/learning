import axios from "axios";

async function deletePost(){
    const config = {
        method: "delete",
        url: "https://dummyjson.com/products/1",
    };
    const res = await axios(config);
    const data = res.data;
    console.log(data);
}

deletePost();