import type { GetServerSideProps, NextPage } from "next";
import AutoCard from "../components/AutoCard";
import Banner from "../components/Banner";
import Filters from "../components/Filters";
import { CarType } from "../types";

interface Props {
  cars: CarType[];
}

const Home: NextPage<Props> = ({ cars }) => {
  return (
    <>
      <Banner />
      <Filters />

      <div className="container">
        <div className="row">
          {cars.map((car) => {
            return <AutoCard key={car.id} {...car} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let res: Response;

  if (query.origin && query.year) {
    res = await fetch(
      `http://localhost:5001/cars?_sort=year&_order=${query.year}&origin_like=${query.origin}`
    );
  } else if (query.origin) {
    res = await fetch(`http://localhost:5001/cars?origin_like=${query.origin}`);
  } else if (query.year) {
    res = await fetch(
      `http://localhost:5001/cars?_sort=year&_order=${query.year}`
    );
  } else {
    res = await fetch(`http://localhost:5001/cars`);
  }

  const cars: CarType[] = await res.json();

  return {
    props: {
      cars,
    },
  };
};
