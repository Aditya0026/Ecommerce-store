import React from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useCloseOnClickOutside } from '../../../CustomHooks/CustomHooks';

import { filtersData, sortsData } from '../Filters.data';
import { useProductContext } from '../../../store/index.store';
import {
  dispatchClearFilters,
  dispatchFilterProperties,
  dispatchPrice,
  dispatchSort,
} from '../../../store/Reducer/reducer';
import { getDynamicPriceRange, isChecked } from '../../../Utils/utils';

export const FilterPhone = ({ productState }) => {
  const { dispatch } = useProductContext();

  const [toggleSortModal, setToggleSortModal] = React.useState(false);
  const [toggleFilterModal, setToggleFilterModal] = React.useState(false);
  const toggleSortModalRef = React.useRef();
  const toggleFilterModalRef = React.useRef();
  useCloseOnClickOutside(toggleSortModalRef, setToggleSortModal);
  useCloseOnClickOutside(toggleFilterModalRef, setToggleFilterModal);
  return (
    <>
      <aside>
        <div className="phone-filter container">
          <div>
            <button
              onClick={() => setToggleSortModal(!toggleSortModal)}
              type="submit"
              className="sort-btn phone-filter-btn border-none"
            >
              <i className="fa-solid fa-sort m-right-smallest" /> Sort
            </button>
          </div>
          <div>
            <button
              onClick={() => setToggleFilterModal(!toggleFilterModal)}
              type="submit"
              className="filter-btn phone-filter-btn border-none"
            >
              <i className="fa-solid fa-filter m-right-smallest" />
              Filter
            </button>
          </div>
        </div>
      </aside>
      <aside
        className={`sort-outer-container ${toggleSortModal ? 'show' : ''}`}
      >
        <div ref={toggleSortModalRef} className="sort-inner-container">
          <div
            className="filter-heading fs-medium"
            style={{ marginBottom: '2rem' }}
          >
            Sort
          </div>
          <div className="divider" />
          <div className="sort-container">
            {sortsData.map((category) => (
              <div style={{ marginBottom: '2rem' }}>
                <input
                  type="radio"
                  className="radio-inp"
                  id={category}
                  name="sort"
                  onChange={() => dispatchSort(dispatch, category)}
                />
                <label
                  key={category}
                  style={{ textTransform: 'capitalize', marginLeft: '1rem' }}
                  htmlFor={category}
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <aside
        className={`filter-outer-container ${toggleFilterModal ? 'show' : ''}`}
      >
        <div ref={toggleFilterModalRef} className="filter-inner-container">
          {Object.keys(filtersData).map((property) => (
            <div key={property} className="grid-2 flex-base flex-column">
              <div
                className="filter-heading  "
                style={{ marginBottom: '2rem' }}
              >
                {property?.toUpperCase()}
              </div>
              {filtersData[property].map((category) => (
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="checkbox"
                    id={category}
                    name={category}
                    value={category}
                    className="checkbox pointer"
                    onChange={() => {
                      dispatchFilterProperties(dispatch, {
                        property,
                        category,
                      });
                    }}
                  />
                  <label
                    style={{ textTransform: 'capitalize' }}
                    htmlFor={category}
                    className="fs-medium-small m-left-smallest grey"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};
