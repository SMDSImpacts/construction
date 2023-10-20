import { NextResponse } from "next/server";
import { connectToDB } from "../../../utils/database";
import Appartment from "../../../models/appartments";


export const GET = async (request) => {
    try {
        await connectToDB()

        const appartments = await Appartment.find({})
        return new NextResponse(JSON.stringify(appartments), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch data", { status: 500 })
    }
}