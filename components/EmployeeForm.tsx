import Link from "next/link";

import { SubmitHandler, UseFormRegister, UseFormHandleSubmit } from "react-hook-form";

interface EmployeeFormProps {
  onSubmit: SubmitHandler<Inputs>;
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>
}

interface Inputs {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  status: string;
  dayStart: string;
  monthStart: string;
  yearStart: string;
  dayEnd: string;
  monthEnd: string;
  yearEnd: string;
  ongoing?: boolean;
  type: string;
  hoursPerWeek?: string;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  register,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <>
      <header className="h-40 bg-slate-400 flex">
        <Link className="hover:text-blue-600" href="/employees">
          back
        </Link>
        <h1 className="m-auto">Employee Details</h1>
      </header>

      <form className="px-20" onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h2 className="my-3 text-2xl">Personal Information</h2>
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="text"
              id="firstName"
              {...register("firstName")}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="middleName">Middle Name(If applicable)</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="text"
              id="middleName"
              {...register("middleName")}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="text"
              id="lastName"
              {...register("lastName")}
            />
          </div>
        </section>

        <section>
          <h2 className="my-3 text-2xl">Contact Details</h2>
          <div className="flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="email"
              id="email"
              {...register("email")}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">Mobile Number</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="text"
              id="phone"
              {...register("phone")}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address">Residential Address</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="text"
              id="address"
              {...register("address")}
            />
          </div>
        </section>
        <section>
          <h2 className="my-3 text-2xl">Employee Status</h2>
          <div className="flex flex-col">
            <p className="font-bold mt-2">Contract Type</p>
            <div>
              <input
                type="radio"
                value="permanent"
                id="permanent"
                {...register("status")}
              />
              <label htmlFor="permanent">Permanent</label>
            </div>

            <div>
              <input
                type="radio"
                value="contract"
                id="contract"
                {...register("status")}
              />
              <label htmlFor="contract">Contract</label>
            </div>
          </div>

          <p className="font-bold mt-2">Start Date</p>
          <section className="flex">
            <div className="mr-2 flex flex-col">
              <label htmlFor="dayStart">Day</label>
              <input
                className="h-8 w-16 border-2 border-black rounded-md"
                type="number"
                id="dayStart"
                {...register("dayStart")}
              />
            </div>

            <div className="mr-2 flex flex-col">
              <label htmlFor="monthStart">Month</label>
              <select
                className="h-8 w-36 border-2 border-black rounded-md"
                id="monthStart"
                {...register("monthStart")}
              >
                <option value="">Select Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="yearStart">Year</label>
              <input
                className="h-8 w-16 border-2 border-black rounded-md"
                type="number"
                id="yearStart"
                {...register("yearStart")}
              />
            </div>
          </section>

          <p className="font-bold mt-2">Finish Date</p>
          <section className="flex">
            <div className="mr-2 flex flex-col">
              <label htmlFor="dayEnd">Day</label>
              <input
                className="h-8 w-16 border-2 border-black rounded-md"
                type="number"
                id="dayEnd"
                {...register("dayEnd")}
              />
            </div>

            <div className="mr-2 flex flex-col">
              <label htmlFor="monthEnd">Month</label>
              <select
                className="h-8 w-36 border-2 border-black rounded-md"
                id="monthEnd"
                {...register("monthEnd")}
              >
                <option value="">Select Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="yearEnd">Year</label>
              <input
                className="h-8 w-16 border-2 border-black rounded-md"
                type="number"
                id="yearEnd"
                {...register("yearEnd")}
              />
            </div>
          </section>

          <div className="my-2">
            <input
              type="checkbox"
              id="ongoing"
              {...register("ongoing")}
            />
            <label className="mx-2" htmlFor="ongoing">
              On going
            </label>
          </div>

          <div className="flex flex-col">
            <p className="font-bold mt-2">Full-time or part-time basis?</p>
            <div>
              <input
                type="radio"
                value="full-time"
                id="fullTime"
                {...register("type")}
              />
              <label htmlFor="fullTime">Full-time</label>
            </div>

            <div>
              <input
                type="radio"
                value="part-time"
                id="partTime"
                {...register("type")}
              />
              <label htmlFor="partTime">Part-time</label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-bold mt-2" htmlFor="hours">
              Hours Per Week
            </label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="number"
              id="hours"
              {...register("hoursPerWeek")}
            />
          </div>
        </section>

        <section className="flex justify-center">
          <button className="m-2 p-3 w-28 bg-blue-600 text-white">Save</button>
          <Link href="/employees">
            <button className="m-2 p-3 w-28 bg-slate-300">Cancel</button>
          </Link>
        </section>
      </form>
    </>
  );
};

export default EmployeeForm;
