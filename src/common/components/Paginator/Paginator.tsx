import Pagination from '@mui/material/Pagination'
import React from 'react'
import styles from './Paginator.module.css'

type Props = {
  totalPages: number;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const Paginator = ({ totalPages, page, handlePageChange }: Props) => {
  return (
    <div className={styles.paginationWrapper}>
    <Pagination 
      count={totalPages} 
      page={page} 
      variant="outlined" 
      shape="rounded" 
      size="large"
      onChange={handlePageChange}
      className={styles.pagination}
    />
  </div>
  )
}
