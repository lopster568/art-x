"use client"
import { Button } from "./ui/button";

const AdminActonBtn = ({ tid }: { tid: string }) => {

    const approve = async () => {
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
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const reject = async () => {
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
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Button onClick={reject} variant={"destructive"} size={"sm"} className="mrr-2" >Reject</Button>
            <Button onClick={approve} className="bg-green-700" size={"sm"} >Approve</Button>
        </>
    );
}

export default AdminActonBtn;