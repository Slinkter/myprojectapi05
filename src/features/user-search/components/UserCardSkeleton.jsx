import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@/shared/components/ui";

/**
 * Componente de esqueleto para la tarjeta de usuario.
 *
 * **Funcionalidad:**
 * - Proporciona una representación visual de la carga de la `UserCard`
 * - Utiliza animación de pulso para indicar el estado de carga
 * - Mantiene la misma estructura y layout que `UserCard` para evitar saltos de contenido (CLS)
 *
 * @returns {JSX.Element} El componente de esqueleto de la tarjeta
 */
const UserCardSkeleton = () => {
  return (
    <Card className="w-full max-w-md bg-white dark:bg-gray-800 animate-pulse">
      <CardHeader className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 mb-3"></div>
        <div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
        <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        <div className="h-3 w-32 bg-gray-300 dark:bg-gray-700 rounded-md mt-2"></div>
      </CardHeader>

      <CardBody>
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
        <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded-md mb-6"></div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="h-6 w-12 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
            <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-6 w-12 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
            <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-6 w-12 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
            <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
        </div>
      </CardBody>

      <CardFooter>
        <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      </CardFooter>
    </Card>
  );
};

export default UserCardSkeleton;
