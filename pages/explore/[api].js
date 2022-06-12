import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Api = () => {
  const router = useRouter();
  const { api } = router.query;
  const Article = dynamic(
    () =>
      import(`../../components/list/Apis`).catch((err) => {
        return () => "error";
      }),
    { loading: () => <p>...loading</p> }
  );
  return <p>Api: {api}</p>;
};

export default Api;
