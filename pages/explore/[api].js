import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/globals/Footer";
import Nav from "../../components/globals/Nav";

const Api = () => {
  const router = useRouter();
  const { api } = router.query;
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([
    ["...", "...", "...", "...", "...", "..."],
  ]);
  useEffect(() => {
    fetch(`/api/apis/${api}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [api]);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  return (
    <>
      <div>
        <Nav />

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        API
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Auth
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        https
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        cors
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(([name, link, desc, auth, https, cors]) => (
                      <tr className="border-b" key={name}>
                        <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
                          <a href={link} className="text-cyan-700 font-medium">
                            {" "}
                            {name} &#10095;
                          </a>
                        </td>
                        <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
                          {desc}
                        </td>
                        <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
                          {auth}
                        </td>
                        <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
                          {https}
                        </td>
                        <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
                          {cors}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Api;
