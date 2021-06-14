const hoursLoc = () => {
  const contentDiv = document.createElement("div");
  const overlay = document.createElement("div");
  const headline = document.createElement("header");
  const mainContent = document.createElement("section");

  const h1 = document.createElement("h1");
  h1.textContent = "rasa";

  const h2 = document.createElement("h2");
  h2.textContent = "hours & location";

  const locWrapper = document.createElement("p");
  const address = document.createElement("a");
  const tel = document.createElement("a");

  locWrapper.classList.add("locWrapper")

  address.classList.add("address", "flex-col", "text-center");
  tel.classList.add("address", "flex-col", "text-center");

  address.innerHTML = `209 Park Rd,<br>
    Burlingame, CA 94010`;
  address.href = "http://www.google.com/maps/search/209%20Park%20Rd%2C%20Burlingame%2C%20CA%2094010";

  tel.textContent = "650-340-7272";
  tel.href = "tel:650-340-7272";

  contentDiv.classList.add("content");
  overlay.classList.add("overlay");
  headline.classList.add("headline");
  mainContent.classList.add("flex-col", "all-center");

  headline.append(h1);

  mainContent.append(h2);
  locWrapper.append(address);
  locWrapper.append(tel);
  mainContent.append(locWrapper);

  overlay.append(headline);
  overlay.append(mainContent);
  contentDiv.append(overlay);

  return contentDiv;
};

export default hoursLoc;
