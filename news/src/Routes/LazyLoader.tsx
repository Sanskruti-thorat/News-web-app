import { Suspense } from "react";
import { Spinner } from "react-bootstrap";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LazyLoader =(Component: any) => (props: any) =>
   (
    <Suspense fallback={<div><Spinner animation="border" /></div>}>
      <Component {...props} />
    </Suspense>
  );


export default LazyLoader;


