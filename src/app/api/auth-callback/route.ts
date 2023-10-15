import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/lib/firebase.config.js"
import { redirect } from "next/navigation";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    // Check if user is logged in 
    if (!user || !user.email) {
        return Response.json({ err: "UNAUTH" })
    }

    // Check if user is already added to db
    const userDoc = await getDoc(doc(db, "users", `${user.id}`))
    if (userDoc.exists()) return redirect("/")

    // Create user in db
    const usersRef = collection(db, "users")
    await setDoc(doc(usersRef, user.id?.toString()), JSON.parse(JSON.stringify(user)))
    return Response.json({ user })
}