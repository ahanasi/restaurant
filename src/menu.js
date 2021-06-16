const menu = () => {
  const contentDiv = document.querySelector(".content");
  const overlay = document.querySelector(".overlay");
  const mainContent = document.createElement("section");

  mainContent.classList.add("flex-col", "all-center");

  const blurb = document.createElement("p");
  blurb.classList.add("blurb", "menu", "text-center");
  blurb.textContent = "We prepare our dishes with organic produce from local farms, sustainable seafood, and natural free-range poultry and meats wherever possible";

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("flex", "menu-wrapper");

  const col1 = document.createElement("div");
  const col2 = document.createElement("div");

  col1.classList.add("column");
  col2.classList.add("column");

  col1.innerHTML = `
    
    <h2 class = "menu-section first">small plates</h2><br>

    <div class = "dish">
      <strong>summer salad (g)</strong><br>
      <p>market cucumber, peaches, heirloom tomatoes, toasted pan with summer herbs “chutney vinaigrette</p>
      <strong>14</strong><br>
      <small>peanut</small><br>
    </div>

    <div class = "dish">
      <strong>white corn soup</strong><br>
      <p>coconut milk, black pepper and cilantro</p>
      <strong>12</strong><br>
    </div>

    <div class = "dish">
      <strong>mangalore fried chicken</strong><br>
      <p>clime-chili yogurt, crispy chard, red onions and fennel</p>
      <strong>14</strong><br>
    </div>

    <div class = "dish">
      <strong>indian railway peppers</strong><br>
      <p>crispy sweet banana peppers, greek yogurt, lime, and black mustard</p>
      <strong>13</strong><br>
    </div>

    <div class = "dish">
      <strong>chutney prawn</strong><br>
      <p>spiced prawns grilled, grandma’s chutney, cucumber salad, cherry tomatoes</p>
      <strong>16</strong><br>
    </div>

    <div class = "dish">
      <strong>bombay sliders</strong><br>
      <p>spiced potato fritters, soft pav bread, tangy tamarind chutney, cilantro chutney, market salad</p>
      <strong>14</strong><br>
      <small>wheat</small><br>
    </div>

    <hr>

    <h2 class = "menu-section">sides</h2><br>

    <div class = "dish">
      <strong>papad</strong><br>
      <strong>4</strong><br>
    </div>

    <div class = "dish">
      <strong>mint & tamarind<strong><br>
      <strong>2</strong><br>
    </div>

    <div class = "dish">
      <strong>ghee & gun powder<strong><br>
      <strong>2</strong><br>
    </div>

    <div class = "dish">
      <strong>raitha<strong><br>
      <strong>3</strong><br>
    </div>

    <div class = "dish">
      <strong>coconut & tomato chutney<strong><br>
      <strong>2</strong><br>
    </div>
  `;

  col2.innerHTML = `
    
    <h2 class = "menu-section first second">uthappam / dosa | mid course</h2><br>
    <p class="dish-desc">uthappam is a thick, soft pancake. dosa is a thin crispy south Indian crepe. served with sambar and two types of house-made chutney</p>

    <div class = "dish">
      <strong>wild mushroom uthappam</strong><br>
      <p>wild and cultivated mushrooms, white truffle oil</p>
      <strong>18</strong>
    </div>

    <div class = "dish">
      <strong>seasonal uthappam</strong><br>
      <p>sweetcorn, basil, tomatoes, red skin potatoes, red onions</p>
      <strong>17</strong>
    </div>

    <div class = "dish">
      <strong>genovese basil dosa</strong><br>
      <p>basil chutney, ginger, garlic, cilantro, tamarind chutney, spiced potato masala hash</p>
      <strong>18</strong>
    </div>

    <div class = "dish">
      <strong>bollywood dosa</strong><br>
      <p>spiced potato masala hash, “ghost chili” chutney spread</p>
      <strong>18</strong>
    </div>
    
    <hr>

    <h2 class = "menu-section">main course</h2><br>

    <div class = "dish">
      <strong>malabar shrimp masala</strong><br>
      <p>gulf shrimp, onions, fresh chilies, coriander masala blend, coconut rice</p>
      <strong>32</strong>
    </div>

    <div class = "dish">
      <strong>halibut pollichathu</strong><br>
      <p>sustainably-caught halibut in banana leaf, shallot ginger spice crust, coconut rice, green beans foogath</p>
      <strong>37</strong>
    </div>


    <div class = "dish">
      <strong>rasa goat biryani</strong><br>
      <p>organic goat cooked in our masala blend with basmati rice flavored with mint and brown onions served with raitha, pickle and salna  (spiced indian gravy)</p>
      <strong>34</strong>
    </div>

    <div class = "dish">
      <strong>randhra chicken curry</strong><br>
      <p>bone-off chicken, onion, ginger, poppy seeds, cashew nuts, cilantro, coconut milk, served with kerala paratha</p>
      <strong>29</strong></br>
      <small>peanut, wheat</small><br>
    </div>

    <div class = "dish">
      <strong>butter chicken</strong><br>
      <p>marinated chicken, ginger, garlic, creamy tomato-fenugreek curry, kerala paratha</p>
      <strong>29</strong></br>
      <small>peanut, wheat</small><br>
    </div>

    <div class = "dish">
      <strong>bbq’d summer vegetable kofta curry (n, g)</strong><br>
      <p>corn, paneer, cashew nuts, fenugreek, served with basmati rice</p>
      <strong>26</strong></br>
      <small>peanut, wheat</small><br>
    </div>

    <div class = "dish">
      <strong>seasonal vegetable curry (n, g)</strong><br>
      <p>cyellow squash, cauliflower, blue lake beans, red skin potatoes served with coconut rice</p>
      <strong>26</strong></br>
    </div>




  `;

  menuWrapper.append(col1);
  menuWrapper.append(col2);

  mainContent.append(blurb);
  mainContent.append(menuWrapper);
  overlay.append(mainContent);
  contentDiv.append(overlay);

  return contentDiv;
};

export default menu;
