class Shape {
	private id: number
	public width: number
	public color: string

	constructor() {
		console.log('Конструктор Shape')
	}
}

class Line extends Shape {
	public x1: number
	public x2: number
	public y1: number
	public y2: number

	constructor() {
		super()
		console.log('Конструктор Line')
	}
}

class Line extends Shape {
	draw(): void {
		console.log('Рисование линий')
	}
}
