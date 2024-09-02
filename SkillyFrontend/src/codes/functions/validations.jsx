const ValidateEmail = (email) => {
  if (email.length < 7) {
    return false;
  }

  if (email[email.length - 1] === "@") {
    return false;
  }

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      return true;
    }
  }

  return false;
};

const ValidatePassword = (password) => {
  if (password.length == 0) {
    return {
      status: false,
      message: "Enter all Fields",
    };
  }
  if (password.length < 8) {
    return {
      status: false,
      message: "Password should be atleast 8 characters long",
    };
  }
  const hasNumber = /\d/;
  const hasAlphabet = /[a-zA-Z]/;
  let values = {
    num: hasNumber.test(password),
    alpha: hasAlphabet.test(password),
  };
  if (!(values.num && values.alpha)) {
    return {
      status: false,
      message: "Password should contain atleast one number and one alphabet",
    };
  }

  return {
    status: true,
    message: "Valid",
  };
};

const ValidateConfirmPassword = (password, conpass) => {
  if (password.length == 0 || conpass.length == 0) {
    return {
      status: false,
      message: "Enter all Fields",
    };
  }
  if (password !== conpass) {
    return {
      status: false,
      message: "Password and Confirm Password should be same",
    };
  }
  return {
    status: true,
    message: "Valid",
  };
};

const ValidateName = (name) => {
  if (name.length == 0) {
    return {
      status: false,
      message: "Enter all Fields",
    };
  }
  return {
    status: true,
    message: "Valid",
  };
};

export {
  ValidateEmail,
  ValidatePassword,
  ValidateConfirmPassword,
  ValidateName,
};
