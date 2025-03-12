//@ts-check

function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'Libra';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'Gemini';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    return null;
}

const myCookies = [
    {
        sound: "./audio/aries_sound.mp3",
        defaultImg: "./image/c-aries-04.jpg",
        fortuneImg: "./image/f-aries.jpg",
        title: "Aries",
        description: "Charge ahead! Just... maybe check if there's a wall first."
    },

    {
        sound: "./audio/aquarius_sound.mp3",
        defaultImg: "./image/c-aquarius.jpg",
        fortuneImg: "./image/f-aquarius.jpg",
        title: "Aquarius",
        description: "The future is weird, and so are you. Embrace it!"
    },

    {
        sound: "./audio/cancer_sound.mp3",
        defaultImg: "./image/c-cancer.jpg",
        fortuneImg: "./image/f-cancer.jpg",
        title: "Cancer",
        description: "Your heart is your compass. Just don't cry when it leads you to a dead end."
    },

    {
        sound: "./audio/capricorn_sound.mp3",
        defaultImg: "./image/c-capricorn.jpg",
        fortuneImg: "./image/f-capricorn.jpg",
        title: "Capricorn",
        description: "Success is inevitable. Fun, however, is optional."
    },

    {
        sound: "./audio/gemini_sound.mp3",
        defaultImg: "./image/c-gemini.jpg",
        fortuneImg: "./image/f-gemini.jpg",
        title: "Gemini",
        description: "Two roads diverged in a wood, and you took both. Classic Gemini."
    },

    {
        sound: "./audio/leo_sound.mp3",
        defaultImg: "./image/c-leo.jpg",
        fortuneImg: "./image/f-leo.jpg",
        title: "Leo",
        description: "Your crown is invisible, but don't worry, everyone still sees it."
    },

    {
        sound: "./audio/libra_sound.mp3",
        defaultImg: "./image/c-libra.jpg",
        fortuneImg: "./image/f-libra.jpg",
        title: "Libra",
        description: "Decide quickly: Heads or tails? (Just kidding, you'll spend an hour thinking about it.)"
    },

    {
        sound: "./audio/pisces_sound.mp3",
        defaultImg: "./image/c-pisces.jpg",
        fortuneImg: "./image/f-pisces.jpg",
        title: "Pisces",
        description: "You're living in a dream world. Stay there. Reality is overrated."
    },

    {
        sound: "./audio/sagittarius_sound.mp3",
        defaultImg: "./image/c-sagittarius.jpg",
        fortuneImg: "./image/f-sagittarius.jpg",
        title: "Sagittarius",
        description: "Adventure is calling. It says: Pack a bag and don't ask questions."
    },

    {
        sound: "./audio/scorpio_sound.mp3",
        defaultImg: "./image/c-scorpio.jpg",
        fortuneImg: "./image/f-scorpio.jpg",
        title: "Scorpio",
        description: "Trust no one. Except your gut. And maybe your cat."
    },

    {
        sound: "./audio/taurus_sound.mp3",
        defaultImg: "./image/c-taurus.jpg",
        fortuneImg: "./image/f-taurus.jpg",
        title: "Taurus",
        description: "Good things take time. Especially naps and snacks."
    },

    {
        sound: "./audio/virgo_sound.mp3",
        defaultImg: "./image/c-virgo.jpg",
        fortuneImg: "./image/f-virgo.jpg",
        title: "Virgo",
        description: "Perfection is impossible. But you're so close."
    }
];

// to stop all sounds
let all_sounds = [];

function stop_all_sounds() {
    all_sounds.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0;
    });
}

// to create an image button
function create_image_button(defaultImg, sound_file, title_text, zodiacSign) {
    const imgBtn = document.createElement('img');
    imgBtn.src = defaultImg;
    imgBtn.alt = title_text;
    imgBtn.title = title_text;
    imgBtn.style.cursor = 'pointer';

    const audio = new Audio(sound_file);
    all_sounds.push(audio);

    imgBtn.addEventListener('click', () => {
        showZodiacPopup(zodiacSign); 
    });

    return imgBtn;
}

// to initialize the zodiac grid
function initialize() {
    const zodiacGrid = document.querySelector('.zodiac-grid');

    if (!zodiacGrid) {
        console.error("Error: .zodiac-grid element not found!");
        return;
    }

    myCookies.forEach(({ defaultImg, sound, title }) => {
        const imgBtn = create_image_button(defaultImg, sound, title, title);
        zodiacGrid.appendChild(imgBtn);
    });
}

// to display the zodiac pop-up
function showZodiacPopup(zodiacSign) {
    const zodiacData = myCookies.find(zodiac => zodiac.title === zodiacSign);

    if (!zodiacData) {
        console.error("Zodiac sign data not found!");
        return;
    }

    // the overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // the pop-up container
    const popup = document.createElement('div');
    popup.className = 'zodiac-popup';

    // the zodiac image 
    const zodiacImg = document.createElement('img');
    zodiacImg.src = zodiacData.fortuneImg;
    zodiacImg.alt = zodiacData.title;
    popup.appendChild(zodiacImg);

    // the zodiac title
    const zodiacTitle = document.createElement('h2');
    zodiacTitle.textContent = zodiacData.title;
    popup.appendChild(zodiacTitle);

    // the zodiac description
    const zodiacDescription = document.createElement('p');
    zodiacDescription.textContent = zodiacData.description;
    popup.appendChild(zodiacDescription);

    // a close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(popup);
        stop_all_sounds();
    });
    popup.appendChild(closeBtn);

    // the zodiac sound
    const audio = new Audio(zodiacData.sound);
    all_sounds.push(audio);
    stop_all_sounds();
    audio.play();

    // the overlay and pop-up to the body
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
}

// to handle form submission
function handle_submit(event) {
    event.preventDefault();

    const form = event.target; 
    const birthdateInput = form.elements['birthdate'];

    if (!birthdateInput) {
        console.error("Birthdate input not found!");
        alert("Please enter your birthdate!");
        return;
    }

    const birthdate = birthdateInput.value;

    if (!birthdate) {
        alert("Please enter your birthdate!");
        return;
    }

    const [year, month, day] = birthdate.split('-').map(Number);
    const zodiacSign = getZodiac(month, day);

    if (zodiacSign) {
        showZodiacPopup(zodiacSign);
    } else {
        alert("Invalid birthdate. Please try again.");
    }
}

// initialize the zodiac grid
initialize();

// event listener for form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handle_submit);
} else {
    console.error("Form element not found in the DOM!");
}

// help info pop-up functionality
document.addEventListener("DOMContentLoaded", function () {
    const helpLink = document.querySelector(".help-link");
    const helpPopup = document.querySelector(".help.popup-info");
    const closeBtn = document.querySelector(".close-btn-info");
    const body = document.body;

    if (!helpLink || !helpPopup || !closeBtn) {
        console.warn("One or more elements are missing from the DOM.");
        return;
    }

    // changes helpPopup to an HTMLElement to access .style
    const helpPopupElement = /** @type {HTMLElement} */ (helpPopup);

    helpLink.addEventListener("click", function (event) {
        event.preventDefault();
        helpPopupElement.style.display = "block"; // show the popup
        body.classList.add("blurred"); // blur background
    });

    function closePopup() {
        helpPopupElement.style.display = "none"; // hide the popup
        body.classList.remove("blurred"); // remove blur
    }

    closeBtn.addEventListener("click", closePopup);

    helpPopupElement.addEventListener("click", function (event) {
        if (event.target === helpPopupElement) {
            closePopup();
        }
    });
});