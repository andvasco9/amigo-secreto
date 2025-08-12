// JavaScript Module
const FriendPicker = {
    init(selector) {
        this.root = document.querySelector(selector); // inicialize o elemento root
        if (!this.root) return;

        // Mapear elementos DOM
        this.refs = {
            nameInput: this.root.querySelector('[data-ref="friend-name"]'),
            addButton: this.root.querySelector('[data-ref="add-friend"]'),
            friendList: this.root.querySelector('[data-ref="friend-list"]'),
            pickButton: this.root.querySelector('[data-ref="pick-random"]'),
            result: this.root.querySelector('[data-ref="result"]'),
        };

        this.friends = [];

        this.bindEvents();
    },

    bindEvents() {
        this.refs.addButton.addEventListener('click', () => this.addFriend());
        this.refs.pickButton.addEventListener('click', () => this.pickRandomFriend());
    },

    addFriend() {
        const name = this.refs.nameInput.value.trim();

        if (name) {
            this.friends.push(name);
            const li = document.createElement('li');
            li.textContent = name;
            this.refs.friendList.appendChild(li);
            this.refs.nameInput.value = '';
            this.refs.nameInput.focus();

            return;
        }

        alert('O nome do amigo é obrigatório');
    },

    pickRandomFriend() {
        if (this.friends.length === 0) {
            this.refs.result.textContent = "No friends to choose from.";
            return;
        }
        const random = this.friends[Math.floor(Math.random() * this.friends.length)];
        this.refs.result.textContent = `🎉 O amigo sorteado é: ${random}`;
    },
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    FriendPicker.init('[data-init]');
});
