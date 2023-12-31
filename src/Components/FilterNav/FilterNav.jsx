import { useState } from 'react'
import './FilterNav.css'

function FilterNav({ filterByTag, filter }) {
  const [breakfast, setBreakfast] = useState('')
  const [lunch, setLunch] = useState('')
  const [dinner, setDinner] = useState('')
  const [all, setAll] = useState('')
  
  const highlight = () => {
    
  }
  const renderFilters = () => {
    if(filter !== 'breakfast' && filter !== 'lunch' && filter !== 'dinner' && filter !== '') {
      //once active class is applied to nav buttons, can simplify this conditional into checking whether any of the buttons are active
      return <button className={'remove-filter'} onClick={() => {filterByTag('')}}>{filter}</button>
    }
  }

  return (
    <nav className={'tag-nav'}>
    <button 
      className={'tag-nav-button'} 
      onClick={() => {filterByTag('breakfast')}}
      style={{ color: filter === 'breakfast' ? 'white' : '#292929' }}
    >BREAKFAST</button>
    <button 
      className={'tag-nav-button'} 
      onClick={() => {filterByTag('lunch')}}
      style={{ color: filter === 'lunch' ? 'white' : '#292929' }}
    >LUNCH</button>
    <button 
      className={'tag-nav-button'} 
      onClick={() => {filterByTag('dinner')}}
      style={{ color: filter === 'dinner' ? 'white' : '#292929' }}
    >DINNER</button>
    <button 
      className={'tag-nav-button'} 
      onClick={() => {filterByTag('')}}
      style={{ color: filter === '' ? 'white' : '#292929' }}
    >ALL</button>
    {filter && renderFilters()}
  </nav>
  )
}

export default FilterNav;