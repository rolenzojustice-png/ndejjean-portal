// --- STAR FIELD ANIMATION ---
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5;
    }
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.y = 0;
    }
    draw() {
        ctx.fillStyle = '#ffcc00'; // Yellow stars
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 150; i++) stars.push(new Star());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}
animate();
registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));
// 1. YouTube Background Logic


registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));
// 1. YouTube Background Logic
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'wjGXg8rDT6U', // Aerial View of Ndejje Senior Secondary School
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'loop': 1,
            'playlist': 'wjGXg8rDT6U',
            'mute': 1
        },
        events: {
            'onReady': (event) => event.target.playVideo()
        }
    });
}
// 2. Form Switching Logic
function showForm(type) {
    const login = document.getElementById('loginBox');
    const create = document.getElementById('createBox');
    const forgot = document.getElementById('forgotBox');

    // Hide all first
    [login, create, forgot].forEach(el => el.classList.add('hidden'));

    // Show selected with animation
    let active;
    if (type === 'login') active = login;
    if (type === 'create') active = create;
    if (type === 'forgot') active = forgot;

    active.classList.remove('hidden');
    active.classList.add('fade-in-up');
}

// 2. Form Switching Logic
const container = document.getElementById('container');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const togglePass = document.getElementById('togglePass');
const passwordInput = document.getElementById('password');

registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));

// 3. Password Toggle
togglePass.addEventListener('click', () => {
    const isPass = passwordInput.type === 'password';
    passwordInput.type = isPass ? 'text' : 'password';
    togglePass.textContent = isPass ? '🙈' : '👁️';
});
