import { date, number, ref, string } from "yup"

export const emailValidator = string().email().required()
export const passwordValidator = string()
  .min(10)
  .matches(
    /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[^\p{L}\d)]).*$/gu,
    "Password must contain 1 upper & 1 lower letter, 1 digit and 1 spe. char.",
  )
  .required()
export const cpassword = string()
  .oneOf([ref("password"), null], "Passwords must match")
  .required("Confirm password is required")
export const lastnameValidator = string().max(75).required()
export const firstnameValidator = string().max(75).required()
export const birthdayValidator = date().required()
export const genderValidator = string().max(50).required()
export const roleIdValidator = number().default(3).required()
