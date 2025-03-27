import axios from "axios";
import { NextResponse } from "next/server";

// ✅ API Route Handler (Next.js 13+)
export async function GET(req: Request) {
    try {
        // Extract the target URL from the query parameters
        const { searchParams } = new URL(req.url);
        const url = searchParams.get("url");

        if (!url) {
            return NextResponse.json({ error: "Missing URL parameter." }, { status: 400 });
        }

        // Fetch HTML content from the given URL
        const response = await axios.get(url, {
            headers: { "User-Agent": "Mozilla/5.0" },
        });

        return new Response(response.data, {
            status: 200,
            headers: { "Content-Type": "text/html" },
        });
    } catch (error:any) {
        console.error("Fetch error:", error);
        return NextResponse.json({
            error: "Error fetching data.",
            message: error?.message,
            details: error?.response?.data || error?.toString()
        }, { status: 500 });
    }
}
