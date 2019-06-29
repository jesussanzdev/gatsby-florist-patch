import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Privacy from "../components/Links/privacy-info";

const PrivacyPage = ({data}) => (
  <Layout>
    <SEO title="privacy" />
    <BackgroundSection img={data.img.childImageSharp.fluid} 
    title="privacy" 
    styleClass="alternative-background" />
    <Privacy/>
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


export default PrivacyPage
