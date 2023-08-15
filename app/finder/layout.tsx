"use client";
import Message from "@/components/Message/MessageBox";
import Navbar from "@/components/Navbar";
import { AuthContext } from "@/context/auth/AuthContext";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { FilterContextProvider } from "@/context/filter/FilterContext";
interface Props {
  children: React.ReactNode;
}
import { ChatContextProvider } from "@/context/chat/ChatContext";

const FinderLayout: React.FC<Props> = ({ children }) => {
  const { userLoggedIn } = useAuth();
  const router = useRouter();
  if (userLoggedIn) {
    return (
      <>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar />
        <FilterContextProvider>
          <ChatContextProvider>{children}</ChatContextProvider>
        </FilterContextProvider>
      </>
    );
  } else return <>Please Login to Continue</>;
};

export default FinderLayout;
