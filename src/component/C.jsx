import React, { useEffect, useState } from 'react'
import axios from 'axios'

function B() {
    const [carts, setCarts] = useState(null);

    useEffect(() => {
        axios.get("https://dummyjson.com/carts")
            .then((data) => setCarts(data.data.carts))


    }, [])
    return (
        <div>
            {carts && carts.map((p, i) => {
                return <>
                    <p>
                        {p.id} {p.title} 
                    </p>
                    <img src={p.image} />
                    <hr/>
                </>
            })}
        </div>
    )
}

export default B