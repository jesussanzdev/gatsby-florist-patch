import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import AboutPrev from "../components/Navigation/About-prev";
import Flower from "../components/Navigation/Flower";
import Products from "../components/Navigation/Products";
import Contact from "../components/Navigation/Contact";


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="The Flower Patch" styleCass="default-background"/>
    <AboutPrev/>
    <Flower items={data.flower}/>
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq:"default-background.jpg"}) 
    {
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    flower: allContentfulFlowerItem{
      edges{
        node{
          id
          title
          about
          price
          category
          image{
            fixed(width: 75, height: 120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;


export default IndexPage
