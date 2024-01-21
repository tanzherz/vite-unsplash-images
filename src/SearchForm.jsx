import { useGlobalContext } from './context'

export const SearchForm = () => {
  const { setSearchValue } = useGlobalContext()

  // const handleChange = (e) => {
  //   setSearchValue(e.target.value)
  //
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.search.value
    if (!value) return
    setSearchValue(value)
    // console.log(value)
  }

  return (
    <section>
      <h2 className='title'>Unsplash Images</h2>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          className='form-input search-input'
          placeholder='pink'
          // value={searchValue}
          // onChange={handleChange}
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  )
}
