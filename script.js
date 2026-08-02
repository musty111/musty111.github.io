const words = [
  "Aspiring Cybersecurity Professional",
  "Learning Ethical Hacking",
  "Building Secure Systems",
  "Future SOC Analyst"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

const target = document.querySelector("header p");

function type() {
    if (!target) return;

    if (!deleting) {
        current = words[i].substring(0, j++);
        target.textContent = current;

        if (j > words[i].length) {
            deleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        current = words[i].substring(0, j--);
        target.textContent = current;

        if (j < 0) {
            deleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, deleting ? 50 : 90);
}

type();
