import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Refunds from "../components/Links/refund-info";

const RefundPage = ({data}) => (
  <Layout>
    <SEO title="refunds" />
    <BackgroundSection img={data.img.childImageSharp.fluid} 
    title="refunds" 
    styleClass="alternative-background" />
    <Refunds/>
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


export default RefundPage
