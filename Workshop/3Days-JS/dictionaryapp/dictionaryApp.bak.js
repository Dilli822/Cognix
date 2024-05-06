

// // https://www.instagram.com/p/C4LK4lmvytN/
// https://www.instagram.com/p/C2mmPlsNg3J/?img_index=6
// https://www.instagram.com/p/C0IU1FhtRP9/
// https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/
// https://www.instagram.com/p/CdXcTzVqv5j/?img_index=7
// https://www.youtube.com/watch?v=POFCI1jtH20
// https://static.javatpoint.com/javascriptpages/images/what-is-a-promise-in-javascript.png


// https://www.w3schools.com/js/js_callback.asp
// promise, async and await
// https://dev-to-uploads.s3.amazonaws.com/i/z51d1v0jf07b43bfhfuu.gif
// https://www.freecodecamp.org/news/how-to-create-a-chatbot-with-the-chatgpt-api/

async function loadJSONData() {
  try {
    const response = await fetch("./merged.json");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error loading JSON data:", error);
    return null;
  }
}

function binarySearch(words, element) {
  let low = 0;
  let high = words.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midElement = words[mid];
    let lowElement = words[low];

    console.log(
      `Searching for "${element}". Current Low: "${low}"  "${lowElement}"`
    );

    console.log(
      `Searching for "${element}". Current mid: "${midElement}", Current Low: "${low}"`
    );

    console.log(
      `Searching for "${element}". Current mid: "${midElement}", Current Low: "${low}"`
    );

    if (midElement === element) {
      return midElement;
    }
    if (midElement < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
}

function extractWordDetails(wordDetails) {
  const meanings = [];
  const antonyms = [];
  const synonyms = [];

  if (wordDetails.MEANINGS) {
    if (Array.isArray(wordDetails.MEANINGS)) {
      wordDetails.MEANINGS.forEach((meaning) => {
        if (Array.isArray(meaning) && meaning.length > 0) {
          meanings.push(meaning.join(", "));
        }
      });
    } else if (typeof wordDetails.MEANINGS === "object") {
      Object.values(wordDetails.MEANINGS).forEach((meaning) => {
        if (Array.isArray(meaning) && meaning.length > 0) {
          meanings.push(meaning.join(", "));
        }
      });
    }
  }

  if (wordDetails.ANTONYMS && Array.isArray(wordDetails.ANTONYMS)) {
    antonyms.push(...wordDetails.ANTONYMS);
  }

  if (wordDetails.SYNONYMS && Array.isArray(wordDetails.SYNONYMS)) {
    synonyms.push(...wordDetails.SYNONYMS);
  }

  return { meanings, antonyms, synonyms };
}

async function main() {
  const jsonData = await loadJSONData();
  if (!jsonData) {
    console.log("Failed to load JSON data.");
    return;
  }

  const words = Object.keys(jsonData);
  const totalWords = words.length;
  console.log(`Total number of words in the JSON data: ${totalWords}`);
  console.log("Words in the JSON data:", words);

  const wordtosearch = "river";
  const wordToSearch = wordtosearch.toUpperCase();
  const foundWord = binarySearch(words, wordToSearch);

  if (foundWord === null) {
    console.log(`The word "${wordToSearch}" was not found in the JSON data.`);
  } else {
    const wordDetails = jsonData[foundWord];
    const { meanings, antonyms, synonyms } = extractWordDetails(wordDetails);

    console.log(`Word: ${foundWord}`);
    console.log("Meanings:", meanings);
    console.log("Antonyms:", antonyms);
    console.log("Synonyms:", synonyms);
  }
}

main();


