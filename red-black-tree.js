class RedBlackTree {
	constructor() {
		this.root = null;
		this.length = 0;
	}

	insert(value, key) {
		const newNode = new Node(value, key);

		if (this.length === 0) {
			newNode.isRed = false;

			this.root = newNode;

		} else {
			let current = this.root;

			while(current !== null) {
				const isTriggerColor = !current.isRed && current.left !== null && current.left.isRed && current.right !== null && current.right.isRed;

				if (isTriggerColor) {
					if (current !== this.root) {
						current.isRed = true;
					}

					current.left.isRed = false;

					current.right.isRed = false;
				}
			}
		}

		this.length++;

		return this.length;
	}

	ror() {

	}

	rol() {

	}

	find() {

	}

	remove() {

	}
}
