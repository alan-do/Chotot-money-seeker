import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Dashboard = () => {
    const [Data, setData] = useState(null);
    useEffect(() => {
        Axios.get("https://gateway.chotot.com/v1/public/ad-listing?region_v2=13000&cg=5000&w=1&limit=20&st=s,k&f=p")
            .then(res => {
                const resData = res.data.ads
                setData([resData])
                console.log(resData);
                // setData([resData    ])
                // console.log(Data);
            })
           
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            {Data}
        </div>
    )
}

export default Dashboard
