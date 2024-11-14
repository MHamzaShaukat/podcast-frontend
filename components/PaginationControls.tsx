interface PaginationControlsProps {
  page: number;
  setPage: (page: number) => void;
  totalCount: number;
  limit: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ page, setPage, totalCount, limit, }) => {

  const totalPages = Math.ceil(totalCount / limit);
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex justify-center  !items-center align-middle space-x-4 mt-6">
      <button
        onClick={handlePreviousPage}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-800 text-white rounded-md disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-lg">{page} / {totalPages}</span>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="px-4 py-2 bg-gray-800 text-white rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
