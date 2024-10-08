import { sharedMetadata } from "@/lib/constants/shared-meta";
import { Metadata } from "next";
import Template from "./template";

export const metadata: Metadata = {
  title: `Stack | ${sharedMetadata.title}`,
};

const Stack = () => {
  return <Template />;
};

export default Stack;
