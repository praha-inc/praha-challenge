import { useEffect, useState } from "react";

export const FetchComponent = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const [data, setData] = useState({
    subscribers: 0,
    stars: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const { stargazers_count } = await fetcher(
        "https://api.github.com/repos/facebook/react"
      );
      setData({
        stars: stargazers_count
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>{data.stars} stars</p>
    </div>
  );
};
