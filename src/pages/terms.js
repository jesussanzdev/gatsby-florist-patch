import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Terms from "../components/Links/terms-info";

const TermsPage = ({data}) => (
  <Layout>
    <SEO title="terms" />
    <BackgroundSection img={data.img.childImageSharp.fluid} 
    title="terms of service" 
    styleClass="alternative-background" />
    <Terms/>
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


export default TermsPage
