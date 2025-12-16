import Pagination from '@mui/material/Pagination'
import React from 'react'
import styles from './Paginator.module.css'
import { scrollToTop } from '@/common/utils';

type Props = {
  totalPages: number;
  page: number;
  handlePageChange: (value: number) => void;
}



export const Paginator = ({ totalPages, page, handlePageChange }: Props) => {

  const changePageHandler = (_event: React.ChangeEvent<unknown>, value: number) => {
    scrollToTop();
    handlePageChange(value);
  }

  return (
    <div className={styles.paginationWrapper}>
    <Pagination 
      count={totalPages} 
      page={page} 
      variant="outlined" 
      shape="rounded" 
      size="large"
      onChange={changePageHandler}
      className={styles.pagination}
    />
  </div>
  )
}
