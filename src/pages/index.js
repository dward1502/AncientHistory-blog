import React from "react"
// import { Link } from "gatsby"
// import {useStaticQuery,graphql} from 'gatsby'
// import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/UI/homeCards"

import Image from "../assets/images/pyramids.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero flex_column-center">
      <h1 className="heading">Welcome To Ancient History</h1>
      <h3 className="subHeading">
        The mysteries of our past are stranger than they appear
      </h3>
    </div>
    <main className="content">
      <section className="row pt-100">
        <div className="col-1-of-2 p-30">
          <div className="about">
            <h3 className="about_title">About</h3>
            <div className="about_textBox">
              <p className="about_text">
                To discover and understand our past we must be open to different
                points of view. Here at Ancient History I would like to lay out
                current archeological beliefs of our past, as well as display
                opposing theories. Within that a blog will be produced that has
                the opinions of myself and my beliefs and understanding of our
                ancient past.
              </p>
            </div>
          </div>
        </div>
        <div className="col-1-of-2 p-30">
          <div className="about_picture">
            <img src={Image} alt="Pyramids of Giza" />
          </div>
        </div>
      </section>
      <section className="row pt-100">
        <div className="col-1-of-3 cardBox">
          <Card
            image={Image}
            imageAlt="Image for card"
            text="Knowledge"
            path="/knowledge"
          />
        </div>
        <div className="col-1-of-3 cardBox">
          <Card
            image={Image}
            imageAlt="Image for card"
            text="Theories"
            path="/theories"
          />
        </div>
        <div className="col-1-of-3 cardBox">
          <Card
            image={Image}
            imageAlt="Image for card"
            text="Blog"
            path="/blog"
          />
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
