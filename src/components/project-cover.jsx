import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const Cover = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ProjectCover = ({ src }) => {

  ProjectCover.propTypes = {
    src: PropTypes.string.isRequired,
  };

  return (
    <Cover>
      <Img src={src} alt={"covers"} />
    </Cover>
  );
};

export default ProjectCover;