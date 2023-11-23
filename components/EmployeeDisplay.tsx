interface EmployeeDisplayProps {
  firstName: string;
  lastName: string;
  status: string;
  email: string;
}

const EmployeeDisplay: React.FC<EmployeeDisplayProps> = (data) => {
  return (
    <div>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.status}</p>
      <p>{data.email}</p>
    </div>
  );
};

export default EmployeeDisplay;
