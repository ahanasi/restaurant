const homePage = () => {
  const contentDiv = document.querySelector(".content");
  const overlay = document.querySelector(".overlay");
  const mainContent = document.createElement("section");

  const tagline = document.createElement("p");
  const descWrapper = document.createElement("div");
  const desc = document.createElement("p");

  tagline.classList.add("tagline");
  desc.classList.add("blurb");
  descWrapper.classList.add("desc-wrapper","text-center");

  tagline.textContent = "a new eating experience";
  desc.textContent =
    "To craft our menu, we traveled up and down India’s coast, from Kerala to Hyderabad and beyond. The foods from these regions boasted an arsenal of flavors like none other – curries that were simultaneously spicy yet cooling, fresh seafood prepared in homemade chutney, crisp dosas with hearty, warm sambar. We combined the best flavors and preparations from these regions and beyond and created a dining destination that honors Indian cuisine and tradition.";

  mainContent.classList.add("flex-col", "all-center");

  descWrapper.append(desc);

  mainContent.append(tagline);
  mainContent.append(descWrapper);
  overlay.append(mainContent);
  contentDiv.append(overlay);

  return contentDiv;
};

export default homePage;
