import { db } from "./FirebaseConfig";
import { collection,getDocs,getDoc, doc ,orderBy,query,addDoc, deleteDoc} from "firebase/firestore";

const ref= collection(db,"stocks")
const refForCart= collection(db,"Cart")
class StockService{

    addStock=(stock)=>{
         addDoc(refForCart,stock)
    }

    getAllStock=(val)=>{
        if(val==="index"){
            return getDocs(query(ref, orderBy(val)))
        }else{
            return getDocs(query(ref, orderBy(val,"desc")))
        }

       
    }

    getOneStock=(id)=>{
        const stockDoc=doc(db,"books",id)
        return getDoc(stockDoc)
    }

    getAllStockForCart=(val)=>{
        if(val==="index"){
            return getDocs(query(refForCart, orderBy(val)))
        }else{
            return getDocs(query(refForCart, orderBy(val,"desc")))
        }

       
    }
    deleteStockFromCart=(id)=>{
        const stockToDelete=doc(db,"Cart",id)
        deleteDoc(stockToDelete)
    }




}

export default new StockService()