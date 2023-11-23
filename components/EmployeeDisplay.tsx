import { deleteEmployee } from "@/services/api";

interface EmployeeDisplayProps {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
}

const EmployeeDisplay: React.FC<EmployeeDisplayProps> = (data) => {
  const deleteDataHandler = async (id: number) => {
    await deleteEmployee(id)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div className="bg-slate-200 m-3 p-3 rounded-md flex justify-between">
      <article>
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        <p>{data.status}</p>
        <p>{data.email}</p>
      </article>
      <section>
        <button className="bg-white m-3 p-2 rounded-md">Edit</button>
        <button
          className="bg-white m-3 p-2 rounded-md"
          onClick={() => deleteDataHandler(data.id)}
        >
          Remove
        </button>
      </section>
    </div>
  );
};

export default EmployeeDisplay;
