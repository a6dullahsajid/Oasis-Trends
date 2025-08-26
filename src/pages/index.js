import React, { useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Hero from '../components/hero'
import Services from '../components/services'
import Products from '../components/products'
import About from '../components/about'
import Footer from '../components/footer'
import Contact from '../components/contact'

import { appData } from '../data/app-data'

const IndexPage = () => {
  const [currentFilter, setCurrentFilter] = useState('all')
  const [currentProducts, setCurrentProducts] = useState([...appData.products])
  const [searchQuery, setSearchQuery] = useState('')

  // Filter products by category
  const filterByCategory = (categoryId) => {
    console.log('Filtering by category:', categoryId)
    setCurrentFilter(categoryId)
    setSearchQuery('')
    
    if (categoryId === 'all') {
      console.log('Setting all products:', appData.products.length)
      setCurrentProducts([...appData.products])
    } else {
      const filtered = appData.products.filter(product => product.category === categoryId)
      console.log('Filtered products:', filtered.length)
      setCurrentProducts(filtered)
    }
  }

  // Search products
  const searchProducts = (query) => {
    setSearchQuery(query)
    
    if (query === '') {
      if (currentFilter === 'all') {
        setCurrentProducts([...appData.products])
      } else {
        const filtered = appData.products.filter(product => product.category === currentFilter)
        setCurrentProducts(filtered)
      }
      return
    }
    
    const searchResults = appData.products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.productStyle.toLowerCase().includes(query.toLowerCase())
    )
    setCurrentProducts(searchResults)
  }



  return (
    <Layout>
      <SEO title="" />
      <Header />
      <main className="main-content">
        <Hero />
        <hr className="section-divider" />
        <Products 
          products={currentProducts}
          currentFilter={currentFilter}
          searchQuery={searchQuery}
          onSearch={searchProducts}
          onFilterChange={filterByCategory}
        />
        <hr className="section-divider" />
        <Services />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Contact />
        <Footer />
      </main>
    </Layout>
  )
}

export default IndexPage
