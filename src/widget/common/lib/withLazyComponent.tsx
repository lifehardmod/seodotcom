import { Suspense } from "react";

export const withLazyComponent = (importFunc: () => Promise<any>) => {
  const LazyComponent = (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      {importFunc().then((mod) => {
        const Component = mod.default;
        return <Component {...props} />;
      })}
    </Suspense>
  );
  return LazyComponent;
};
