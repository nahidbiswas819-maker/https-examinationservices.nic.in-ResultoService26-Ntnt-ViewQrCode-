// Current CAPTCHA value
let currentCaptcha = "";

// Generate a random CAPTCHA
function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    currentCaptcha = "";

    for (let i = 0; i < 6; i++) {
        currentCaptcha += chars[Math.floor(Math.random() * chars.length)];
    }

    const captchaBox = document.getElementById("captchaText");
    if (captchaBox) {
        captchaBox.innerText = currentCaptcha;
    }
}

// Verify CAPTCHA
function verifyCaptcha() {
    const input = document.getElementById("userCaptcha").value;

    if (input === currentCaptcha) {
        window.location.href = "result.html";
    } else {
        alert("Incorrect CAPTCHA");
        generateCaptcha();
    }
}

// Generate CAPTCHA when the page loads
window.onload = generateCaptcha;
