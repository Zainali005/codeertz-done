import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { job_data } from '../../data';

const uniqueItems = job_data.filter((arr, index, self) =>
  index === self.findIndex((i) => (i.brand === arr.brand && i.State === arr.State)))

const all_categories = ['All', ...new Set(job_data.map(c => c.category))]


const JobArea = () => {
  const [jobItems, setJobItems] = useState(uniqueItems);
  const [category, setCategory] = useState('All');
  // handleCategory
  const handleCategory = (category) => {
    setCategory(category);
    if (category === 'All') {
      setJobItems(uniqueItems)
    }
    else {
      setJobItems(job_data.filter(item => item.category === category))
    }
  }
  return (
    <>
      <div className="job-area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center mb-80">
            <div className="col-10 p-0 text-center">
              <div className="tp-project-tab-button masonary-menu">
                {all_categories.map((c, i) => (
                  <button key={i} className={`${c === category ? 'active' : ''}`}
                    onClick={() => handleCategory(c)}>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid">
            {jobItems.map((item) => {
              const { id, brand, location, time, title } = item;
              return <div key={id} className="col-xl-3 grid-item cat2">
                <div className="jobitem mb-30">
                  <div className="jobitem__brand">
                    <img src={brand} alt="" />
                  </div>
                  <div className="jobitem__title">
                    <h4 className="job-title-sm">
                      <Link href={`/job-details/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h4>
                  </div>
                  <div className="jobitem__details">
                    <p className="mb-0"><i className="fal fa-map-marker-alt"></i>{location}</p>
                    <p className="mb-0"><i className="fal fa-clock"></i>{time}</p>
                  </div>
                  <div className="jobitem__button">
                    <Link href={`/job-details/${id}`}>
                      <button className="tp-btn-border-sm">Apply now</button>
                    </Link>
                  </div>
                </div>
              </div>
            })}
          </div>

        </div>
      </div>
    </>
  );
};

export default JobArea;