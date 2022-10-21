import getMainLayout from "@/components/layouts/MainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Container, Content } from "../components/Container";
import { services } from "../services";
import { NextPageWithLayout } from "./_app";

const SamplePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { api } = services;

  useEffect(() => {
    start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = async () => {
    setLoading(true);

    try {
      setData(await api.global.getGetData());
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  // State
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();

  // Methods
  const goBack = () => {
    router.back();
  };

  return (
    <Container title="Sample page">
      <Content cardClassName="space-y-4">
        <h1 className="text-xl font-semibold">Sample page</h1>

        {loading && <span>Loading...</span>}
        {!loading && data && <div>{JSON.stringify(data, null, 2)}</div>}
        <input type='text'></input>
        <div>
          <span
            onClick={goBack}
            className="p-1 px-2 bg-primary rounded-lg hover:cursor-pointer"
          >
            Go back
          </span>
        </div>
      </Content>
    </Container>
  );
};
SamplePage.getLayout = getMainLayout;
export default SamplePage;
