import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobCard from "../JobCard";
import { searchJobs } from "../../constants/fetchFromApi";
import { lookup } from "../../assets";
import { featuredCompanies } from "../../constants/index";
import Button from "../Button";
import { ImSpinner2 } from "react-icons/im";
import * as J from "./styles";
import { LoadingSpinner } from "../../globals";
import JobSearchContext from "../../context/JobSearchContext";

const Jobs = ({ innerRef, inHomepage, inJobsPage }) => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [jobsPage, setJobsPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { query, setQuery } = useContext(JobSearchContext);

  // Fetch jobs when page loads using default query from context ('software developer')
  useEffect(() => {
    searchJobs(query, jobsPage).then((data) => {
      setJobs(data);
      setLoading(false);
    });
    window.scrollTo(0, 0);
  }, []);

  // When user presses on Next or Prev button
  const handleJobsPage = (e) => {
    e.preventDefault();
    setLoading(true);

    window.scrollTo(0, 0);

    if (e.target.id === "next") {
      setJobsPage(jobsPage + 1);

      searchJobs(query, jobsPage + 1).then((data) => {
        window.scrollTo(0, 0);
        setJobs((current) => [...current, ...data]);
        setLoading(false);
      });
    } else if (e.target.id === "prev") {
      setJobsPage(jobsPage - 1);

      setJobs((current) =>
        current.filter((obj, idx) => {
          return idx < current.length - 10;
        })
      );
      setLoading(false);
    }
  };

  // Fetch jobs using user input
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchTerm.length !== 0) {
      // Save searchTerm to context
      setQuery(searchTerm);

      // If request comes from Homepage, redirect to JobsPage
      if (inHomepage) {
        navigate("/jobs");
      }

      setLoading(true);
      window.scrollTo(0, 0);

      // Reset jobs page number
      setJobs(1);

      // Search for matching jobs using the value saved in context
      searchJobs(searchTerm, 1).then((data) => {
        window.scrollTo(0, 0);
        setJobs(data);
        setLoading(false);
      });
    }
  };

  return (
    <J.JobsStyled>
      <J.JobsContainer ref={innerRef}>
        <J.Heading id="latest-tech-jobs">
          Latest <J.Span>tech jobs</J.Span>
        </J.Heading>

        <J.JobsPresentation>
          <J.ListContainer>
            {loading || jobs === undefined ? (
              <LoadingSpinner>
                <ImSpinner2 />
              </LoadingSpinner>
            ) : (
              jobs
                .slice(-10)
                .map((job) => <JobCard key={job.job_id} {...job} />)
            )}
          </J.ListContainer>

          <J.AsideContainer>
            <J.SearchJobs>
              <J.Title>Search jobs</J.Title>
              <J.SearchInput
                type="text"
                placeholder="Search for jobs"
                required={true}
                maxLength="256"
                bg={lookup}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => handleSearchSubmit(e)}
              />
            </J.SearchJobs>

            <J.FeaturedCompaniesContainer>
              <J.ContainerTitle>Featured companies</J.ContainerTitle>
              <J.CompaniesList>
                {featuredCompanies.map((company) => (
                  <J.CompanyItem key={company.id}>
                    <J.CompanyLogo src={company.logo} alt="company-logo" />
                    <J.CompanyDetails>
                      <J.CompanyTitle>{company.title}</J.CompanyTitle>
                      <J.CompanyType>{company.type}</J.CompanyType>
                    </J.CompanyDetails>
                  </J.CompanyItem>
                ))}
              </J.CompaniesList>
            </J.FeaturedCompaniesContainer>
          </J.AsideContainer>
        </J.JobsPresentation>

        <J.ButtonContainer>
          {inHomepage && (
            <Link to={"/jobs"}>
              <Button
                type1="primary"
                type2="large"
                href="/jobs"
                value="Browse all jobs"
              />
            </Link>
          )}

          {/* Show prev button */}
          {inJobsPage && jobsPage > 1 && (
            <div onClick={(e) => handleJobsPage(e)}>
              <Button type1="primary" type2="large" value="Prev" id="prev" />
            </div>
          )}

          {/* Show next button */}
          {inJobsPage && jobsPage < 10 && (
            <div onClick={(e) => handleJobsPage(e)}>
              <Button type1="primary" type2="large" value="Next" id="next" />
            </div>
          )}
        </J.ButtonContainer>
      </J.JobsContainer>
    </J.JobsStyled>
  );
};

export default Jobs;
