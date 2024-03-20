<template>
    <div class="container">
        <Modal :modalActive="modalActive">
            <div class="modal-content">
                <h1>Acesso Administrador</h1>
                <form>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="text" name="email">
                    </div>
                    <div class="input-group">
                        <label for="password">Senha</label>
                        <input type="password" name="password">
                    </div>

                    <button>Entrar</button>
                </form>
            </div>
        </Modal>
    </div>
</template>

<script>
import { ref } from 'vue';
import Modal from '../components/ModalService.vue';

export default {
    components: {
        Modal
    },
    setup() {
        const modalActive = ref(true);

        const toggleModal = () => {
            modalActive.value = !modalActive.value;
        };

        return { modalActive, toggleModal };
    }
}
</script>

<style>

</style>