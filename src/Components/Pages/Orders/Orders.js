import React from "react";
import { useState, useEffect } from "react";
import { useStateValue } from "../../../Context/StateProvider";
import { db } from "../../../utils/firebase";
import { doc, setDoc, collection, getDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const getsdata = async () => {
    const docRef = doc(collection(db, "users", user?.uid, "orders"));
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
   
  };
  useEffect(() => {
    console.log(user);
    if (user) {
     getsdata();
    
    
    }
  }, [user]);

  return <div>Orders</div>;
}

export default Orders;
