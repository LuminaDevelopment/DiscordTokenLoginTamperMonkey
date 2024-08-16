// ==UserScript==
// @name         Discord Login
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Login To Discord Using A Token
// @author       Stormcph
// @match        https://discord.com/login*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var popup = document.createElement('div');

    popup.style.position = 'fixed';
    popup.style.top = '10px';
    popup.style.right = '60px';
    popup.style.width = '300px';
    popup.style.height = '120px';
    popup.style.backgroundColor = '#2c2f33';
    popup.style.border = '2px solid #7289da';
    popup.style.borderRadius = '8px';
    popup.style.zIndex = '10000';
    popup.style.boxShadow = '0px 0px 20px rgba(90, 110, 232, 0.2)';
    popup.style.padding = '20px';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.justifyContent = 'space-between';
    popup.style.alignItems = 'center';

    var title = document.createElement('div');
    title.innerText = 'DISCORD TOKEN';
    title.style.color = '#fff';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '10px';
    title.style.alignSelf = 'flex-start';

    var tokenInput = document.createElement('input');
    tokenInput.type = 'text';
    tokenInput.id = 'token';
    tokenInput.placeholder = 'Enter your token';
    tokenInput.style.width = '93%';
    tokenInput.style.marginBottom = '10px';
    tokenInput.style.padding = '10px';
    tokenInput.style.borderRadius = '4px';
    tokenInput.style.border = '1px solid #202225';
    tokenInput.style.backgroundColor = '#23272a';
    tokenInput.style.color = '#b9bbbe';

    var loginButton = document.createElement('button');
    loginButton.id = 'login';
    loginButton.innerHTML = 'Login';
    loginButton.style.width = '100%';
    loginButton.style.padding = '10px';
    loginButton.style.borderRadius = '4px';
    loginButton.style.border = 'none';
    loginButton.style.backgroundColor = '#7289da';
    loginButton.style.color = '#fff';
    loginButton.style.cursor = 'pointer';
    loginButton.style.fontWeight = 'bold';

    popup.appendChild(title);
    popup.appendChild(tokenInput);
    popup.appendChild(loginButton);

    document.body.appendChild(popup);

    loginButton.addEventListener('click', function() {
        var token = tokenInput.value;
        console.log(`Attempting to log in with token: ${token}`);

        function login(token) {
            setInterval(() => {
                document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage.token = `"${token}"`;
            }, 50);
            setTimeout(() => {
                location.reload();
            }, 2500);
        }

        login(token);
    });
})();
