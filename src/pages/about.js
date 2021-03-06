import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Navigation/About-prev";
import About from "../components/Navigation/About-more";


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="about" />
    <BackgroundSection img={data.img.childImageSharp.fluid} 
    title="about us" 
    styleClass="alternative-background" />
    <Info/>
    <About/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq:
      "alternative-background.jpg"}) {
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;


export default AboutPage
