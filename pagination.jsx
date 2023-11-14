import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  return (
    <nav aria-label="Page navigation" className="mx-auto pt-5">
      <ul className="pagination pagination-lg justify-content-center">
        <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)} aria-label="Previous">
            <span aria-hidden="true">Previous</span>
          </button>
        </li>
        <li className="page-item"><span className="page-link bg-dark text-light">{currentPage}</span></li>
        <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)} aria-label="Next">
            <span aria-hidden="true">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
