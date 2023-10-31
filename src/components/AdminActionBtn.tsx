"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const AdminActonBtn = ({ tid }: { tid: string }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const approve = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/handle-transaction/approve`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tid
                })
            });
            const data = await res.json();
            setLoading(false)
            router.refresh()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const reject = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/handle-transaction/reject`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tid
                })
            });
            const data = await res.json();
            setLoading(false)
            router.refresh()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Button onClick={reject} variant={"destructive"} size={"sm"} className="mrr-2" >Reject</Button>
            <Button onClick={approve} className="bg-green-700" size={"sm"} >Approve</Button>
            {
                loading ? <Loader2 className="animate-spin transition-all ease-in-out" /> : null
            }
        </>
    );
}

export default AdminActonBtn;