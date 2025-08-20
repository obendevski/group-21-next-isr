import type { GetStaticProps, NextPage } from "next";
import { AboutPageType } from "../types";

interface Props {
  aboutPage: AboutPageType;
}

const About: NextPage<Props> = ({ aboutPage }) => {
  return (
    <>
      <img
        src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/hero-banner/2022/04_12/gate_models_og_01.jpg"
        alt=""
        className="w-100 small-banner"
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>{aboutPage.title}</h1>
            <p className="lead">{aboutPage.first_paragraph}</p>
            <p>{aboutPage.second_paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/about_page");
  const aboutPage: AboutPageType = await res.json();

  return {
    props: {
      aboutPage,
    },
    revalidate: 10,
  };
};
