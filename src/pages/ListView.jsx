import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
const ListView = ({ openModal }) => {
  const store = useSelector((store) => store);

  const [itemOffset, setItemOffset] = useState(0);
  //console.log(store.flights);

  /**Pagination Sistemi Kurmak Gerekli Değer
   * Sayfa sayısı
   * sayfada gösterilecek elememan sayısıfı
   * ve o anki sayfada gösterilecek itemler / elemenalar
   *
   */

  //Sayfa başına gösterilecek eleman sayısı
  const itemsPerPage = 10;

  //Sonuncu elemeanın sayısı
  const endOffset = itemOffset + itemsPerPage;
  //Sayfa başına o and gösterilecek elemean dizisi
  const currentItems = store.flights.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(store.flights.length / itemsPerPage);

const handlePageClick=(event)=>{

  const newOffset=(event.selected * itemsPerPage) % store.flights.length;
  setItemOffset(newOffset)
}

  return (
    <div className="list-page">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Detay Bilgisi</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => openModal(flight.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination"
        pageCount={pageCount}
        nextLabel="ileri >"
        previousLabel="< geri"
        activeClassName="active"
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default ListView;
