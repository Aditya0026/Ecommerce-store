import React from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useProductContext } from '../../store/index.store';
import {
  dispatchClearFilters,
  dispatchFilterProperties,
  dispatchPrice,
  dispatchSort,
} from '../../store/Reducer/reducer';
import { getDynamicPriceRange, isChecked } from '../../Utils/utils';
import { filtersData, sortsData } from './Filters.data';

export const FiltersDesktop = ({ productState }) => {
  const { dispatch } = useProductContext();

  return (
    <>
      <div className="product-Categories">
        {Object.keys(filtersData).map((property) => (
          <div key={property}>
            <h3>Categories</h3>
            <div className="check">
              {filtersData[property].map((category) => (
                <div key={category}>
                  <div key={category} className="check1">
                    <input
                      type="checkbox"
                      id={category}
                      name={category}
                      value={category}
                      className="checkbox pointer"
                      checked={productState.filterBy[property].includes(
                        category
                      )}
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="filter">
        <h3>Filters</h3>
        <h4>Sort By</h4>
        <div className="">
          {sortsData?.map((category) => (
            <div key={category} className="check1">
              <input
                type="radio"
                className="radio-inp"
                id={category}
                checked={
                  productState.sortBy && productState.sortBy === `${category}`
                }
                name="sort"
                onChange={() => dispatchSort(dispatch, category)}
              />
              <label
                key={category}
                className="m-left-smallest"
                htmlFor={category}
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
