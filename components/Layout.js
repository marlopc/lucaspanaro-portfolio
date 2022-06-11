import { useRouter } from "next/router";
import React from "react";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import { encodeLower } from "~/lib/encode";
import { sectionNames } from "~/lib/translations";

const Layout = ({ children }) => {
  const { locale } = useRouter();

  const { home } = sectionNames[locale];

  return (
    <>
      <Nav />
      <main name={encodeLower(home)}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
