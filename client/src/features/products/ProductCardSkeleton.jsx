import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

const ProductCarkSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 bg-(--color-surface) p-4 border border-(--color-border-subtle) rounded-xl shadow-xl">
      <SkeletonTheme baseColor="var(--color-border-subtle)" highlightColor="var(--color-canvas)">
          <div className="w-full h-48 mb-2">
            <Skeleton height="100%" borderRadius="0.75rem" />
          </div>
          <p className="text-lg">
            <Skeleton width="80%" />
          </p>
          
          <p className="text-xl">
            <Skeleton width="40%" />
          </p>
          <div className="mt-auto">
            <Skeleton height={40} borderRadius="0.75rem" />
          </div>
      </SkeletonTheme>
    </div>
  )
}

export default ProductCarkSkeleton
