import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request:NextRequest) {
    try {
        const allVideos = await prisma.video.findMany({
          orderBy: {
            createdAt: "desc"
          }
        })
        return NextResponse.json(allVideos)
    } catch (error) {
        return NextResponse.json({error: "Error fetching videos"}, {status: 500})
    }
    finally {
        await prisma.$disconnect()
    }
}