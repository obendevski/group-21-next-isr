import { useRouter } from "next/router";
import React, { useState } from "react";

const originFilters = [
  {
    value: "USA",
  },
  {
    value: "France",
  },
  {
    value: "Japan",
  },
  {
    value: "United Kingdom",
  },
  {
    value: "Germany",
  },
];

const Filters: React.FC = () => {
  const router = useRouter();
  const [origin, setOrigin] = useState();
  const [year, setYear] = useState();

  console.log(origin, year);

  return (
    <div className="filters container bg-dark text-white rounded -mt-5 mb-5">
      <div className="row align-items-center">
        <div className="px-5 py-4 w-100">
          <form className="row">
            {/* FILTER BY ORIGIN */}
            <div className="col">
              <label htmlFor="origin">Filter by origin:</label>
              <select
                className="form-control"
                value={router.query.origin}
                id="origin"
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setOrigin(event.target.value);
                  router.push({
                    pathname: "/",
                    query: {
                      ...router.query,
                      origin: event.target.value,
                    },
                  });
                }}
              >
                <option disabled value={""}>
                  Filter by origin:
                </option>
                {originFilters.map((f, i) => (
                  <option key={`origin-filter-${i}`} value={f.value}>
                    {f.value}
                  </option>
                ))}
              </select>
            </div>

            {/* FILTER BY YEAR */}
            <div className="col">
              <label htmlFor="year">Sort by year:</label>

              <select
                className="form-control"
                value={router.query.year}
                id="year"
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setYear(event.target.value);
                  router.push({
                    pathname: "/",
                    query: {
                      ...router.query,
                      year: event.target.value,
                    },
                  });
                }}
              >
                <option disabled value={""}>
                  Filter by year:
                </option>
                <option value="asc">Oldest First</option>
                <option value="desc">Newest First</option>
              </select>
            </div>

            {/* show the remove filters button only if there are filters */}
            {router.query.origin || router.query.year ? (
              <div className="col d-flex flex-column">
                <button
                  type="button"
                  className="btn btn-danger btn-block mt-auto"
                  onClick={() => {
                    router.push({
                      pathname: "/",
                      query: {},
                    });
                  }}
                >
                  Remove filters
                </button>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filters;
