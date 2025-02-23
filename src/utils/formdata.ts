export const getFormDataVal = (formData: FormData, name: string) => {
  return formData.get(name)?.toString().trim() ?? "";
};
