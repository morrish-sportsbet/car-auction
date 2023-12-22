import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const thirtyDays = 30 * 24 * 60 * 60 * 1000
const oneDay = 24 * 60 * 60 * 1000
// const currentTime = new Date(Date.now())
const yesterday = new Date(Date.now() - oneDay).toISOString()
const thirtyDaysAgo = new Date(Date.now() - thirtyDays).toISOString()
const oneHourLater = new Date(Date.now() + 60 * 60 * 1000).toISOString()
const tomorrow = new Date(Date.now() + oneDay).toISOString()
const aWeekLater = new Date(Date.now() + 7 * oneDay).toISOString()
const AUCTIONS = [
	{
		reservePrice: 0,
		seller: "morteza",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: thirtyDaysAgo,
		updatedAt: thirtyDaysAgo,
		auctionEnd: tomorrow,
		status: "Live",
		make: "Audi",
		model: "R8 Morris",
		year: 2021,
		color: "White",
		mileage: 10050,
		imageUrl:
			"https://cdn.pixabay.com/photo/2019/12/26/20/50/audi-r8-4721217_960_720.jpg"
	},
	{
		reservePrice: 20000,
		seller: "tom",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: thirtyDaysAgo,
		updatedAt: yesterday,
		auctionEnd: aWeekLater,
		status: "Live",
		make: "Audi",
		model: "TT",
		year: 2020,
		color: "Black",
		mileage: 25400,
		imageUrl:
			"https://cdn.pixabay.com/photo/2016/09/01/15/06/audi-1636320_960_720.jpg"
	},
	{
		reservePrice: 20000,
		seller: "alice",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: "2023-06-22T03:52:45.479301Z",
		updatedAt: "2023-06-22T03:52:45.479301Z",
		auctionEnd: "2023-07-22T03:52:45.479301Z",
		status: "Live",
		make: "BMW",
		model: "X1",
		year: 2017,
		color: "White",
		mileage: 90000,
		imageUrl:
			"https://cdn.pixabay.com/photo/2017/08/31/05/47/bmw-2699538_960_720.jpg"
	},
	{
		reservePrice: 90000,
		seller: "alice",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: yesterday,
		updatedAt: yesterday,
		auctionEnd: aWeekLater,
		status: "Live",
		make: "Bugatti",
		model: "Veyron",
		year: 2018,
		color: "Black",
		mileage: 15035,
		imageUrl:
			"https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg"
	},
	{
		reservePrice: 20000,
		seller: "bob",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: thirtyDaysAgo,
		updatedAt: thirtyDaysAgo,
		auctionEnd: oneHourLater,
		status: "Live",
		make: "Ferrari",
		model: "Spider",
		year: 2015,
		color: "Red",
		mileage: 50000,
		imageUrl:
			"https://cdn.pixabay.com/photo/2017/11/09/01/49/ferrari-458-spider-2932191_960_720.jpg"
	},
	{
		reservePrice: 150000,
		seller: "alice",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: thirtyDaysAgo,
		updatedAt: thirtyDaysAgo,
		auctionEnd: aWeekLater,
		status: "Live",
		make: "Ferrari",
		model: "F-430",
		year: 2022,
		color: "Red",
		mileage: 5000,
		imageUrl:
			"https://cdn.pixabay.com/photo/2017/11/08/14/39/ferrari-f430-2930661_960_720.jpg"
	},
	{
		reservePrice: 20000,
		seller: "bob",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: thirtyDaysAgo,
		updatedAt: thirtyDaysAgo,
		auctionEnd: aWeekLater,
		status: "Live",
		make: "Ford",
		model: "GT",
		year: 2020,
		color: "White",
		mileage: 50000,
		imageUrl:
			"https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_960_720.jpg"
	},
	{
		reservePrice: 0,
		seller: "bob",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: thirtyDaysAgo,
		updatedAt: thirtyDaysAgo,
		auctionEnd: aWeekLater,
		status: "Live",
		make: "Ford",
		model: "Mustang",
		year: 2023,
		color: "Black",
		mileage: 65125,
		imageUrl:
			"https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg"
	},
	{
		reservePrice: 20000,
		seller: "bob",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: thirtyDaysAgo,
		updatedAt: thirtyDaysAgo,
		auctionEnd: aWeekLater,
		status: "Live",
		make: "Ford",
		model: "Model T",
		year: 1938,
		color: "Rust",
		mileage: 150150,
		imageUrl:
			"https://cdn.pixabay.com/photo/2017/08/02/19/47/vintage-2573090_960_720.jpg"
	},
	{
		reservePrice: 50000,
		seller: "tom",
		winner: null,
		soldAmount: 0,
		currentHighBid: 0,
		createdAt: thirtyDaysAgo,
		updatedAt: thirtyDaysAgo,
		auctionEnd: aWeekLater,
		status: "ReserveNotMet",
		make: "Mercedes",
		model: "SLK",
		year: 2020,
		color: "Silver",
		mileage: 15001,
		imageUrl:
			"https://cdn.pixabay.com/photo/2016/04/17/22/10/mercedes-benz-1335674_960_720.png"
	}
]
async function main() {
	AUCTIONS.forEach(async auction => {
		const createdAuction = await prisma.auction.create({
			data: auction
		})
		console.log(createdAuction)
	})
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
