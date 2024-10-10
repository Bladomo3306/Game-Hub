let randCharacter;

const characters = [
    {
        name: "Naruto",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Naruto.jpg",
        personality: "This ninja is known for his dream of becoming the Hokage and has a powerful nine-tailed fox sealed inside him.",
        appearance: "Spiky blond hair, blue eyes, and a signature orange jumpsuit.",
        trivia: "This character was inspired by the Japanese mythological creature called the nine-tailed fox.",
        anime: "Naruto"
    },
    {
        name: "Gojo",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Gojo.png",
        personality: "A powerful sorcerer known for his laid-back attitude and incredible strength.",
        appearance: "White hair, blindfold or sunglasses, and a high-collared black outfit.",
        trivia: "Considered one of the strongest characters in his universe, he often toys with his opponents.",
        anime: "Jujutsu Kaisen"
    },
    {
        name: "Emilia",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Emilia.jpg",
        personality: "A half-elf who is kind-hearted and determined to save her world.",
        appearance: "Long silver hair, violet eyes, and a beautiful white dress.",
        trivia: "She is a half-elf and a candidate to become the 42nd king of the Dragon Kingdom of Lugunica in the Royal Selection.",
        anime: "Re:Zero - Starting Life in Another World"
    },
    {
        name: "Kakashi",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Kakashi.jpg",
        personality: "A skilled ninja known for his laid-back attitude and sharingan eye.",
        appearance: "Silver hair, mask covering the lower half of his face, and usually in a jounin uniform.",
        trivia: "He is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility.",
        anime: "Naruto"
    },
    {
        name: "Saitama",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Saitama.jpg",
        personality: "A hero who can defeat any enemy with a single punch but struggles with boredom.",
        appearance: "Bald head, yellow jumpsuit, and a red cape.",
        trivia: "This character's training routine is famously simple: 100 push-ups, 100 sit-ups, 100 squats, and a 10 km run every day.",
        anime: "One Punch Man"
    },
    {
        name: "Luffy",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Luffy.png",
        personality: "An adventurous pirate with a strong sense of justice and an unyielding dream to become the Pirate King.",
        appearance: "Black hair, straw hat, and a red vest.",
        trivia: "He believes that being the Pirate King means having the most freedom in the world.",
        anime: "One Piece"
    },
    {
        name: "Deku",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Deku.jpg",
        personality: "A determined hero-in-training who believes in hard work and perseverance.",
        appearance: "Green hair, freckles, and wears a hero costume with a mask.",
        trivia: "He manages to catch the attention of the legendary hero due to his innate heroism and a strong sense of justice.",
        anime: "My Hero Academia"
    },
    {
        name: "Rem",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Rem.gif",
        personality: "A loyal maid with a gentle heart and fierce determination to protect her loved ones.",
        appearance: "Blue hair tied in a ribbon, a maid outfit, and a gentle smile.",
        trivia: "This character has an older sister who is also a maid and has a contrasting personality, leading to interesting dynamics.",
        anime: "Re:Zero - Starting Life in Another World"
    },
    {
        name: "Levi",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Levi.png",
        personality: "A skilled soldier known for his no-nonsense attitude and incredible combat skills.",
        appearance: "Short black hair, a stern expression, and a military uniform.",
        trivia: "Renowned as humanity's strongest soldier, he is famous for his clean freak habits and his unparalleled strength in battle.",
        anime: "Attack on Titan"
    },
    {
        name: "Mikasa",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Mikasa.gif",
        personality: "A fierce and protective fighter with a deep loyalty to her friends.",
        appearance: "Dark hair, a red scarf, and military attire.",
        trivia: "She is considered the best soldier among the 104th Training Corps.",
        anime: "Attack on Titan"
    },
    {
        name: "Tanjiro",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Tanjiro.jpg",
        personality: "A compassionate slayer who seeks to save others from suffering.",
        appearance: "Black hair with a distinctive green checkered haori.",
        trivia: "He has an exceptional sense of smell, which aids him in detecting emotions and locating enemies.",
        anime: "Demon Slayer"
    },
    {
        name: "Nezuko",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Nezuko.png",
        personality: "A kind-hearted demon who retains her humanity.",
        appearance: "Long black hair, pink kimono, and a bamboo muzzle.",
        trivia: "This character can shrink her body size and has developed unique powers, allowing her to fight alongside her brother.",
        anime: "Demon Slayer"
    },
    {
        name: "Light",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Light.jpg",
        personality: "A genius student with a strong sense of justice, willing to take matters into his own hands.",
        appearance: "Brown hair, sharp eyes, and usually in a school uniform.",
        trivia: "This character has an alter ego while he seeks to cleanse the world of evil.",
        anime: "Death Note"
    },
    {
        name: "Goku",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Goku.jpg",
        personality: "A warrior known for his insatiable appetite for battle and kindness.",
        appearance: "Spiky black hair, orange gi, and a cheerful smile.",
        trivia: "Raised as a human, he is actually an alien. He loves fighting strong opponents.",
        anime: "Dragon Ball"
    },
    {
        name: "Ichigo",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Ichigo.jpg",
        personality: "Has a strong sense of duty and determination to protect his friends.",
        appearance: "Orange hair, black and white uniform.",
        trivia: "This character's powers are tied to his family heritage, making him a unique warrior.",
        anime: "Bleach"
    },
    {
        name: "Shinra",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Shinra.png",
        personality: "A young kid with a dream of becoming a hero and fighting to avenge his mother and brother.",
        appearance: "A slim muscular build with short and spiky black hair, crimson eyes, and especially sharp teeth.",
        trivia: "After his mother's death, and supposedly his younger brother's as well, he fights to save people from Spontaneous Human Combustion.",
        anime: "Fire Force"
    },
    {
        name: "Sakura",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Sakura.jpg",
        personality: "A determined person with exceptional medical skills and a fierce loyalty to her friends.",
        appearance: "Pink hair, green eyes, and a red outfit.",
        trivia: "She found herself illprepared for her duties, though becomes recognised as one of the greatest medical-nin in the world.",
        anime: "Naruto"
    },
    {
        name: "Inosuke",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Inosuke.jpg",
        personality: "A wild fighter who wears an animal's head and is known for his brashness and bravery.",
        appearance: "Black hair, boar mask, and muscular build.",
        trivia: "He has a unique fighting style that often relies on instinct and unpredictability, as well as sawing with his broken swords.",
        anime: "Demon Slayer"
    },
    {
        name: "Yumeko",
        imageUrl: "../../../Images/GameSprites/AnimeCharacters/Yumeko.jpg",
        personality: "Fearless, confident, unpredictable, and a compulsive gambler who derives intense thrill from high-stakes risks despite her polite and charming demeanor.",
        appearance: "Long black hair, red eyes, and a slender build. She is usually seen wearing the private academy uniform, consisting of a red blazer and black skirt.",
        trivia: "Her gambling skills are unmatched, and she possesses an uncanny ability to read her opponents' behavior. Her true goal is not wealth, but the excitement and chaos of gambling.",
        anime: "Kakegurui"
    }
];


function startGame() {
    // Generate a random index based on the number of characters
    const randomIndex = Math.floor(Math.random() * characters.length);
    // Select the character at the random index
    randCharacter = characters[randomIndex];

    document.getElementById('startGame').style.display = 'none';
    document.getElementById('playAgain').style.display = 'none';
    document.getElementById('revealAnswer').style.display = 'none';
    document.getElementById('characterImage').style.display = 'none';  // Clear previous image

    document.getElementById('playerGuess').style.display = 'block';
    document.getElementById('guessButton').style.display = 'block';

    // Display the character's hint (notes) but hide the name and image
    document.getElementById('characterPersonality').textContent = "Personality: " + randCharacter.personality;
    document.getElementById('characterAppearance').textContent = ""
    document.getElementById('characterTrivia').textContent = ""
    document.getElementById('characterAnime').textContent = ""
    document.getElementById('characterName').textContent = "";  // Clear previous name
    document.getElementById('characterImage').src = "";  // Clear previous image
    document.getElementById('feedback').textContent = "";  // Clear previous feedback

    // Clear the guess input field
    document.getElementById('playerGuess').value = "";
}

function submitGuess() {
    // Get the user's guess
    var userGuess = document.getElementById('playerGuess').value.trim().toLowerCase();
    document.getElementById('playerGuess').value = "";

    // Check if the guess is correct (case-insensitive comparison)
    if (userGuess === randCharacter.name.toLowerCase()) {
        document.getElementById('feedback').textContent = "Correct! You guessed the character!";
        document.getElementById('characterName').textContent = "Character: " + randCharacter.name;
        document.getElementById('characterImage').src = randCharacter.imageUrl;
        document.getElementById('characterImage').style.display = 'block';
        document.getElementById('characterImage').alt = randCharacter.name + " Image";
        document.getElementById('playAgain').style.display = 'block';

    } else {
        if (document.getElementById('characterAnime').textContent != ""){
            document.getElementById('revealAnswer').style.display = 'block';
        }
        document.getElementById('feedback').textContent = "Wrong guess! Try again.";
        if (document.getElementById('characterTrivia').textContent != ""){
            document.getElementById('characterAnime').textContent = "Anime: " + randCharacter.anime;
        }
        if (document.getElementById('characterAppearance').textContent != ""){
            document.getElementById('characterTrivia').textContent = "Trivia: " + randCharacter.trivia;
        }
        document.getElementById('characterAppearance').textContent = "Appearance: " + randCharacter.appearance;
    }
}

function revealAnswer(){
    document.getElementById('characterName').textContent = "Character: " + randCharacter.name;
    document.getElementById('characterImage').src = randCharacter.imageUrl;
    document.getElementById('characterImage').style.display = 'block';
    document.getElementById('characterImage').alt = randCharacter.name + " Image";
    document.getElementById('playAgain').style.display = 'block';
}
