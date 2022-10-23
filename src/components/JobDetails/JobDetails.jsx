import React from "react";

import { useParams } from "react-router-dom";
import jobs from "../../assets/data.json";

import { Link } from "react-router-dom";

const JobDetails = () => {
  const { position } = useParams();

  const job = jobs.find((job) => job.position === position);

  return (
    <section>
      <div className="container container__details">
        <div className="details__top">
          <h1>{job.company}</h1>
          <button>
            <Link to={job.company}> Company Site</Link>
          </button>
        </div>

        <div className="job__details">
          <div className="about__job">
            <div>
              <h6>
                {job.postedAt} - {job.contract}
              </h6>
              <h1>{job.position}</h1>
              <span>{job.location}</span>
            </div>
          </div>

          <p className="job__desc"> {job.description}</p>
          <div className="requirements">
            <h1>Requirements</h1>
            <p>{job.requirements.content}</p>

            <ul className="requirement__item">
              {job.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="responsibility">
            <h1>What you will do?</h1>
            <p>{job.role.content}</p>
            <ol type="1" className="responsibility__item">
              {job.role.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
