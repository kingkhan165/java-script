function ageCal() {
  let b_day = parseInt(document.getElementById("day").value);
  let b_month = parseInt(document.getElementById("month").value);
  let b_year = parseInt(document.getElementById("year").value);
  showAge = document.getElementById("show_age");

  let birth = new Date(`${b_month}/${b_day}/${b_year}`); // the date-of-birth coming from input;
  let today = new Date(); // today date;

  let milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;

  // getting the remaning months
  let c_day = today.getDate();
  let c_month = 1 + today.getMonth();
  const months = [
    "31",
    "28",
    "31",
    "30",
    "31",
    "30",
    "31",
    "30",
    "31",
    "30",
    "31",
    "30",
  ];
  if (b_day > c_day) {
    x = Number(months[c_month]);
    c_day = c_day + x;
    c_month = c_month - 1;
  }

  if (b_month > c_month) {
    c_month = Math.abs(c_month + 12);
  }

  let rMonth = c_month - b_month; // the remaing moths;
  let rDay = c_day - b_day; // the remaing days;

  let d = Math.abs((today - birth) / milliDay);
  ageInDays = Math.floor(d); // total days

  // getting total years form your birth
  let y = d / 365;
  ageInYears = Math.floor(y); // age in years;

  // getting total months form your birth
  let m = y * 12;
  ageInMonth = Math.floor(m); //age in months;

  // getting total weeks form your birth
  let w = d / 7;
  ageInWeek = Math.floor(w); //age in weeks;
  let dhjd = today.getDate();

  //creaing element
  showAge.innerHTML = `YOU ARE ${rDay} days, ${rMonth} months & ${ageInYears} years </br> OR ${ageInDays} days </br> OR ${ageInMonth} months </br> OR ${ageInWeek} weeks`;

  const cal = {
    Whole_years: `${ageInYears}`,
    Days: `${ageInDays}`,
    Months: `${ageInMonth}`,
    Weeks: `${ageInWeek}`,
  };

  console.table(cal);
}

const tracker = document.querySelector(".tracker");
document.body.addEventListener("mousemove", (e) => {
  tracker.style.left = `${e.clientX}px`;
  tracker.style.top = `${e.clientY}px`;
});

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("con").style.display = "block";
}
