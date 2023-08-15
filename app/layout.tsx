"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import { AuthContextProvider } from "@/context/auth/AuthContext";
import { ChatContextProvider } from "@/context/chat/ChatContext";
import MessageBox from "../components/Message/MessageBox";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContextProvider>
          <ChatContextProvider>
            <MessageBox/>
            {children}
            <div id="portal"></div>
          </ChatContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
