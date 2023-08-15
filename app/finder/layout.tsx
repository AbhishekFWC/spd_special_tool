"use client";

import Navbar from "../../components/Navbar";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { FilterContextProvider } from "../../context/filter/FilterContext";
interface Props {
  children: React.ReactNode;
}
const FinderLayout: React.FC<Props> = ({ children }) => {
  const { userLoggedIn } = useAuth();
  const router = useRouter();
  if (userLoggedIn) {
    return (
      <>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar />
        <FilterContextProvider>{children}</FilterContextProvider>
      </>
    );
  } else return <>Please Login to Continue</>;
};

export default FinderLayout;
