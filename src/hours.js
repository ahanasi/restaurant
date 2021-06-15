const hoursLoc = () => {

  const contentDiv = document.querySelector(".content")
  const overlay = document.querySelector(".overlay");
  const mainContent = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = "hours & location";

  const locWrapper = document.createElement("p");
  const address = document.createElement("a");
  const tel = document.createElement("a");
  const days = document.createElement("p");

  locWrapper.classList.add("locWrapper");

  address.classList.add("address", "flex-col", "text-center");
  tel.classList.add("address", "flex-col", "text-center");

  address.innerHTML = `209 Park Rd,<br>
    Burlingame, CA 94010`;
  address.href = "http://www.google.com/maps/search/209%20Park%20Rd%2C%20Burlingame%2C%20CA%2094010";

  tel.textContent = "650-340-7272";
  tel.href = "tel:650-340-7272";

  days.innerHTML = `<strong>TUES - SUNDAY</strong><br> 
  <strong>LUNCH:</strong> (Takeout Only)<br>
  12:00 PM - 3:00PM<br>
  <strong>BRUNCH: (Sat - Sun)</strong><br>
  <strong>NOW even Saturday - Starting 04/02/21</strong><br>
  12:00 PM - 3:00PM<br>
  <strong>DINNER:</strong><br>
  4:30 PM - 8:30PM<br>
  <strong>FRI - SAT:</strong><br>
  4:30 PM - 9:30PM<br>`;

  mainContent.classList.add("flex-col", "all-center");
  days.classList.add("text-center");

  mainContent.append(h2);
  locWrapper.append(address);
  locWrapper.append(tel);
  locWrapper.append(days);
  mainContent.append(locWrapper);

  overlay.append(mainContent);
  contentDiv.append(overlay);

  return contentDiv;
};

export default hoursLoc;
