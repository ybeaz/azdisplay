import React from 'react'
import ReactDOM from 'react-dom'
import './Shared/styles.less'
// Object.assign(styles, customStyles, ...)
import SectionWrapper from './ViewLayer/Components/SectionWrapper.react'
import Header from './ViewLayer/Components/Header.react'
import Descriptors from './ViewLayer/Components/Descriptors.react'
import SearchForm from './ViewLayer/Components/SearchForm.react'
import CatalogTags from './ViewLayer/Components/CatalogTags.react'
import ItHelps from './ViewLayer/Components/ItHelps.react'
import Footer from './ViewLayer/Components/Footer.react'


function App() {
  const title: String = 'Title for tsx'
  return (
    <div className='App'>
      <header><Header /></header>
      <main>
        <SectionWrapper classStyle={'descSection'}>
          <Descriptors />
        </SectionWrapper>
        <SectionWrapper classStyle={'newSection'}>
          <SearchForm />
        </SectionWrapper>
        <SectionWrapper classStyle={'newSection bg_grey'}>
          <CatalogTags />
        </SectionWrapper>
        <SectionWrapper classStyle={'newSection'}>
          <ItHelps />
        </SectionWrapper>
      </main>
      <footer><Footer /></footer>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
