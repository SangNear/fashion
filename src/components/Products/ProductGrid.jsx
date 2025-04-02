import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({products}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`} className='block'>
                <div className='bg-white p-4 rounded-lg'>
                    <div className='w-full h-96 mb-4'>
                        <img src={product.images[0].url} alt="" className='w-full h-full object-cover'/>
                    </div>
                    <h3 className='text-sm mb-2'>{product.name}</h3>
                    <p className='text-gray-500 font-medium'>{product.price}</p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default ProductGrid