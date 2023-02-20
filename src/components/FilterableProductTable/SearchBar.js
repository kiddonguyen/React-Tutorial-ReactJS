import React from 'react'

export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <form>
            <input type="text" placeholder='Search' value={filterText} onChange={(e) => {
                onFilterTextChange(e.target.value)

            }} />
            <label htmlFor="">
                <input type="checkbox" checked={inStockOnly} onChange={(e) => {
                    onInStockOnlyChange(e.target.checked)
                }} />
                {' '}
                Only show product in stock
            </label>
        </form>
    )
}
