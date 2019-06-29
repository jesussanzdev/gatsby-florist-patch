import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Faq from "../components/Navigation/Faq";

const FaqPage = ({data}) => (
  <Layout>
    <SEO title="FAQ" />
    <BackgroundSection img={data.img.childImageSharp.fluid} 
    title="faq" 
    styleClass="alternative-background" />
    <Faq/>
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


export default FaqPage
