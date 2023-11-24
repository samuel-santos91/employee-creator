import Link from "next/link";

export default function AddEmployee() {
  return (
    <>
      <header className="h-40 bg-slate-400 flex">
        <Link className="hover:text-blue-600" href="/employees">
          back
        </Link>
        <h1 className="m-auto">Employee Details</h1>
      </header>

      <form className="px-20">
        <section>
          <h2 className="my-3 text-2xl">Personal Information</h2>
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="text"
              id="firstname"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="midlename">Midle Name(If applicable)</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="text"
              id="midlename"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="text"
              id="lastname"
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
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">Mobile Number</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="number"
              id="phone"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address">Residential Address</label>
            <input
              className="h-8 w-56 border-2 border-black rounded-md"
              type="text"
              id="address"
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
                name="status"
                value="permanent"
                id="permanent"
              />
              <label htmlFor="permanent">Permanent</label>
            </div>

            <div>
              <input
                type="radio"
                name="status"
                value="contract"
                id="contract"
              />
              <label htmlFor="contract">Contract</label>
            </div>
          </div>

          <p className="font-bold mt-2">Start Date</p>
          <section className="flex">
            <div className="mr-2 flex flex-col">
              <label htmlFor="daystart">Day</label>
              <input
                className="h-8 w-16 border-2 border-black rounded-md"
                type="text"
                id="daystart"
              />
            </div>

            <div className="mr-2 flex flex-col">
              <label htmlFor="monthstart">Month</label>
              <select
                className="h-8 w-36 border-2 border-black rounded-md"
                name="months"
                id="monthstart"
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="yearstart">Year</label>
              <input
                className="h-8 w-16 border-2 border-black rounded-md"
                type="text"
                id="yearstart"
              />
            </div>
          </section>

          <p className="font-bold mt-2">Finish Date</p>
          <section className="flex">
            <div className="mr-2 flex flex-col">
              <label htmlFor="dayend">Day</label>
              <input
                className="h-8 w-16 border-2 border-black rounded-md"
                type="text"
                id="dayend"
              />
            </div>

            <div className="mr-2 flex flex-col">
              <label htmlFor="monthend">Month</label>
              <select
                className="h-8 w-36 border-2 border-black rounded-md"
                name="months"
                id="monthend"
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="yearend">Year</label>
              <input
                className="h-8 w-16 border-2 border-black rounded-md"
                type="text"
                id="yearend"
              />
            </div>
          </section>

          <div className="my-2">
            <input
              type="checkbox"
              name="ongoing"
              value="ongoing"
              id="ongoing"
            />
            <label className="mx-2" htmlFor="ongoing">On going</label>
          </div>

          <div className="flex flex-col">
            <p className="font-bold mt-2">Full-time or part-time basis?</p>
            <div>
              <input
                type="radio"
                name="type"
                value="fulltime"
                id="fulltime"
              />
              <label htmlFor="fulltime">Full-time</label>
            </div>

            <div>
              <input
                type="radio"
                name="type"
                value="parttime"
                id="parttime"
              />
              <label htmlFor="parttime">Part-time</label>
            </div>
          </div>

        </section>
      </form>
    </>
  );
}
