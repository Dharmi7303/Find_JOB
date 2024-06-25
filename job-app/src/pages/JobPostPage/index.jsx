import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { jobDetails } from "../../constants/fetchFromApi";
import JobCard from "../../components/JobCard";
import { location, money, time } from "../../assets";
import Button from "../../components/Button";
import CTA from "../../components/CTA";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { LoadingSpinner, Span } from "../../globals";
import { ImSpinner2 } from "react-icons/im";
import * as J from "./styles";

const JobPostPage = () => {
  const { id } = useParams();

  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);

    jobDetails(id).then((data) => {
      setJobData(data);
      setLoading(false);
    });
  }, [id]);

  const targets = useRef(new Set());

  const [entries, setObservedNodes] = useIntersectionObserver({
    // threshold: 1
  });

  useEffect(() => {
    setObservedNodes(() => [...targets.current]);
  }, [setObservedNodes]);

  useEffect(() => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0%) scale(100%)";
        entry.target.style.opacity = "1";

        setObservedNodes((observedNodes) =>
          observedNodes.filter((node) => node !== entry.target)
        );
      }
    }
  }, [entries, setObservedNodes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    window.scroll(0, 0);
  };

  return (
    <J.JobsPostPageStyled>
      <J.JobPresentation>
        <J.JobPresentationContainer>
          {/* Display job card */}
          <J.JobCardExtended>
            {!loading && jobData?.length > 0 ? (
              <>
                <JobCard {...jobData[0]} inJobPostPage />
                <J.StatsContainer>
                  <J.Stat>
                    <J.Icon src={time} alt="time" />
                    <J.StatText>
                      {jobData[0]?.job_employment_type || "N/A"}
                    </J.StatText>
                  </J.Stat>
                  <J.Divider />
                  <J.Stat>
                    <J.Icon src={location} alt="time" />
                    <J.StatText>
                      {jobData[0]?.job_city || "N/A"},{" "}
                      {jobData[0]?.job_state || "N/A"}
                    </J.StatText>
                  </J.Stat>
                  <J.Divider />
                  <J.Stat>
                    <J.Icon src={money} alt="time" />
                    <J.StatText>
                      ${jobData[0]?.job_min_salary || "N/A"} -{" "}
                      {jobData[0]?.job_max_salary || "N/A"} USD
                    </J.StatText>
                  </J.Stat>
                </J.StatsContainer>

                <J.JobDescriptionTitle>Job Description</J.JobDescriptionTitle>
                <J.JobDescriptionText>
                  <pre
                    style={{
                      overflowX: "auto",
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      fontWeight: "500",
                    }}
                  >
                    {jobData[0]?.job_description}
                  </pre>
                </J.JobDescriptionText>
              </>
            ) : (
              <LoadingSpinner>
                <ImSpinner2 />
              </LoadingSpinner>
            )}
          </J.JobCardExtended>

          <J.AsideContainer id="apply">
            {!formSubmitted ? (
              <>
                <J.FormTitle>Ready to apply for this job opening?</J.FormTitle>
                <J.ApplyForm
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <J.FormDiv>
                    <label htmlFor="full-name">
                      Full Name<J.Asterisk>*</J.Asterisk>
                    </label>
                    <J.ApplyFormInput
                      type="text"
                      placeholder="Sophie Moore"
                      name="full-name"
                      required={true}
                      maxLength="256"
                    />
                  </J.FormDiv>
                  <J.FormDiv>
                    <label htmlFor="email">
                      Email<J.Asterisk>*</J.Asterisk>
                    </label>
                    <J.ApplyFormInput
                      type="email"
                      placeholder="sophie@email.com"
                      name="email"
                      required={true}
                      maxLength="256"
                    />
                  </J.FormDiv>
                  <J.FormDiv>
                    <label htmlFor="phone-number">
                      Phone Number<J.Asterisk>*</J.Asterisk>
                    </label>
                    <J.ApplyFormInput
                      type="text"
                      placeholder="(123) 456-7890"
                      name="phone-number"
                      required={true}
                      maxLength="256"
                    />
                  </J.FormDiv>
                  <J.FormDiv>
                    <label htmlFor="job-category">
                      Job Category<J.Asterisk>*</J.Asterisk>
                    </label>
                    <J.ApplyFormInput
                      type="text"
                      placeholder="Ex.: Development"
                      name="job-category"
                      required={true}
                      maxLength="256"
                    />
                  </J.FormDiv>
                  <J.FormDiv>
                    <label htmlFor="specialization">
                      Specialization<J.Asterisk>*</J.Asterisk>
                    </label>
                    <J.ApplyFormInput
                      type="text"
                      placeholder="Ex.: Frontend"
                      name="specialization"
                      required={true}
                      maxLength="256"
                    />
                  </J.FormDiv>
                  <J.FormDiv>
                    <label htmlFor="skills">
                      Skills<J.Asterisk>*</J.Asterisk>
                    </label>
                    <J.ApplyFormTextArea
                      placeholder="Skill 1, Skill 2, Skill 3..."
                      name="skills"
                      required={true}
                      maxLength="5000"
                    />
                  </J.FormDiv>
                  <J.FormDiv>
                    <label htmlFor="resume">
                      Resume<J.Asterisk>*</J.Asterisk>
                    </label>
                    <J.ApplyFormInput
                      type="text"
                      placeholder="Resume or Portfolio Link"
                      name="resume"
                      required={true}
                      maxLength="256"
                    />
                  </J.FormDiv>
                  <J.FormDiv>
                    <label htmlFor="notes">Notes</label>
                    <J.ApplyFormTextArea
                      placeholder="If you would like to include any extra note or cover letter, please free to do it here."
                      name="notes"
                      maxLength="5000"
                    />
                  </J.FormDiv>
                  <Button
                    type1="primary"
                    type2="large"
                    value="Apply now"
                    width="100%"
                    style={{}}
                  />
                </J.ApplyForm>
              </>
            ) : (
              <J.FormTitle>
                Thank you! Your submission has been <Span>received!</Span>
              </J.FormTitle>
            )}
          </J.AsideContainer>
        </J.JobPresentationContainer>
      </J.JobPresentation>

      <CTA innerRef={(element) => targets.current.add(element)} />
    </J.JobsPostPageStyled>
  );
};

export default JobPostPage;
