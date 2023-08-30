import Layout from "@/component/Layout";
import Page from "@/component/Page";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user } = useAuth0();

  return (
    <Page title="Toner haven backend">
      <Layout>
        <div>{JSON.stringify(user)}</div>
      </Layout>
    </Page>
  );
}
