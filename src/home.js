const homePage = () => {
  const contentDiv = document.createElement("div");
  const overlay = document.createElement("div");
  const headline = document.createElement("header");
  const mainContent = document.createElement("section");

  const h1 = document.createElement("h1");
  const tagline = document.createElement("p");
  const blurb = document.createElement("p");

  tagline.classList.add("tagline");
  blurb.classList.add("blurb");
  h1.textContent = "rasa";
  tagline.textContent = "a new eating experience";
  blurb.textContent = "Where exceptional service meets eclectic flavors";

  contentDiv.classList.add("content");
  overlay.classList.add("overlay");
  headline.classList.add("headline");
  mainContent.classList.add("flex-col", "all-center");

  headline.append(h1);

  mainContent.append(tagline);
  mainContent.append(blurb);
  overlay.append(headline);
  overlay.append(mainContent);
  contentDiv.append(overlay);

  return contentDiv;
};

export default homePage
