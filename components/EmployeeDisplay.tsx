import { useRouter } from "next/navigation";

import { timePeriod } from "@/services/timePeriod";
interface EmployeeDisplayProps {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
  startDate: string;
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
    onDelete,
  } = props;
  const router = useRouter();

  const timeAtTheCompany = timePeriod(startDate);

  return (
    <div className="bg-slate-200 m-3 p-3 rounded-md flex justify-between">
      <article>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{timeAtTheCompany}</p>
        <p>{status}</p>
        <p>{email}</p>
      </article>
      <section>
        <button
          className="bg-white m-3 p-2 rounded-md"
          onClick={() => router.push(`employees/${id}`)}
        >
          Edit
        </button>
        <button
          className="bg-white m-3 p-2 rounded-md"
          onClick={() => onDelete(id)}
        >
          Remove
        </button>
      </section>
    </div>
  );
};

export default EmployeeDisplay;
