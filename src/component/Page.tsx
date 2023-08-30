import Head from "next/head";
import { ReactNode } from "react";

interface PageProps {
    title: string;
    children: ReactNode;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    );
};

export default Page;
