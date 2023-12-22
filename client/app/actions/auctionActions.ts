"use server"

import { Auction, PagedResult } from "@/types"
import { db } from "../db"

export async function getData(query: string): Promise<PagedResult<Auction>> {
	const auctions = await db.auction.findMany()
	return {
		results: auctions,
		pageCount: 1,
		totalCount: 1
	}
}
