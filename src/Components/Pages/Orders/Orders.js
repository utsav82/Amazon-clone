import React from "react";
import { useState, useEffect } from "react";
import { useStateValue } from "../../../Context/StateProvider";
import { db } from "../../../utils/firebase";
import { doc, setDoc, collection, getDoc } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    console.log(user);
    if (user) {
      //   const q = query(docRef, orderBy("created", "desc"));
      const docSnap = async () => {
        const docRef = doc(collection(db, "users", user.uid, "orders"));
        const data = await getDoc(docRef);
        console.log(data.data);
        return await getDoc(docRef);
      };

      console.log("Document data:");
      console.log("Document data:", docSnap);
    }
  }, [user]);

  return <div>Orders</div>;
}

export default Orders;
