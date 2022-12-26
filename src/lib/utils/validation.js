export const regExp = {
  email:
    /^((?:[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/gm, // RFC 5322
  password: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/, // 8~15자리 사이의 영문과 특수문자 포함
  cellPhone: /^\d{3}-\d{3,4}-\d{4}$/,
  areaPhone: /^\d{2,3}-\d{3,4}-\d{4}$/,
};

export const isValid = (content) => ({
  email: regExp.email.test(content),
  password: regExp.password.test(content),
  cellPhone: regExp.cellPhone.test(content),
  areaPhone: regExp.areaPhone.test(content),
});
