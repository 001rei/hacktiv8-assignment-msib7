document.addEventListener('DOMContentLoaded', function() {

    // data default
    let dataDefault =  [
        {
            "name": "David Kim",
            "age": "20",
            "role": "Partner, Investing & Research",
            "socials": ["Twitter", "LinkedIn", "Email"],
            "description": "David Kim is a co-founder and Managing Director at Innovate Ventures. Previously, Kim was a partner at Accel Partners, where he focused on early-stage investments and led the firm’s blockchain initiatives. He is the founder and CEO of EcoTech, a Y Combinator-backed startup that was acquired by Amazon in 2019. Kim is also an angel investor in companies like Zoom and Rivian. He purchased his first Ethereum in 2016. Kim holds a B.S. in Computer Science from Stanford University."
        }
    ];

    // elements
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const role = document.getElementById('role');
    const socialsDiv = document.getElementById('socials');
    const desc = document.getElementById('description');

    // Read
    function displayProfile() { 
        
        const getName = localStorage.getItem('name');
        const getAge = localStorage.getItem('age');
        const getRole = localStorage.getItem('role');
        const getDesc = localStorage.getItem('description');

        const getSocials = localStorage.getItem('socials');
        let parsedSocials = [];

        if (getSocials) {
            try {
                parsedSocials = JSON.parse(getSocials) || [];
            } catch (error) {
                console.error("Error parsing JSON:", error);
                parsedSocials = [];
            }
        }

        socialsDiv.innerHTML = '';

        if(getName && getAge && getRole && getSocials && getDesc) {

            // isi value
            name.textContent = getName; 
            age.textContent = `( ${getAge} )`; 
            role.textContent = getRole; 
            desc.textContent = getDesc; 

            parsedSocials.forEach(social => {
                const anchor = document.createElement("a");

                anchor.href = "javascript:void(0);";
                anchor.classList.add("text-mono-link");
                anchor.textContent = social;

                socialsDiv.appendChild(anchor);
            });

        }else {
            loadDefaultProfile();
        }
        
    }

    function loadDefaultProfile() {
        socialsDiv.innerHTML = '';

        // isi value
        name.textContent = dataDefault[0].name; 
        age.textContent = `( ${dataDefault[0].age} )`; 
        role.textContent = dataDefault[0].role; 
        desc.textContent = dataDefault[0].description; 

        const arraySocials = dataDefault[0].socials; 
        arraySocials.forEach(social => {
            const anchor = document.createElement("a");

            anchor.href = "javascript:void(0);";
            anchor.classList.add("text-mono-link");
            anchor.textContent = social;

            socialsDiv.appendChild(anchor);
        });
    }

    displayProfile();

    // Update

    function tampilkanDataForm() {

        const getName = localStorage.getItem('name');
        const getAge = localStorage.getItem('age');
        const getRole = localStorage.getItem('role');
        const getDesc = localStorage.getItem('description');
        const socialsData = localStorage.getItem('socials');
        let getSocials = [];

        if (socialsData) {
            try {
                getSocials = JSON.parse(socialsData) || [];
            } catch (error) {
                console.error("Error parsing JSON:", error);
                getSocials = [];
            }
        }

        document.getElementById('form-name').value = getName || dataDefault[0].name;
        document.getElementById('form-age').value = getAge || dataDefault[0].age;
        document.getElementById('form-role').value = getRole || dataDefault[0].role;
        document.getElementById('form-description').value = getDesc || dataDefault[0].description;

        const socialMediaDefault = dataDefault[0].socials;
        const socialsInputs = document.getElementsByName('socialMedia[]');

        const socialMediaContainer = document.getElementById('social-media-fields');
        socialMediaContainer.innerHTML = '';

        if (socialsInputs.length > 0) {
            socialsInputs[0].value = getSocials[0] || socialMediaDefault[0];
        }

        if (getSocials && Array.isArray(getSocials) && getSocials.length > 0){
            for (let i = 0; i < getSocials.length; i++) {
                const newField = document.createElement('div');
                newField.classList.add('input-group', 'mb-2');
                newField.innerHTML = `
                    <input type="text" class="form-control" name="socialMedia[]" value="${getSocials[i]}" placeholder="Enter social media">
                    <button class="btn btn-outline-danger remove-field" type="button">Remove</button>
                `;

                socialMediaContainer.appendChild(newField);

                const removeButton = newField.querySelector('.remove-field');
                removeButton.addEventListener('click', function () {
                    newField.remove();  

                    const medsosYangTersisa = Array.from(document.getElementsByName('socialMedia[]')).map(social => social.value);
                    localStorage.setItem('socials', JSON.stringify(medsosYangTersisa));
                });
            }
        } else {
            for (let i = 0; i < socialMediaDefault.length; i++) {
                const newField = document.createElement('div');
                newField.classList.add('input-group', 'mb-2');
                newField.innerHTML = `
                    <input type="text" class="form-control" name="socialMedia[]" value="${socialMediaDefault[i]}" placeholder="Enter social media">
                    <button class="btn btn-outline-danger remove-field" type="button">Remove</button>
                `;

                socialMediaContainer.appendChild(newField);

                const removeButton = newField.querySelector('.remove-field');
                removeButton.addEventListener('click', function () {
                    newField.remove();  

                    // update local storage waktu sosmed dihapus
                    const medsosYangTersisa = Array.from(document.getElementsByName('socialMedia[]')).map(social => social.value);
                    localStorage.setItem('socials', JSON.stringify(medsosYangTersisa));
                });
            }
        }

        
    }

    /// load value ke input
    const editButton = document.getElementById('editBtn');

    editButton.addEventListener('click', function () {
        tampilkanDataForm(); 
    });

    /// data baru ke localStorage
    const submitBtn = document.getElementById('submit');
    const modalElement = document.getElementById('exampleModal'); 
    const modal = new bootstrap.Modal(modalElement); 

    submitBtn.addEventListener('click', function () {
        const name = document.getElementById('form-name').value;
        const age = document.getElementById('form-age').value;
        const role = document.getElementById('form-role').value;
        const desc = document.getElementById('form-description').value;
        const socials = document.getElementsByName('socialMedia[]');
        
        // masukkan list medsos ke array
        const arraySocials = Array.from(socials).map(social => social.value);
        
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('role', role);
        localStorage.setItem('description', desc);
        localStorage.setItem('socials', JSON.stringify(arraySocials));

        displayProfile();
        modal.hide();
    });

    // load pertama
    displayProfile();

});
