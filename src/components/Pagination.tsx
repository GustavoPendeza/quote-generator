import ReactPaginate from "react-paginate";
import styles from "../app/page.module.css";

interface Props {
  totalPages: number;
  setPage: (page: number) => void;
}

export default function Pagination({ totalPages, setPage }: Props) {
  function handleChangePage(event: any) {
    setPage(event.selected + 1);
  }

  return (
    <ReactPaginate
      pageCount={totalPages}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      pageRangeDisplayed={5}
      onPageChange={handleChangePage}
      containerClassName={styles.paginationButtons}
      activeClassName={styles.activePaginationButton}
      disabledClassName={styles.disabledPaginationButton}
    />
  );
}
