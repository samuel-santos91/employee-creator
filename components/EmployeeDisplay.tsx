interface EmployeeDisplayProps {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
  onDelete: (id: number) => void;
}

const EmployeeDisplay: React.FC<EmployeeDisplayProps> = (props) => {
  const { id, firstName, lastName, status, email, onDelete } = props;

  return (
    <div className="bg-slate-200 m-3 p-3 rounded-md flex justify-between">
      <article>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{status}</p>
        <p>{email}</p>
      </article>
      <section>
        <button className="bg-white m-3 p-2 rounded-md">Edit</button>
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
