import { Suspense } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LazyLoader =(Component: any) => (props: any) =>
   (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );


export default LazyLoader;


