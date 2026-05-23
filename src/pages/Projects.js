import React, { useState, useMemo } from 'react';
import { Row, Button, ButtonGroup } from 'react-bootstrap';
import data from './data';
import ProjectCard from './ProjectCard';

function Projects() {
  const [filterName, setFilterName] = useState('All');

  const languages = useMemo(() => {
    const allLangs = data.reduce((acc, project) => {
      project.languages.forEach((lang) => {
        if (!acc.includes(lang)) acc.push(lang);
      });
      return acc;
    }, ['All']);
    const sortedLangs = allLangs.filter((lang) => lang !== 'All').sort();
    return ['All', ...sortedLangs];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filterName === 'All') return data;
    return data.filter((project) => project.languages.includes(filterName));
  }, [filterName]);

  return (
    <>
      <ButtonGroup className="flex-wrap mb-4">
        {languages.map((language) => (
          <Button
            key={language}
            variant="outline-primary"
            active={filterName === language}
            onClick={() => setFilterName(language)}
            className="m-1"
          >
            {language}
          </Button>
        ))}
      </ButtonGroup>
      <Row>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Row>
    </>
  );
}

export default Projects;
