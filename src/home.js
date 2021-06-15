const homePage = () => {
  const contentDiv = document.querySelector(".content");
  const overlay = document.querySelector(".overlay");
  const mainContent = document.createElement("section");

  const tagline = document.createElement("p");
  const blurb = document.createElement("p");

  tagline.classList.add("tagline");
  blurb.classList.add("blurb");
  tagline.textContent = "a new eating experience";
  blurb.textContent = "Where exceptional service meets eclectic flavors";

  mainContent.classList.add("flex-col", "all-center");

  mainContent.append(tagline);
  mainContent.append(blurb);
  overlay.append(mainContent);
  contentDiv.append(overlay);

  return contentDiv;
};

export default homePage;
