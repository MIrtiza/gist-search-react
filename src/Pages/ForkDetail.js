import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

export const ForkDetail = () => {
    const {id} = useParams();
    console.log(" ponka ",id)
    const [forkData, setForkData] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(forkData)
  

    useEffect(()=>{
        setLoading(true);
        axios({
            method: 'get',
            url: `https://api.github.com/gists/${id}/forks`,
          })
            .then(function (response) {
                setForkData(response.data);
                setLoading(false);
            });
    },[])

    const ShowData = ()=>{
        return(
            <>
                {
                    forkData?.map((val, ind) => {

                        return (
                            <div style={{ marginTop: "10px" }} key={ind}>
                                <img src={val.owner.avatar_url} width="20" style={{ borderRadius: "50%" }} alt="avtar" />
                                <span> {val.owner.login} </span> <br />
                                <strong>Fork time: {val.created_at}</strong>
                            </div>
                        )
                    })
                }
            </>
        )
    }

    const Error = ()=>{
        return(
            <h1 style={{color:"red"}}>
                No Data Found
            </h1>
        )
    }

    return (
        <section className='mainWrapper'>
            <div style={{display:"flex", justifyContent:"space-between", borderBottom: "1px solid black",paddingBottom: 30, marginBottom:30}}>
            <h1>Detail of fork</h1>
            <Link to="/">Back</Link>
            </div>
        
            <div>
                {forkData.length ? <ShowData /> : <Error />}
            
            </div>
        </section>
    )
}

export default ForkDetail