"use server";

import { revalidatePath } from "next/cache";

export async function Signup(formdata: FormData ) {
    const name = String(formdata.get("name") ?? "").trim();
    console.log("name", name)

    //action to sbmit to signup
    //revalidate to re-render the page and get most recent data
    //revalidatePath("/posts");
    //revalidateTag("posts");
    
}