import { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  console.log(params)
};

export default function Auth() {
  return (
    <div></div>
  );
};