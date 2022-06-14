const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  console.log(date);

  document.cookie = name + "=; expires=" + date;
};

export { deleteCookie };
