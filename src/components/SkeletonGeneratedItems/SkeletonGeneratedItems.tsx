import { Skeleton } from "../ui/skeleton";

const SkeletonGeneratedItems = () => {
  return (
    <div className="flex items-center gap-3 p-2">
      <Skeleton className="h-14 w-14 rounded-[16px]" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-50" />
        <Skeleton className="h-4 w-75" />
      </div>
      <Skeleton className="ml-auto h-5 w-5 rounded-full" />
    </div>
  );
};

export default SkeletonGeneratedItems;
