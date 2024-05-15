import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    // finding userid from token , used a function from helper
    const userId = await getDataFromToken(request);
    // collection data of that user
    const user = await User.findOne({ _id: userId }).select("-password")
    return NextResponse.json({message:"User Found",
        data:user
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
