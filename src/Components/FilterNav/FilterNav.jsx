import './FilterNav.css'

function FilterNav({ filterByTag, renderFilters }) {

  render (
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
    {filter && <button className={'remove-filter'} onClick={() => {filterByTag('')}}>{renderFilters()}</button>}
  </nav>
  )
}

export default FilterNav;