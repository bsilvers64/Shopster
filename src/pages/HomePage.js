import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductList from '../features/product-list/components/ProductList'


function HomePage() {
  return (
    <div>
        <NavBar>
            <ProductList></ProductList>
        </NavBar>
    </div>
  )
}

export default HomePage