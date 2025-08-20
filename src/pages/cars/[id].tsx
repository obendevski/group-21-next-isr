import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { CarType } from "../../types";
import { useRouter } from "next/router";

interface Props {
  car: CarType;
}

const CarDetailPage = ({ car }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        this is a fallback page, will stay like this until the new page is built
      </div>
    );
  }

  if (!car) {
    return <p>car not found</p>;
  }

  return (
    <div>
      <h1>{car.name}</h1>
      <h3>{car.origin}</h3>
      <img src={car.image} alt="" />
    </div>
  );
};

export default CarDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5001/cars");
  const cars: CarType[] = await res.json();

  const paths = cars.map((car) => {
    return {
      params: {
        id: car.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.id) {
    const res = await fetch(`http://localhost:5001/cars/${params.id}`);
    const car: CarType = await res.json();

    return {
      props: {
        car,
      },
    };
  }

  return {
    props: {},
  };
};
