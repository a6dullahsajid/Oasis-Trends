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
    } else if (categoryId === 'leather-bags') {
      // Special case for leather-bags: show all bag products
      const bagProducts = appData.products.filter(product => product.category === 'leather-bags')
      console.log('Leather bags products:', bagProducts.length)
      setCurrentProducts(bagProducts)
    } else {
      // Check if this is a bag sub-category
      const bagSubCategories = ['laptop-bags', 'backpacks', 'tote-bag', 'duffel-bag', 'sling-bag']
      if (bagSubCategories.includes(categoryId)) {
        // Filter bag products by subCategory
        const filtered = appData.products.filter(product => 
          product.category === 'leather-bags' && product.subCategory === categoryId
        )
        console.log('Filtered bag products by subCategory:', filtered.length)
        setCurrentProducts(filtered)
      } else {
        // Filter non-bag products by category
        const filtered = appData.products.filter(product => product.category === categoryId)
        console.log('Filtered non-bag products:', filtered.length)
        setCurrentProducts(filtered)
      }
    }
  }

  // Search products
  const searchProducts = (query) => {
    setSearchQuery(query)
    
    if (query === '') {
      if (currentFilter === 'all') {
        setCurrentProducts([...appData.products])
      } else if (currentFilter === 'leather-bags') {
        // Show all bag products when search is cleared
        const bagProducts = appData.products.filter(product => product.category === 'leather-bags')
        setCurrentProducts(bagProducts)
      } else {
        // Check if this is a bag sub-category
        const bagSubCategories = ['laptop-bags', 'backpacks', 'tote-bag', 'duffel-bag', 'sling-bag']
        if (bagSubCategories.includes(currentFilter)) {
          // Filter bag products by subCategory
          const filtered = appData.products.filter(product => 
            product.category === 'leather-bags' && product.subCategory === currentFilter
          )
          setCurrentProducts(filtered)
        } else {
          // Filter non-bag products by category
          const filtered = appData.products.filter(product => product.category === currentFilter)
          setCurrentProducts(filtered)
        }
      }
      return
    }
    
    // Search within current filter
    let searchableProducts
    if (currentFilter === 'all') {
      searchableProducts = appData.products
    } else if (currentFilter === 'leather-bags') {
      // Search within all bag products
      searchableProducts = appData.products.filter(product => product.category === 'leather-bags')
    } else {
      // Check if this is a bag sub-category
      const bagSubCategories = ['laptop-bags', 'backpacks', 'tote-bag', 'duffel-bag', 'sling-bag']
      if (bagSubCategories.includes(currentFilter)) {
        // Search within bag products by subCategory
        searchableProducts = appData.products.filter(product => 
          product.category === 'leather-bags' && product.subCategory === currentFilter
        )
      } else {
        // Search within non-bag products by category
        searchableProducts = appData.products.filter(product => product.category === currentFilter)
      }
    }
    
    const searchResults = searchableProducts.filter(product =>
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
