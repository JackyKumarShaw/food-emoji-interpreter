import React, { useState } from "react";
import "./styles.css";

const foodEmojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🍼": "Baby Bottle",
  "🥛": "Glass of Milk",
  "☕": "Hot Beverage",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧃": "Beverage Box",
  "🧉": "Mate",
  "🧊": "Ice",
  "🥢": "Chopsticks",
  "🍽️": "Fork and Knife with Plate",
  "🍴": "Fork and Knife",
  "🥄": "Spoon"
};

//converting foodEmojiDictionary object into an Array so that we can map on it.
const foodEmojiKnown = Object.keys(foodEmojiDictionary);

export default function App() {
  const [userEmoji, setUserEmoji] = useState("");
  const [emojiMeaning, setEmojiMeaning] = useState(
    "the translation will come here.."
  );
  function onChangeHandler(eventThatHappened) {
    var inputedEmoji = eventThatHappened.target.value;
    setUserEmoji(inputedEmoji);

    if (inputedEmoji in foodEmojiDictionary) {
      setEmojiMeaning(foodEmojiDictionary[inputedEmoji]);
    } else {
      setEmojiMeaning("This food emoji is not in our database!");
    }
  }

  function clickedFoodHandler(clickedFood) {
    setUserEmoji(clickedFood);
    setEmojiMeaning(foodEmojiDictionary[clickedFood]);
  }

  function getBg(currentIndex) {
    if (currentIndex % 2 === 0) {
      return "#FBCFE8";
    } else {
      return "#A7F3D0";
    }
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>stuck at what a food emoji means?</h1>
      <input
        keys={userEmoji}
        onChange={onChangeHandler}
        placeholder={"enter your food emoji here to know what it means..."}
      ></input>
      <h2 style={{ fontSize: "3rem" }}>{userEmoji}</h2>
      <h3
        style={{
          color: "green",
          fontStyle: "italic",
          margin: "1rem",
          fontFamily: "Montserrat , sans-serif"
        }}
      >
        {emojiMeaning}
      </h3>
      {/* now we are going to dislay our food-emoji-database so that user can just click and know the emoji Meaning */}

      <h2 style={{ color: "yellow" }}>Food Emoji's in our Database</h2>
      {foodEmojiKnown.map((eachKey, indexofEachKey) => {
        return (
          <span
            key={eachKey}
            onClick={() => clickedFoodHandler(eachKey)}
            style={{
              backgroundColor: getBg(indexofEachKey),
              border: "blue ridge 0.2rem",
              cursor: "pointer"
            }}
          >
            {eachKey}
          </span>
        );
      })}
    </div>
  );
}
