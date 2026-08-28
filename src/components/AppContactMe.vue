<script>
import emailjs from 'emailjs-com';

const COOLDOWN_TIME = 60 * 1000
const COOLDOWN_KEY = 'contact_form_last_sent'
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


export default {
    name: 'AppContactMe',
    data() {
        return {
            form: {
                email: '',
                name: '',
                message: '',
            },
            loading: false,
            success: false,
            error: false,
            errorMessageEmail: '',
            errorMessageName: '',
            errorMessageContent: '',
        }
    },
    methods: {
        async sendEmail() {
            this.errorMessageEmail = ''
            this.errorMessageName = ''
            this.errorMessageContent = ''

            if (!emailRegex.test(this.form.email)) {
                this.errorMessageEmail = 'Por favor, ingresá un correo válido.'
                return
            }
            if (!this.form.name.trim()) {
                this.errorMessageName = 'Este campo no puede estar vacío.'
                return
            }
            if (this.form.message.trim().length < 10) {
                this.errorMessageContent = 'El mensaje debe tener por lo menos 10 caracteres.'
                return
            }

            const lastSent = localStorage.getItem(COOLDOWN_KEY)

            if (lastSent && Date.now() - lastSent < COOLDOWN_TIME) {
                alert('Por favor esperá un minuto antes de volver a enviar el mensaje.')
                return
            }
            this.loading = true
            this.success = false
            this.error = false

            try {
                const token = await this.$recaptcha('contact_form');

                await emailjs.send(
                    'service_g1hyrje',
                    'template_59tstsr',
                    {
                        user_name: this.form.name,
                        user_email: this.form.email,
                        message: this.form.message,

                        'g-recaptcha-response': token,
                    },
                    'Hux4KIEMBfZSKXezL'
                )
                localStorage.setItem(
                    COOLDOWN_KEY,
                    Date.now()
                )

                this.success = true
                this.form.email = ''
                this.form.name = ''
                this.form.message = ''

            } catch (error) {
                this.error = true
                console.error(error)

            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<template>
    <section id="ContactMe">
        <h1>Contacto</h1>
        <form @submit.prevent="sendEmail" action="#" method="get" class=" mx-auto mt-4 contact-form">
            <p v-if="success" class="success">
                Mensaje enviado! A la brevedad nos comunicaremos con vos.
            </p>

            <p v-if="error" class="error">
                Algo salió mal. Por favor, intentá de nuevo.
            </p>
            <div class="d-flex flex-column flex-md-row gap-4 mb-4 justify-content-between">
                <div class="w-100 w-md-50">
                    <label class="form-label" for="email"><strong>Correo</strong></label>
                    <input class="form-control" type="text" id="email" name="email" v-model="form.email" />
                    <small v-if="errorMessageEmail">{{ errorMessageEmail }}</small>
                </div>
                <div class="w-100 w-md-50">
                    <label class="form-label" for="name"><strong>Nombre</strong></label>
                    <input class="form-control" type="text" id="name" name="name" v-model="form.name" />
                    <small v-if="errorMessageName">{{ errorMessageName }}</small>

                </div>
            </div>
            <div>
                <label class="form-label" for="message"><strong>Breve descripción de tu
                        proyecto</strong></label>
                <textarea class="form-control" rows="5" id="message" name="message" v-model="form.message"></textarea>
                <small v-if="errorMessageContent">{{ errorMessageContent }}</small>

            </div>
            <input type="text" name="company" style="display:none">
            <div class="w-100 d-flex justify-content-center mt-4">
                <button type="submit" class="contact-button rounded-pill" :disabled="loading">{{ loading ? 'Enviando...'
                    : 'Enviar' }}</button>
            </div>
        </form>
    </section>
</template>

<style scoped>
section {
    margin: 20% 10%;
    scroll-margin-top: 4rem;
}

.contact-form {
    width: 50%;
}

.contact-button {
    padding: 2% 5%;
    background-image: linear-gradient(70deg, rgb(2, 0, 65), rgb(45, 43, 83));
    color: white;
    font-weight: bold;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
    text-decoration: none;
    transition: all 0.2 ease;
    border: none;
}

.contact-button:hover,
.contact-button:focus {
    background-image: linear-gradient(70deg, rgb(20, 18, 90), rgb(73, 71, 113));
}

.success {
    background-image: linear-gradient(30deg, rgba(0, 128, 0, 0.7), rgba(7, 159, 7, 0.7));
    color: white;
    margin-top: 1rem;
    padding: 2% 5%;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.error {
    background-image: linear-gradient(30deg, rgba(128, 0, 0, 0.7), rgba(159, 7, 7, 0.7));
    color: white;
    margin-top: 1rem;
    padding: 2% 5%;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

small {
    color: rgb(161, 0, 0);
    margin-top: 5%;
    font-weight: bold;
}

@media (max-width: 1024px) {
    .contact-form {
        width: 100%;
        margin: 0;
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 3rem;
    }
}
</style>
