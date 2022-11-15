class RedBlackTree {
	constructor() {
		this.root = null;
		this.length = 0;
	}

	isBrokeRule(parent, node) {
		if (parent === null) {
			return false;
		}

		return parent.isRed === node.isRed;
	}

	checkGrandson(grandson, parent, grandfather) {
		const isLeftParent = grandfather.left === parent ? true : false;

		const isLeftGrandson = parent.left === grandson ? true : false;

		return { isExternalGrandson: isLeftParent === isLeftGrandson, isLeft: isLeftGrandson };
	}

	insert(value, key) {
		const newNode = new Node(value, key);

		if (this.length === 0) {
			newNode.isRed = false;

			this.root = newNode;

			this.length++;

			return this.length;
		}

		const nodes = [];

		let grandfather = null;

		let parent = null;

		let current = this.root;

		while(current !== null) {
			const isTriggerColor = !current.isRed && current.left !== null && current.left.isRed && current.right !== null && current.right.isRed;

			if (isTriggerColor) {
				if (current !== this.root) {
					current.isRed = true;
				}

				current.left.isRed = false;

				current.right.isRed = false;

				if (this.isBrokeRule(parent, current)) {
					const { isExternalGrandson, isLeft } = this.checkGrandson(current, parent, grandfather);

					grandfather.isRed = !grandfather.isRed;

					if (isExternalGrandson) {
						parent.isRed = !parent.isRed;

						if (isLeft) {
							this.ror(grandfather, parent, nodes);
						} else {
							this.rol(grandfather, parent, nodes);
						}
					} else {
						current.isRed = !current.isRed;

						if (isLeft) {
							this.rorSmall(grandfather, parent, current);

							this.rol(grandfather, current, nodes);

						} else {
							this.rolSmall(grandfather, parent, current);

							this.ror(grandfather, current, nodes);
						}
					}
				}

			} else {
				if (parent !== grandfather) {
					const save = grandfather;

					if (save !== null) {
						nodes.push(save);
					}

					grandfather = parent;
				}

				parent = current;

				if (key < current.key) {
					current = current.left;

					if (current === null) {
						parent.left = newNode;
					}

				} else {
					current = current.right;

					if (current === null) {
						parent.right = newNode;
					}
				}
			}
		}

		if (this.isBrokeRule(parent, newNode)) {
			const { isExternalGrandson, isLeft } = this.checkGrandson(newNode, parent, grandfather);

			grandfather.isRed = !grandfather.isRed;

			if (isExternalGrandson) {
				parent.isRed = !parent.isRed;

				if (isLeft) {
					this.ror(grandfather, parent, nodes);

				} else {
					this.rol(grandfather, parent, nodes);
				}

			} else {
				newNode.isRed = !newNode.isRed;

				if (isLeft) {
					this.rorSmall(grandfather, parent, newNode);

					this.rol(grandfather, newNode, nodes);

				} else {
					this.rolSmall(grandfather, parent, newNode);

					this.ror(grandfather, newNode, nodes);
				}
			}
		}

		this.length++;

		return this.length;
	}

	rorSmall(grandfather, parent, grandson) {
		parent.left = grandson.right;

		grandson.right = parent;

		grandfather.right = grandson;
	}

	rolSmall(grandfather, parent, grandson) {
		grandfather.left = grandson;

		parent.right = grandson.left;

		grandson.left = parent;
	}

	ror(grandfather, parent, nodes) {
		if (nodes.length !== 0) {
			const saveNode = nodes.pop();

			saveNode.left = parent;

			grandfather.left = parent.right;

			parent.right = grandfather;
		} else {
			grandfather.left = parent.right;

			parent.right = grandfather;

			this.root = parent;
		}
	}

	rol(grandfather, parent, nodes) {
		if (nodes.length !== 0) {
			const saveNode = nodes.pop();

			saveNode.left = parent;

			grandfather.right = parent.left;

			parent.left = grandfather;
		} else {
			grandfather.right = parent.left;

			parent.left = grandfather;

			this.root = parent;
		}
	}

	find() {

	}
}
