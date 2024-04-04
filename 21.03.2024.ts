abstract class Car {
	model: string

	abstract go(): void
	abstract stop(): void
	abstract start(): void
}

abstract class Geometry {
	constructor(public width: number, public color: string) {}

	abstract draw(): void
}

class Line3 extends Geometry {
	constructor(
		public x1: number,
		public y1: number,
		public x2: number,
		public y2: number,
		width: number,
		color: string
	) {
		super(width, color)
	}

	draw(): void {
		console.log(
			`Drawing a line from (${this.x1},${this.y1}) to (${this.x2},${this.y2}) with width ${this.width} and color ${this.color}`
		)
	}
}

class Rect extends Geometry {
	x2: any
	x1: any
	y1: any
	y2: any
	static getWidth(myRect: Rect): any {
		throw new Error("Method not implemented.")
	}
	static getHeight(myRect: Rect): any {
		throw new Error("Method not implemented.")
	}
	constructor(
		public x: number,
		public y: number,
		public width: number,
		public height: number,
		widthValue: number,
		colorValue: string
	) {
		super(widthValue, colorValue)
	}

	draw(): void {
		console.log(
			`Drawing a rectangle at (${this.x},${this.y}) with width ${this.width}, height ${this.height}, color ${this.color}`
		)
	}
}

class Ellipse extends Geometry {
	constructor(
		public cx: number,
		public cy: number,
		public rx: number,
		public ry: number,
		widthVal: number,
		colorVal: string
	) {
		super(widthVal, colorVal)
	}

	draw(): void {
		console.log(
			`Drawing an ellipse at (${this.cx},${this.cy}) with radius x ${this.rx}, radius y ${this.ry}, color ${this.color}`
		)
	}
}

// Создание экземпляров дочерних классов и вызов метода draw
const line = new Line3(0, 0, 10, 10, 1, 'black')
line.draw()

const rect = new Rect(5, 5, 20, 10, 2, 'blue')
rect.draw()

const ellipse = new Ellipse(15, 15, 10, 5, 1, 'green')
ellipse.draw()

// Опишите абстрактный класс Recipes (рецепты)
// с полями:
//  • название,
//  • тип // вегетарианский или обычный
// и абстрактными методами:
//  • showIngredients // показать ингредиенты
//  • showRecipe // показать рецепт
// Опишите несколько дочерних классов: Salad (для салатов), Pizza (для пицц), Porridge (для каш).
// В каждом дочернем классе определите поле для списка ингредиентов (в виде строки) и описания самого рецепта (в виде строки). А также реализуйте абстрактные методы базового класса Recipes.
// Создайте несколько экземпляров дочерних классов и через общий интерфейс (в виде ссылок типа Recipes) вызовите методы showRecipe и showIngredients.

abstract class Recipes {
	constructor(public name: string, public type: string) {}

	abstract showIngredients(): void
	abstract showRecipe(): void
}

class Salad extends Recipes {
	constructor(public ingredients: string, public recipe: string) {
		super('Salad', 'Vegetarian')
	}

	showIngredients(): void {
		console.log(`Ingredients for ${this.name}: ${this.ingredients}`)
	}

	showRecipe(): void {
		console.log(`Recipe for ${this.name} (${this.type}): ${this.recipe}`)
	}
}

class Pizza extends Recipes {
	constructor(public ingredients: string, public recipe: string) {
		super('Pizza', 'Regular')
	}

	showIngredients(): void {
		console.log(`Ingredients for ${this.name}: ${this.ingredients}`)
	}

	showRecipe(): void {
		console.log(`Recipe for ${this.name} (${this.type}): ${this.recipe}`)
	}
}

class Porridge extends Recipes {
	constructor(public ingredients: string, public recipe: string) {
		super('Porridge', 'Vegetarian')
	}

	showIngredients(): void {
		console.log(`Ingredients for ${this.name}: ${this.ingredients}`)
	}

	showRecipe(): void {
		console.log(`Recipe for ${this.name} (${this.type}): ${this.recipe}`)
	}
}

//  Создание экземпляров дочерних классов и вызов методов через интерфейс базового класса
const greekSalad = new Salad(
	'Lettuce, tomatoes, cucumbers, olives, feta cheese',
	'Mix all ingredients and drizzle with olive oil.'
)
const margheritaPizza = new Pizza(
	'Dough, tomato sauce, mozzarella cheese, basil',
	'Spread tomato sauce on dough, add cheese and basil, bake.'
)
const oatPorridge = new Porridge(
	'Oats, milk, honey, fruits',
	'Cook oats in milk, add honey and fruits before serving.'
)

// Использование интерфейса базового класса для вызова методов
const recipes: Recipes[] = [greekSalad, margheritaPizza, oatPorridge]
recipes.forEach(recipe => {
	recipe.showIngredients()
	recipe.showRecipe()
	console.log()
})
