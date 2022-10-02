import './index.css'

const CategoryItem = props => {
  const {eachCategory, onChangeCategory} = props
  const {categoryId, name} = eachCategory

  const onClickCategory = () => {
    onChangeCategory(categoryId)
  }

  return (
    <li>
      <button type="button" className="category-item" onClick={onClickCategory}>
        <p className="name">{name}</p>
      </button>
    </li>
  )
}

const RatingItem = props => {
  const {eachItem, onChangeRating} = props
  const {ratingId, imageUrl} = eachItem

  const onClickRating = () => {
    console.log(ratingId)
    onChangeRating(ratingId)
  }

  return (
    <li>
      <button onClick={onClickRating} type="button" className="rating-item">
        <img src={imageUrl} alt={`rating ${ratingId}`} className="rating-img" />
        <p>& up</p>
      </button>
    </li>
  )
}

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeCategory,
    onChangeRating,
    onSearchWord,
    onResetAll,
  } = props

  const onEnterKey = event => {
    if (event.key === 'Enter') {
      onSearchWord(event.target.value)
    }
  }

  const resetAll = () => {
    onResetAll()
  }

  return (
    <div className="filters-group-container">
      <input
        type="search"
        className="input"
        placeholder="Search"
        onKeyDown={onEnterKey}
      />

      <h1 className="category-title">Category</h1>
      <ul className="ul-container">
        {categoryOptions.map(eachCategory => (
          <CategoryItem
            key={eachCategory.categoryId}
            eachCategory={eachCategory}
            onChangeCategory={onChangeCategory}
          />
        ))}
      </ul>
      <h1 className="category-title">Rating</h1>
      <ul className="ul-container">
        {ratingsList.map(eachItem => (
          <RatingItem
            key={eachItem.ratingId}
            eachItem={eachItem}
            onChangeRating={onChangeRating}
          />
        ))}
      </ul>
      <button type="button" className="clear-filter-button" onClick={resetAll}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
