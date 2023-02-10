import { Box } from '@mui/material'
import React from 'react'
import '../../css/pagination.css'

const Pagination = ({ totalItems, itemPerPage, setCurrentPage }) => {
  let pages = []
  for (let i = 1; i < Math.ceil(totalItems / itemPerPage); i++) {
    pages.push(i)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
      }}
    >
      {pages.map((page, index) => {
        return (
          <button
            className="paginationBtn"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        )
      })}
    </Box>
  )
}

export default Pagination
