import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import '../styles/styles.css';
import { Link } from "react-router-dom";

import ProjectCover from "../components/fields/project-cover";
import { typography, typography2, typography3 } from "../styles/typography";
import { projects } from "../components/data";
import { RepoButton } from "../components/button";
import MemberCard from "../components/member-card";
import DetailFooter from "../components/fields/detail-footer";


const GralContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 6rem;
  align-items: center;

  @media(max-width: 750px) {
    padding: 4rem 0;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 5rem;
  width: 90%;

  @media(max-width: 600px) {
  padding: 0;
  }
`

const T0 = styled.h1`
  margin: 0;
  ${typography.head.md};
  color: white;

  @media(max-width: 600px) {
  display: none;
  }
`

const ProjectContainer = styled.div`
  padding: 5rem 3rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;

  @media(max-width: 850px) {
    border: none;
    padding: 4rem 0;
    width: auto;
  }
`

const DetailContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  padding-bottom: 4rem;
  border-bottom: 1px solid white;

  @media(max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    gap: 3rem;
  }
`

const TitleCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.p`
  margin: 0;
  ${typography2.head.lg};
  color: white;


  @media (max-width: 500px) {
    ${typography2.head.md};
  }
`

const DaContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  padding: 4rem 0 0 0;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`

const SummaryCont = styled.div`
  ${typography3.text.xl};
  color: white;
  display: flex;

  @media (max-width: 1000px) {
    ${typography.text.lg};
    margin: 0 0.5rem;
    text-align: justify;
  }

  @media (max-width: 500px) {
    ${typography.text.md};
  }
`

const TeamContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;
  border-top: 1px solid white;

  
  @media (max-width: 850px) {
    // align-items: flex-start;
  }
`

const TeamTt = styled.p`
  ${typography.head.md};
  color: white;
  margin: 0;
`

const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 5rem;
  padding: 4rem 0 0 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    gap: 3rem;
  }

  @media (max-width: 350px) {
    grid-template-columns: repeat(1, auto);
  }
`

const BCover = styled.img`
  display: flex;
  width: 80%;
  padding: 3rem 0 4rem;
`;

function ProjectDetail() {

  const {id} = useParams();
  const index = parseInt(id)
  const project = projects[index];

  return (

      <GralContainer>
        <Header>
        <Link
          to="/projects"
          className="link-style"
          onClick={() => window.scrollTo(0, 0)}
        >
          ← Back to portfolio
        </Link>
          <T0>Jorge Rosano</T0>
        </Header>
        <ProjectContainer>
       <DetailContainer>
        <TitleCont>
          <Title>{project.title}</Title>
        </TitleCont>
        <ProjectCover src={project.imgSrc} />
       </DetailContainer>

       <DaContainer>
        <SummaryCont>{project.summary}</SummaryCont>
        <Link to={project.project_url}>
        <RepoButton>Go to Repo!</RepoButton>
        </Link>
       </DaContainer>

       <BCover src={project.imgComp} />

       <TeamContainer>
        <TeamTt>
          {project.team.length > 1 ? "The team" : "Created by"}</TeamTt>
        <MembersContainer>
          {project.team.map((member, id) => (
            <MemberCard 
            key={id}
            name={member.name}
            profilePicUrl={member.profilePicUrl}
            gitHubUrl={member.githubUrl}
            linkedInUrl={member.linkedinurl}
            />
          ))}
        </MembersContainer>
       </TeamContainer>
        </ProjectContainer>
        <DetailFooter />
      </GralContainer>

  )
}

// ProjectDetail.propTypes = {
//     id: PropTypes.string.isRequired,
//     imgSrc: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     tech: PropTypes.arrayOf(PropTypes.string).isRequired,
//     team: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }

export default ProjectDetail;