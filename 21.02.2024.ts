class List {
	x1: number
	y1: number
	x2: number
	y2: number
}

class Triangle {
	lineWidth: number
	color: string
	lineHeight: number
	name: string
	x1: number
	y1: number
	x2: number
	y2: number
	x3: number
	y3: number
}

class Rectangle {
	lineWidth: number
	color: string
	lineHeight: number
	name: string
	x1: number
	y1: number
	x2: number
	y2: number
}

class Ellipse1 {
	x: number
	y: number
	width: number
	height: number
	color: string
	lineWidth: number
	lineHeight: number
	name: string
}

class Shape1{
	lineWidth: number
	color: string
    lineHeight: number
    name: string


	constructor() {
		console.log('Конструктор Shape')
	}
}
class Line1 extends Shape1 {
	x1: number
	y1: number
	x2: number
	y2: number

	constructor() {
		super()
		console.log('Конструктор Line')
	}
}

const shapes: Shape1[] = []

shapes[0] = new Line1();
shapes[1] = new Triangle();
shapes[2] = new Rectangle();
shapes[3] = new Ellipse1();

shapes[0].color = 'red'
shapes[1].lineHeight = 3
shapes[2].lineWidth = 6
shapes[3].name = 'Alex'

class Line2 extends Shape {
	x1: number
	y1: number
	x2: number
	y2: number

	constructor(_x1: number, _y1: number, _x2: number, _y2: number) {
		super()
		this.x1 = _x1
		this.y1 = _y1
		this.x2 = _x2
		this.y2 = _y2
		console.log('Конструктор Line')
	}
}

//Объявите классы для описания мебели: стулья, шкафы, полки, столы.
//У этих классов имеются общие поля: название, габариты, цена.

//И уникальные для каждого объекта:

//для стула: число ножек, высота ножек, наличие спинки;
//для шкафов: материал ручек, число створок и шкафчиков;
//для полок: число сегментов и размер каждого сегмента;
//для столов: число ножек и площадь столешницы.

class Chair {
	name: string
	dimensions: string
	price: number
	numLegs: number
	legHeight: number
	hasBackrest: boolean

	constructor(
		name: string,
		dimensions: string,
		price: number,
		numLegs: number,
		legHeight: number,
		hasBackrest: boolean
	) {
		this.name = name
		this.dimensions = dimensions
		this.price = price
		this.numLegs = numLegs
		this.legHeight = legHeight
		this.hasBackrest = hasBackrest
	}
}

class Wardrobe {
	name: string
	dimensions: string
	price: number
	handleMaterial: string
	numDoors: number
	numDrawers: number

	constructor(
		name: string,
		dimensions: string,
		price: number,
		handleMaterial: string,
		numDoors: number,
		numDrawers: number
	) {
		this.name = name
		this.dimensions = dimensions
		this.price = price
		this.handleMaterial = handleMaterial
		this.numDoors = numDoors
		this.numDrawers = numDrawers
	}
}

class Shelf {
	name: string
	dimensions: string
	price: number
	numSegments: number
	segmentSizes: number[]

	constructor(
		name: string,
		dimensions: string,
		price: number,
		numSegments: number,
		segmentSizes: number[]
	) {
		this.name = name
		this.dimensions = dimensions
		this.price = price
		this.numSegments = numSegments
		this.segmentSizes = segmentSizes
	}
}

class Table {
	name: string
	dimensions: string
	price: number
	numLegs: number
	tabletopArea: number

	constructor(
		name: string,
		dimensions: string,
		price: number,
		numLegs: number,
		tabletopArea: number
	) {
		this.name = name
		this.dimensions = dimensions
		this.price = price
		this.numLegs = numLegs
		this.tabletopArea = tabletopArea
	}
}
