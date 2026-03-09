const codes = ['flexygo']; // <- Add more codes here if needed, e.g. ['flexygo', 'crm', ...]

// Extract the first path segment (right after the domain)
// e.g. https://ayuda.ahora.es/flexygo/404  →  "flexygo"
const segments = window.location.pathname.split('/').filter(Boolean);
const code = segments[0];
const code_lower = code?.toLowerCase();

if (code_lower) {
    document.body.classList.add('skin-' + code_lower);
}

function goHome() {
    if (code && codes.includes(code_lower)) {
        window.location.href = '/' + code;
    }
    else {
        window.location.href = 'https://ayuda.ahora.es';
    }
}
