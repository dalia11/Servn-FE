"use server";

export async function Signup(formdata: FormData ) {
    const name = String(formdata.get("name") ?? "").trim();

    //action to sbmit to signup
    
}