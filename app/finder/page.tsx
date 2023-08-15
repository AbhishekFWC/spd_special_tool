'use client'
import { useRouter } from "next/navigation";
const Finder = () => {
    const router = useRouter()
    router.push('/investors')
  return null;
};

export default Finder;
