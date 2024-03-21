"use server";
// register controller

export const registerUser = async (currentValue: any, formData: FormData) => {
  const { full_name, phone_number, country_code, privacy_checkbox } =
    Object.fromEntries(formData);
  const userInfo = {
    full_name,
    phone_number,
    country_code,
    privacy_checkbox,
  };
  console.log(userInfo);
};
