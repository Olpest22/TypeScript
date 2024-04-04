class Point {
	static cnt: number = 0
	x: number
	y: number

	constructor() {
		this.x = 0
		this.y = 0
		Point.cnt++
	}
}

let point1: Point = new Point()

console.log(Point.cnt)

let point2: Point = new Point()

console.log(Point.cnt)

// Объявите класс ShopItem для представления продуктов в магазине с полями на TypeScript:
//  • id (идентификатор – целое число)
//  • название товара
//  • габариты
//  • вес
//  • цена
// Поле id должно быть уникальным для каждого объекта класса. Это следует реализовать через статическую переменную, которая подсчитывает количество создаваемых экземпляров.

class ShopItem {
	private static itemCount: number = 0
	public readonly id: number
	public name: string
	public dimensions: string
	public weight: number
	public price: number

	constructor(name: string, dimensions: string, weight: number, price: number) {
		this.id = ShopItem.itemCount++
		this.name = name
		this.dimensions = dimensions
		this.weight = weight
		this.price = price
	}
}

// Пример создания объекта
const item1 = new ShopItem('Product 1', '10x10x5', 2.5, 20.24)
const item2 = new ShopItem('Product 2', '20x15x10', 7.5, 233.99)

// Опишите класс Rect для прямоугольника с полями: x1, y1, x2, y2 – координат вершин верхнего правого и нижнего левого углов.
// Пропишите два статических метода для вычисления ширины и высоты прямоугольника. В качестве параметра этим методам передавайте ссылку на экземпляр класса Rect, для которого выполняется вычисление.

class Rect1 {
	constructor(
		public x1: number,
		public y1: number,
		public x2: number,
		public y2: number
	) {}

	static getWidth(rect: Rect): number {
		return Math.abs(rect.x2 - rect.x1)
	}

	static getHeight(rect: Rect): number {
		return Math.abs(rect.y2 - rect.y1)
	}
}

