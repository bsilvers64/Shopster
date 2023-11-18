import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductDetail from '../features/product-list/components/ProductDetail'


export default function ProductdetailsPage() {
  return (
    <div>
        <NavBar>
            <ProductDetail></ProductDetail>
        </NavBar>
    </div>
  )
}
