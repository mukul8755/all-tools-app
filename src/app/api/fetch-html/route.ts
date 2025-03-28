import axios from "axios";
import { NextResponse } from "next/server";

// ✅ API Route Handler (Next.js 13+)
export async function POST(req: Request) {
    try {
        // Parse the request body
        const { url } = await req.json();

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
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json({
            error: "Error fetching data.",
            message: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
}
