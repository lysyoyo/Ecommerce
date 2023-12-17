function removeLetterInput() {
    const priceInputs = document.querySelectorAll('.price, #price');

    priceInputs.forEach((price) => {
        price.addEventListener('input', function (e) {
            let inputValue = e.target.value;
            let numericValue = inputValue.replace(/[^\d.]/g, '');

            numericValue = numericValue.replace(/(\.\d{0,2})\d*$/, '$1');

            e.target.value = numericValue;

            let isValid = /^\d+(\.\d{0,2})?$/.test(numericValue);
            if (!isValid || numericValue < 0) {
                price.classList.add('priceError');
            } else {
                price.classList.remove('priceError');
            }
        });
    });
}


function uploadProduct() {
    const logo = document.querySelector('.logo');
    const fileU = logo.querySelector('.fileU');
    const affiche = document.querySelector('.affiche');
    const detail = document.querySelector('.detail');
    const progress = document.querySelector('.progress p');
    const progressBar = document.querySelector('.progress');
    const img = document.createElement('img');

    let fileUploaded = false;

    logo.addEventListener('click', () => {
        if (!fileUploaded) {
            fileU.click();
        }
    });

    fileU.onchange = ({ target }) => {
        let path = target.files[0];
        if (path) {
            let fileName = path.name;
            handleFileUpload(fileName, detail, progress, progressBar, img);
            fileUploaded = true;
        }
    };
}

function handleFileUpload(fileName, detail, progress, progressBar, img) {
    progress.textContent = '0%';
    progressBar.style.backgroundColor = 'red';
    document.querySelector('.affiche').textContent = fileName;

    const fileU = document.querySelector('.fileU');
    const reader = new FileReader();
  // Check if the file is a PDF or text file
    if (fileU.files[0].type === 'application/pdf' || fileU.files[0].type === 'text/plain') {
        alert('PDF and text files are not allowed. Please choose another file.');
        fileU.value = ''; // Clear the input field to allow choosing another file
    } else {
        let progressNumber = 0;
        const interval = setInterval(() => {
            progressNumber += 1;
            progress.textContent = progressNumber + '%';

            const greenValue = (progressNumber * 255) / 100;
            const redValue = 255 - greenValue;
            progressBar.style.backgroundColor = `rgb(${redValue}, ${greenValue}, 0)`;

            if (progressNumber === 100) {
                clearInterval(interval);
                img.classList.add('active');
            }
        }, 25);

        reader.onload = function (e) {
            img.src = e.target.result;
            detail.appendChild(img);
        };

        // Read the content of the file
        reader.readAsDataURL(fileU.files[0]);

        setTimeout(() => {
            detail.classList.add('active');
        }, 10);
    }
}

function loading() {}

removeLetterInput();
uploadProduct();
