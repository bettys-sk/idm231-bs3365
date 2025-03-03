//@ts-check

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

// stops all sounds when one audio is playing
let all_sounds = [];

function stop_all_sounds() {
    all_sounds.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0;
    });
}

// catches whats called in func init and creates a button
function create_image_button(defaultImg, sound_file, title_text) {
    const imgBtn = document.createElement('img');
    imgBtn.src = defaultImg;
    imgBtn.style.cursor = 'pointer';

    const audio = new Audio(sound_file);
    all_sounds.push(audio);

    imgBtn.addEventListener('click', () => {
        stop_all_sounds();
        audio.play();
    });

    return imgBtn; // return the created image button
}

function initialize() {
    const zodiacGrid = document.querySelector('.zodiac-grid'); // get the zodiac-grid element

    if (!zodiacGrid) {
        console.error("Error: .zodiac-grid element not found!");
        return;
    }

    myCookies.forEach(({ defaultImg, sound, title }) => {
        const imgBtn = create_image_button(defaultImg, sound, title);
        zodiacGrid.appendChild(imgBtn); // append the image button to zodiac-grid
    });
}

// calls for init to be ran
initialize();

const form = document.querySelector('form');
const error_list = document.querySelector('.errors');

// prevents the default of the reloading page after inputting date data
function handle_submit(event) {
    event.preventDefault();
}

if (form) {
    form.addEventListener('submit', handle_submit);
} 

const submitBtn = document.querySelector('.submit');
const datepicker = document.querySelector('datepicker');