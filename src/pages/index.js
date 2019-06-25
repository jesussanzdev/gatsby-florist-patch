import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="The Flower Patch" styleCass="default-background"/>
    <Info/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq:
      "default-background.jpg"}) {
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;


export default IndexPage
