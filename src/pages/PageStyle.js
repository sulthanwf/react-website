import styled from "styled-components";

/* HomePage Style */
export const HomeOne = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(0.8);
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100%;
  max-height: 25vh;
  justify-content: space-between;

  & > h1 {
    font-size: 64px;
    font-weight: 900;
  }
  & > h2 {
    font-weight: 100;
    text-align: center;
  }
`;

export const HomeTwo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;
/* --------------------------------- */

export const AboutPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const GalleryPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const PortfolioPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const ContactPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
