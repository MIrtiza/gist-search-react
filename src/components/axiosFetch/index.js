import axios from "axios";

async function GetData(){
    const res = await axios('https://docs.github.com/en/rest/gists');
    console.log(res.json)
    return await res.json()

}

GetData()

