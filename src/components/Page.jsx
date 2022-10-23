import React from 'react'

export const Page = ({increment, decrement, page}) => {
  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item"><a className="page-link" onClick={decrement}>Previous</a></li>
            <li className="page-item"><a className="page-link" >{page}</a></li>
            <li className="page-item"><a className="page-link" onClick={increment}>Next</a></li>
        </ul>
    </nav>
  )
}
