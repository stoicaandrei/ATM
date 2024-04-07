const CORRECT_PIN = '1234';

const enterButton = document.getElementById('enter-button');
console.log('enterButton: ', enterButton);
enterButton?.addEventListener('click', () => {
    console.log('You clicked the enter button!');

    const input = document.getElementById('pin-input');
    console.log('input: ', input);

    if (input instanceof HTMLInputElement) {   
        const pin = input?.value;
        console.log('pin: ', pin);

        if (pin === CORRECT_PIN) {
            const actionsSection = document.getElementById('actions-section');
            console.log('actionsSection: ', actionsSection);
            actionsSection?.classList.remove('hidden');

            const systemMessage = document.getElementById('system-message');
            console.log('systemMessage: ', systemMessage);
            systemMessage?.classList.remove('hidden');

            const pinSection = document.getElementById('pin-section');
            console.log('pinSection: ', pinSection);
            pinSection?.classList.add('hidden');
        } else {
            alert('Incorrect PIN entered!');
        }
    } else {
        console.error('input is not an HTMLInputElement');
    }
})

const cancelButton = document.getElementById('cancel-button');
console.log('cancelButton: ', cancelButton);
cancelButton?.addEventListener('click', () => {
    const actionsSection = document.getElementById('actions-section');
    console.log('actionsSection: ', actionsSection);
    actionsSection?.classList.add('hidden');

    const systemMessage = document.getElementById('system-message');
    console.log('systemMessage: ', systemMessage);
    systemMessage?.classList.add('hidden');

    const pinSection = document.getElementById('pin-section');
    console.log('pinSection: ', pinSection);
    pinSection?.classList.remove('hidden');
})