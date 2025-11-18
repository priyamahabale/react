import React, { useEffect, useState } from 'react'
import axios from 'axios'

function B() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((data) => setProducts(data.data))


    }, [])
    return (
        <div>
            {products && products.map((p, i) => {
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