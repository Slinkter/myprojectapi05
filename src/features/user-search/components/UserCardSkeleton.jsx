import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@/shared/components/ui";

/**
 * Componente de esqueleto para la tarjeta de usuario con efecto Shimmer.
 */
const UserCardSkeleton = () => {
  const shimmerClass = "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 dark:before:via-zinc-100/10 before:to-transparent";

  return (
    <Card className="w-full max-w-md bg-white dark:bg-zinc-900 border-gray-100 dark:border-zinc-800">
      <CardHeader className="flex flex-col items-center text-center">
        <div className={`w-28 h-28 rounded-full bg-gray-200 dark:bg-zinc-800 mb-5 ${shimmerClass}`}></div>
        <div className={`h-8 w-48 bg-gray-200 dark:bg-zinc-800 rounded-lg mb-2 ${shimmerClass}`}></div>
        <div className={`h-4 w-24 bg-gray-200 dark:bg-zinc-800 rounded-md mb-4 ${shimmerClass}`}></div>
        <div className={`h-3 w-32 bg-gray-200 dark:bg-zinc-800 rounded-md ${shimmerClass}`}></div>
      </CardHeader>

      <CardBody className="pt-0">
        <div className={`h-4 w-full bg-gray-200 dark:bg-zinc-800 rounded-md mb-2 ${shimmerClass}`}></div>
        <div className={`h-4 w-4/5 bg-gray-200 dark:bg-zinc-800 rounded-md mx-auto mb-8 ${shimmerClass}`}></div>

        <div className="grid grid-cols-3 gap-4 p-5 bg-gray-50/50 dark:bg-zinc-950/40 rounded-2xl border border-gray-100 dark:border-zinc-800/30">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`h-6 w-12 bg-gray-200 dark:bg-zinc-800 rounded-md mb-2 ${shimmerClass}`}></div>
              <div className={`h-3 w-16 bg-gray-200 dark:bg-zinc-800 rounded-md ${shimmerClass}`}></div>
            </div>
          ))}
        </div>
      </CardBody>

      <CardFooter className="p-8 pt-4">
        <div className={`h-14 w-full bg-gray-200 dark:bg-zinc-800 rounded-xl ${shimmerClass}`}></div>
      </CardFooter>
    </Card>
  );
};

export default UserCardSkeleton;
