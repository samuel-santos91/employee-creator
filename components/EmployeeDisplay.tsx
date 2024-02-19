import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";

import { timePeriod } from "@/services/timePeriod";
import { Dispatch, SetStateAction } from "react";
interface EmployeeDisplayProps {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
  startDate: string;
  finishDate: string;
  onDelete: (id: number) => void;
}

const EmployeeDisplay: React.FC<EmployeeDisplayProps> = (props) => {
  const {
    id,
    firstName,
    lastName,
    status,
    email,
    startDate,
    finishDate,
    onDelete,
  } = props;
  const router = useRouter();

  const timeAtTheCompany = timePeriod(startDate, finishDate);

  return (
    <div className="bg-blue-100 m-3 p-3 rounded-md flex justify-between items-center border-solid border-2 border-blue-200">
      <article>
        <div className="mb-2 flex">
          <p className="mr-1">{firstName}</p>
          <p>{lastName}</p>
        </div>

        <div className="mb-2 flex items-center text-sm text-gray-500">
          <p className="mr-1">{status} - </p>
          <p>{timeAtTheCompany}</p>
        </div>

        <p>{email}</p>
      </article>

      <section className="flex flex-col">
        <button
          className="m-3 mb-0 p-2 rounded-md bg-blue-700 text-white"
          onClick={() => router.push(`employees/${id}`)}
        >
          Edit
        </button>

        <button
          className="bg-red-500 m-3 p-2 rounded-md text-white"
          onClick={() => onDelete(id)}
        >
          Remove
        </button>
      </section>
    </div>
  );
};

export default EmployeeDisplay;
