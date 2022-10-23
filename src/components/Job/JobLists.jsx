import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import jobs from "../../assets/data.json";
import { Link } from "react-router-dom";

const Job = () => {
  const [jobData, setJobData] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");

  // Search by location
  const locationSearchHandler = () => {
    const filterByLocation = jobs.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );

    setJobData(filterByLocation);
  };

  // Filter job from Drop down menu
  const filterJobDta = (e) => {
    const filterValue = e.target.value;
    console.log(filterValue);

    if (filterValue === "full-time") {
      const filteredData = jobs.filter((job) => job.contract === "Full Time");
      setJobData(filteredData);
    } else if (filterValue === "part-time") {
      const filteredData = jobs.filter((job) => job.contract === "Part Time");
      setJobData(filteredData);
    } else if (filterValue === "freelance") {
      const filteredData = jobs.filter((job) => job.contract === "Freelance");
      setJobData(filteredData);
    } else if (filterValue === "contract") {
      const filteredData = jobs.filter((job) => job.contract === "Contract");
      setJobData(filteredData);
    } else {
      setJobData(jobs);
    }
  };

  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list__wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <span>
                {" "}
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search by title, companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="search__panel-01">
              <span>
                <EditLocationIcon />
              </span>
              <input
                type="text"
                placeholder="Search by location..."
                value={searchByLocation}
                onChange={(e) => setSearchByLocation(e.target.value)}
              />
              <button className="btn" onClick={locationSearchHandler}>
                Search
              </button>
            </div>
            <div className="search__panel-03">
              <select onChange={filterJobDta}>
                <option>Filter job by </option>
                <option value="full-time">Full time</option>
                <option value="part-time">Part-time</option>
                <option value="freelance">Freelance</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>

          <div className="jobs__wrapper">
            {jobData
              ?.filter((job) => {
                if (searchTerm === "") {
                  return job;
                }
                if (
                  job.position
                    .toLocaleLowerCase()
                    .includes(
                      searchTerm.toLocaleLowerCase() ||
                        job.company
                          .toLocaleLowerCase()
                          .includes(searchTerm.toLocaleLowerCase())
                    )
                )
                  return job;
              })
              .map((item) => (
                <div className="job__item" key={item.id}>
                  <img src={item.logo} alt="" />
                  <div className="job__content">
                    <h6>
                      {item.postedAt} - {item.contract}
                    </h6>
                    <h1>
                      <Link to={`/jobs/${item.position}`}>{item.position}</Link>
                      <p>{item.company}</p>

                      <div className="location">
                        <p>
                          Location: <span>{item.location}</span>
                        </p>
                      </div>
                    </h1>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;