import Link from "next/link";
import { useEffect } from "react";

import {
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormWatch,
  FieldErrors,
} from "react-hook-form";

interface EmployeeFormProps {
  onSubmit: SubmitHandler<Inputs>;
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  watch: UseFormWatch<Inputs>;
  errors: FieldErrors<Inputs>;
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
  setValue,
  watch,
  errors,
}) => {
  const isOngoing = watch("ongoing");

  useEffect(() => {
    if (isOngoing) {
      setValue("dayEnd", "");
      setValue("monthEnd", "");
      setValue("yearEnd", "");
    }
  }, [isOngoing, setValue]);

  return (
    <>
      <header className="h-40 bg-gray-50 flex">
        <Link
          className="flex items-center absolute m-3 p-3 h-10 rounded-md bg-blue-700 text-white"
          href="/employees"
        >
          back
        </Link>

        <h1 className="m-auto text-3xl font-bold">Employee Details</h1>
      </header>

      <form className="sm:mx-20 mx-10" onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h2 className="mt-10 mb-3 text-xl font-bold">Personal Information</h2>
          <div className="flex flex-col mb-3">
            <label className="font-bold text-sm" htmlFor="firstName">
              First Name
            </label>
            {errors.firstName && <p className="text-red-500 text-xs font-bold mb-1">{errors.firstName.message}</p>}
            <input
              className="h-9 w-56 border-2 border-black rounded-md indent-2"
              type="text"
              id="firstName"
              {...register("firstName")}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="font-bold text-sm" htmlFor="middleName">
              Middle Name(If applicable)
            </label>
            <input
              className="h-9 w-56 border-2 border-black rounded-md indent-2"
              type="text"
              id="middleName"
              {...register("middleName")}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-sm" htmlFor="lastName">
              Last Name
            </label>
            {errors.lastName && <p className="text-red-500 text-xs font-bold mb-1">{errors.lastName.message}</p>}
            <input
              className="h-9 w-56 border-2 border-black rounded-md indent-2"
              type="text"
              id="lastName"
              {...register("lastName")}
            />
          </div>
        </section>

        <section>
          <h2 className="mt-10 mb-3 text-xl font-bold">Contact Details</h2>
          <div className="flex flex-col mb-3">
            <label className="font-bold text-sm" htmlFor="email">
              Email Address
            </label>
            {errors.email && <p className="text-red-500 text-xs font-bold mb-1">{errors.email.message}</p>}
            <input
              className="h-9 w-64 border-2 border-black rounded-md indent-2"
              type="email"
              id="email"
              {...register("email")}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="font-bold text-sm" htmlFor="phone">
              Mobile Number
            </label>
            {errors.phone && <p className="text-red-500 text-xs font-bold mb-1">{errors.phone.message}</p>}
            <input
              className="h-9 w-56 border-2 border-black rounded-md indent-1"
              type="text"
              id="phone"
              placeholder="+61..."
              defaultValue="+61"
              {...register("phone")}
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="font-bold text-sm" htmlFor="address">
              Residential Address
            </label>
            <input
              className="h-9 w-10/12 sm:w-96 border-2 border-black rounded-md indent-2"
              type="text"
              id="address"
              {...register("address")}
            />
          </div>
        </section>

        <section>
          <h2 className="mt-10 mb-3 text-xl font-bold">Employee Status</h2>

          <label className="font-bold mt-2 text-sm">Contract Type</label>
          {errors.status && <p className="text-red-500 text-xs font-bold mb-1">{errors.status.message}</p>}
          <section className="flex mt-2 mb-7">
            <div className="flex items-center">
              <input
                className="h-7 w-7 mr-2"
                type="radio"
                value="permanent"
                id="permanent"
                {...register("status")}
              />
              <label className="text-sm mr-2" htmlFor="permanent">
                Permanent
              </label>
            </div>

            <div className="flex items-center">
              <input
                className="h-7 w-7 mr-2"
                type="radio"
                value="contract"
                id="contract"
                {...register("status")}
              />
              <label className="text-sm" htmlFor="contract">
                Contract
              </label>
            </div>
          </section>

          <label className="font-bold text-sm mb-2">Start Date</label>
          {errors.dayStart && <p className="text-red-500 text-xs font-bold mb-1">{errors.dayStart.message}</p>}
          {errors.monthStart && <p className="text-red-500 text-xs font-bold mb-1">{errors.monthStart.message}</p>}
          {errors.yearStart && <p className="text-red-500 text-xs font-bold mb-1">{errors.yearStart.message}</p>}
          <section className="flex mb-2">
            <div className="mr-2 flex flex-col">
              <label className="text-sm" htmlFor="dayStart">
                Day
              </label>
              <input
                className="h-9 w-16 border-2 border-black rounded-md indent-2"
                type="number"
                id="dayStart"
                {...register("dayStart")}
              />
            </div>

            <div className="mr-2 flex flex-col">
              <label className="text-sm" htmlFor="monthStart">
                Month
              </label>
              <select
                className="h-9 w-36 border-2 border-black rounded-md"
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
              <label className="text-sm" htmlFor="yearStart">
                Year
              </label>
              <input
                className="h-9 w-16 border-2 border-black rounded-md indent-2"
                type="number"
                id="yearStart"
                {...register("yearStart")}
              />
            </div>
          </section>

          <label className="text-sm font-bold mb-2">Finish Date</label>
          {errors.dayEnd && <p className="text-red-500 text-xs font-bold mb-1">{errors.dayEnd.message}</p>}
          {errors.monthEnd && <p className="text-red-500 text-xs font-bold mb-1">{errors.monthEnd.message}</p>}
          {errors.yearEnd && <p className="text-red-500 text-xs font-bold mb-1">{errors.yearEnd.message}</p>}
          <section className="flex">
            <div className="mr-2 flex flex-col">
              <label className="text-sm" htmlFor="dayEnd">
                Day
              </label>
              <input
                className="h-9 w-16 border-2 border-black rounded-md indent-2"
                type="number"
                id="dayEnd"
                {...register("dayEnd")}
              />
            </div>

            <div className="mr-2 flex flex-col">
              <label className="text-sm" htmlFor="monthEnd">
                Month
              </label>
              <select
                className="h-9 w-36 border-2 border-black rounded-md"
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
              <label className="text-sm" htmlFor="yearEnd">
                Year
              </label>
              <input
                className="h-9 w-16 border-2 border-black rounded-md indent-2"
                type="number"
                id="yearEnd"
                {...register("yearEnd")}
              />
            </div>
          </section>

          <section className="mt-4 mb-7 flex items-center">
            <input
              className="w-6 h-6"
              type="checkbox"
              id="ongoing"
              {...register("ongoing")}
            />
            <label className="mx-2 text-sm" htmlFor="ongoing">
              On going
            </label>
          </section>

          <label className="font-bold text-sm">
            Full-time or part-time basis?
          </label>
          {errors.type && <p className="text-red-500 text-xs font-bold mb-1">{errors.type.message}</p>}
          <section className="flex mb-7">
            <div className="mt-2 flex items-center">
              <input
                className="w-7 h-7 mr-2"
                type="radio"
                value="full-time"
                id="fullTime"
                {...register("type")}
              />
              <label className="mr-2 text-sm" htmlFor="fullTime">
                Full-time
              </label>
            </div>

            <div className="mt-2 flex items-center">
              <input
                className="w-7 h-7 mr-2"
                type="radio"
                value="part-time"
                id="partTime"
                {...register("type")}
              />
              <label className="text-sm" htmlFor="partTime">
                Part-time
              </label>
            </div>
          </section>

          <section className="flex flex-col">
            <label className="font-bold text-sm" htmlFor="hours">
              Hours Per Week
            </label>
            <input
              className="h-9 w-24 border-2 border-black rounded-md indent-2"
              type="number"
              id="hours"
              {...register("hoursPerWeek")}
            />
          </section>
        </section>

        <section className="flex justify-center my-6">
          <button className="m-2 p-3 w-28 rounded-md bg-blue-700 text-white">
            Save
          </button>
          <Link href="/employees">
            <button className="m-2 p-3 w-28 rounded-md bg-slate-300">
              Cancel
            </button>
          </Link>
        </section>
      </form>
    </>
  );
};

export default EmployeeForm;
