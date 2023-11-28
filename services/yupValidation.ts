import * as yup from "yup";

export const schema = yup.object({
  firstName: yup
    .string()
    .required("Please enter a first name")
    .min(2, "Username must be at least 2 characters"),

  middleName: yup.string(),

  lastName: yup.string().required("Please enter a last name"),

  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email address"),

  phone: yup
    .string()
    .required("Please enter a valid phone number")
    .matches(/^\+61\s*\d{9}$/, "Must be an Australian number with 9 digits"),

  address: yup.string(),

  status: yup.string().required(),

  ongoing: yup.boolean(),

  dayStart: yup.string().required("Please enter the start day"),
  monthStart: yup.string().required("Please enter the start month"),
  yearStart: yup
    .string()
    .required("Please enter the start year")
    .matches(/^\d+$/, "Year must be a valid number"),

  dayEnd: yup.string().when("ongoing", {
    is: false,
    then: () => yup.string().required("Please enter the finish day"),
  }),
  monthEnd: yup.string().when("ongoing", {
    is: false,
    then: () => yup.string().required("Please enter the finish month"),
  }),
  yearEnd: yup.string().when("ongoing", {
    is: false,
    then: () =>
      yup
        .string()
        .required("Please enter the finish year")
        .test(
          "is-after-start-date",
          "Finish date must be after start date",
          function (value) {
            const { dayStart, monthStart, yearStart, dayEnd, monthEnd } =
              this.parent;
            const startDate = new Date(
              `${yearStart}-${monthStart}-${dayStart}`
            );
            const finishDate = new Date(`${value}-${monthEnd}-${dayEnd}`);
            return finishDate > startDate;
          }
        ),
  }),

  type: yup.string().required("Select one option"),

  hoursPerWeek: yup.string(),
});
