import { Suspense, ComponentType } from "react";

export function withLazyComponent<T extends object>(
  importFunc: () => Promise<{ default: ComponentType<T> }>
) {
  const LazyComponent = (props: T) => (
    <Suspense fallback={<div>Loading...</div>}>
      {importFunc().then((mod) => {
        const Component = mod.default;
        return <Component {...props} />;
      })}
    </Suspense>
  );
  return LazyComponent;
}
