import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getProject } from "../../../data/controllers/actions";
import { RootState, useAppSelector } from "../../../data/viewModel/store";
import CaseHeader from "../../components/templates/CaseHeader";
import CaseSidebar from "../../components/templates/CaseSidebar";
import CaseContent from "../../components/templates/CaseContent";
import CaseFooter from "../../components/templates/CaseFooter";

const Page: NextPage = (): React.ReactElement => {
  const project = useAppSelector((state: RootState) => getProject(state));
  const siteTitle = useAppSelector((state: RootState) => state.siteTitle);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && project === null) {
      router.push("/404");
    }
  }, [router, project]);

  return (
    <article>
      <Head>
        <title>
          {project ? `${project.title} - ` : null}
          {siteTitle}
        </title>
      </Head>
      {project ? <CaseHeader {...project} /> : null}
      {/* <main>
        {project ? <CaseSidebar outline={project.content} /> : null}
        {project ? <CaseContent content={project.content} /> : null}
      </main> */}
      <CaseFooter></CaseFooter>
    </article>
  );
};

export default Page;