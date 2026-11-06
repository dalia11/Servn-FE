
export async function POST(request: Request) {
    const {name, email, password} = await request.json();

    //post to database to create an account
}

export async function GET() {

    //get account from database
}
