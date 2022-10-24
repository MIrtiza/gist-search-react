import { useState } from 'react'
import { ButtonPrimary } from "../components/ButtonPrimary"
import { InputForm } from "../components/InputForm"
import { Table } from "react-bootstrap"
import axios from 'axios'
import { Link } from 'react-router-dom'



export const Search = () => {
    const [input, setInput] = useState('');
    const [gistData, setGistData] = useState([]);
    console.log(gistData.files);
    // const unidata = gistData;
    // const files = gistData.data.files;
    // console.log(files);

    // const fileArr = [];
    // for (let file in files) {
    //   let language = files[file].language;
    //   //remove duplicate file types
    //   if (fileArr.indexOf(language) === -1) {
    //     fileArr.push(language);
    //   }
    // }

    // const noOfFiles = Object.keys(files).length;



    const handleSubmit = (e) => {

        e.preventDefault()

        axios.get(`https://api.github.com/users/${input}/gists`)
            .then(function (response) {
                // handle succes
                console.log(response.data);
                setGistData(response.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <section className='mainWrapper'>
            <form onSubmit={handleSubmit}>
                <InputForm
                    label="Search by Username"
                    text="Search history is saved by us"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <ButtonPrimary text="Search" />
            </form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sno#</th>
                        <th>Owner</th>
                        <th>Files type</th>
                        <th>Fork Url</th>
                        <th>Fork By</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gistData?.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> <div style={{ display: "flex", alignItems: "center" }}> <img src={data.owner.avatar_url} width="50" style={{ borderRadius: "50%", marginRight: 10 }} alt="avtar" />  {data.owner.login} </div> </td>
                                    <td>
                                        {/* {data.files.type} */}
                                        {Object.values(data.files).map((file, index) => {
                                            const fileArr = [];
                                            for (let myfile in file) {
                                                let language = file[myfile].language;
                                                //remove duplicate file types
                                                if (fileArr.indexOf(language) === -1) {
                                                    fileArr.push(language);
                                                }
                                                console.log(language)
                                            }
                                            
                                            return (
                                                <li key={index}>
                                                    <a href={file.raw_url} target="_blank" rel="noreferrer">
                                                        {/* {file.filename} <br /> */}
                                                        {file.type}
                                                    </a>
                                                </li>
                                            );
                                        })}

                                    </td>
                                    <td> <a href={data.forks_url} > {data.forks_url} </a> <br /> <span>id: {data.id} </span>  </td>
                                    <td>
                                        <Link to={`/detail/${data.id}`}

                                        >
                                            View Detail
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

        </section>
    )
}

export default Search