
export async function RateService(id: number) {
    if(!Number.isInteger(id)){
        throw new Error("Invalid rate id")
    }
    //update rate database

    //revalidatePath("/dashboard");

}