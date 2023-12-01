import { LoaderFunctionArgs, redirect } from "@remix-run/node";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  console.log(params)
  redirect("/")
};

export default function Auth() {
  return (
    <div></div>
  );
};