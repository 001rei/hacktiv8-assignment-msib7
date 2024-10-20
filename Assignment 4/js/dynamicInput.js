document.addEventListener('DOMContentLoaded', function () {
            const socialMediaContainer = document.getElementById('social-media-fields');
            const tambahSocialMediaBtn = document.getElementById('add-social-media');

            tambahSocialMediaBtn.addEventListener('click', function () {
                const newField = document.createElement('div');
                newField.classList.add('input-group', 'mb-2');
                newField.innerHTML = `
                        <input type="text" class="form-control" name="socialMedia[]" placeholder="Enter social media">
                        <button class="btn btn-outline-danger remove-field" type="button">Remove</button>
                    `;
                socialMediaContainer.appendChild(newField);

                newField.querySelector('.remove-field').addEventListener('click', function () {
                    newField.remove();
                });
            });

            document.querySelector('.remove-field').addEventListener('click', function () {
                this.parentElement.remove();
            });
        });