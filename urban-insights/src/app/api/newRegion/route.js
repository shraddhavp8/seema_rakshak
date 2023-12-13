import mongoose from "mongoose";
import {connect} from "@/dbConfig/dbConfig";
import Border from "../../../models/borderModel";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        connect();
        const {regionID,name,states,neighborCountry,area,borderLength,govtBodies}=await req.json();
        
        const newRegion=new Border({regionID,name,states,neighborCountry,area,borderLength,govtBodies});

        console.log(govtBodies);
        // console.log("\n\nINDIA\n\n");
        const savedNewRegion = await newRegion.save()
        
        console.log(savedNewRegion);

        // console.log("HI")
        return NextResponse.json({
            message:"New Region Added",
            savedNewRegion
        })
    }
    catch(err){
        // console.log(err);
        return NextResponse.staus(500).json({
            message:"Error saving new region",
        })
    }
}