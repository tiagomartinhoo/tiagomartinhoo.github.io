import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { Fade } from "react-reveal";


class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <>
                <div className="educations-header-div">
                  <Fade bottom duration={2000} distance="20px">
                    <h1 className="educations-header" style={{ color: theme.text }}>
                      {section["title"]}
                    </h1>
                  </Fade>
                </div>
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard index={index} totalCards={section["experiences"].length} experience={experience} theme={theme} />
                  );
                })}
              </>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
