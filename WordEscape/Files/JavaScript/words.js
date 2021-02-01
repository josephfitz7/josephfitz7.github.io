//This is just the list of words in the game

var wordList = ["sneak", "silly", "rice", "easy", "empty", "nurse", "endure", "hapless", "anxious", "apply", "weather", "typeset", "jail", "stiff", "cash", "foolish", "crowd", "damp", "reflective", "tidy", "hospital", "stupendous", "throne", "ground", "courageous", "protest", "rest", "petite", "erect", "earthy", "false", "curved", "adamant", "material", "stick","inscribe", "premium", "pail", "thunder", "step", "conspire", "agree", "agonizing", "bless", "naive", "depressed", "signal", "implore", "town", "volatile ","store", "wet", "shallow", "afraid", "prohibit", "abundant", "gainsay", "tiny", "ground", "map", "twist", "airport", "capable", "chip", "anxious", "march", "obscene", "classify", "nauseating", "porter", "scrub", "pancake", "good-bye", "thunder", "selection", "flagrant", "attack", "caption", "upset", "lying", "trains", "match","illegal", "bridge", "woozy", "assort", "oppress", "subtract", "invent", "mountain", "bear", "reduce", "mouth", "tremendous", "political", "sassy", "swallow", "kindhearted", "neck", "silly"];

var animalList = ["alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah", "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin", "duck", "eagle", "elephant", "fish", "fly", "fox", "frog", "giraffe", "goat", "goldfish", "hamster", "hippopotamus", "horse", "kangaroo", "kitten", "leopard", "lion", "lizard", "lobster", "monkey", "octopus", "ostrich", "otter", "owl", "oyster", "panda", "parrot", "pelican", "pig", "pigeon", "porcupine", "puppy", "rabbit", "rat", "reindeer", "rhinoceros", "rooster", "scorpion", "seal", "shark", "sheep", "shrimp", "snail", "snake", "sparrow", "spider", "squid", "squirrel", "swallow", "swan", "tiger", "toad", "tortoise", "turtle", "vulture", "walrus", "weasel", "whale", "wolf", "zebra"];

var birdList = ["albatross", "buzzard", "chick", "condor", "cormorant", "crow", "crow", "drake", "duck", "duckling", "eagle","falcon", "gander", "goose", "gosling", "grouse", "hawk", "hen", "heron", "partridge", "pelican", "pheasant", "ptarmigan", "puffin", "quail", "raven", "seagull", "sparrow", "swallow", "swan", "turkey", "vulture"] ;

var bodyList = ["ankle", "arm", "back", "beard", "blood", "body", "bone", "brain", "cheek", "chest", "chin", "ear", "ears", "elbow", "eye", "eyes", "face", "feet", "finger", "fingers", "flesh", "foot", "hair", "hand", "hands", "head", "heart", "hip", "knee", "knees", "leg", "legs", "lip", "moustache", "mouth", "muscle", "nail", "neck", "nose", "shoulder", "shoulders", "skin", "stomach", "teeth", "throat", "thumb", "thumbs", "toe", "toes", "tongue", "tooth", "wrist"];

var computerList = [ "CDROM", "close", "click", "copy", "cut", "command", "database", "delete", "digital", "file", "find", "font", "format", "graphic", "icon", "hardware", "input", "interactive", "Internet", "keyboard", "help", "memory", "menu", "modem", "mouse", "multimedia", "network", "numeric", "open", "output", "paste", "peripheral", "printer", "processing", "replace", "save", "scanner", "search", "select", "software", "text"];

var clothesList = ["belt", "blouse", "boots", "cap", "cardigan", "coat", "dress", "gloves", "hat", "jacket", "jeans", "jumper", "mini-skirt", "overalls", "overcoat", "pajamas", "pants", "pantyhose", "raincoat", "scarf", "shirt", "shoes", "shorts", "skirt", "slacks", "slippers", "socks", "stockings", "suit", "sweat-shirt", "sweater", "sweatshirt", "t-shirt", "tie", "trousers", "underclothes", "underpants", "undershirt", "vest"];

var fruitList = ["apple", "apricot", "banana", "blackberry", "blueberry", "cherry", "cranberry", "currant", "fig", "grape", "grapefruit", "grapes", "kiwi", "kumquat", "lemon", "lime", "melon", "nectarine", "orange", "peach", "pear", "persimmon", "pineapple", "plum", "pomegranate", "prune", "raspberry", "strawberry", "tangerine", "watermelon"];

var dentalList = ["breath", "cavities", "chew", "cup", "dental surgeon", "dentist", "enamel", "erosion", "filling", "floss", "fluoride", "gingivitis", "gum-line", "gums", "molar", "mouthwash", "periodontal", "root canal", "smile", "teeth", "tooth fairy", "toothbrush", "toothpaste", "toothpick", "whitening"];

var healthList = ["black eye", "blister", "broken bone", "bruise", "burn", "cut", "dislocation", "fracture", "lump", "scrape", "scratch", "splinter", "sprain", "sun burn", "swellingbackache", "chills", "cough", "earache", "fever", "headache", "infection", "runny nose", "sore throat", "stomach ache", "anesthesiologist", "dietician", "doctor", "medical technician", "nurse", "ophthalmologist", "patient", "pediatrician", "physician", "psychiatrist", "security guard", "specialist", "surgeon", "visitor"];

var dogBreedList = ["Afghan Hound", "Airedale", "Airedale Terrier", "Basenji", "Basset Hound", "Beagle", "Bloodhound", "Border Collie", "Boxer", "Bulldog", "Chihuahua", "Chow Chow", "Cocker Spaniel", "Corgi", "Dachshund", "Dalmatian", "Doberman", "Fox Terrier", "German Shepherd", "Golden Retriever", "Great Dane", "Greyhound", "Irish Setter", "Labrador", "Lhasa Apso", "Newfoundland", "Pekingese", "Pit Bull Terrier", "Pointer", "Pomeranian", "Poodle", "Saint Bernard", "Schnauzer", "Scottish Terrier", "Sheepdog", "Shih Tzu", "Siberian Husky", "Spaniel", "Spitz"];
    
var snakeList = ["Arizona Black Rattlesnake", "Banded Rock Rattlesnake", "Black-tailed Rattlesnake", "Colorado Desert Sidewinder", "Desert Massasauga", "Grand Canyon Rattlesnake", "Great Basin Rattlesnake", "Hopi Rattlesnake", "Mojave Desert Sidewinder", "Mojave Rattlesnake", "New Mexico Ridge-Nose Rattlesnake", "Prairie Rattlesnake", "Ridge-Nose Rattlesnake", "Sonoran Desert Sidewinder", "Southwestern Speckled Rattlesnake", "Tiger Rattlesnake", "Twin Spotted Rattlesnake", "Western Diamondback Rattlesnake", "Boa", "Brown Snake", "Cobra", "Coral Snake", "Green Snake", "King Cobra", "Python", "Rat Snake", "Rattlesnake", "Viper"];

var booksBibleList = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts (of the Apostles)", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];

    function getWords(list)
    {	
    	switch(list)
    	{
    		case "animals":return animalList;break;

    		case "birds":return birdList;break;

    		case "body":return bodyList;break;

    		case "computer":return computerList;break;

    		case "clothes":return clothesList;break;

    		case "fruit":return fruitList;break;

    		case "dental":return dentalList;break;

    		case "health":return healthList;break;

    		case "dogBreeds":return dogBreedList;break;

    		case "snakes":return snakeList;break;

    		case "bibleBooks":return booksBibleList;break;

    		default:return wordList;break;
    	}
    }

